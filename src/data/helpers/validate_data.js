import _cloneDeep from 'lodash.clonedeep'

/**
 * typeof with 'array'
 *
 * @param {*} obj
 * @returns string
 */
function _getType (obj) {
  let type = typeof obj
  if (type === 'object' && Array.isArray(obj)) {
    type = 'array'
  }
  return type
}

/**
 * Loop over the provided schema and recursively check the data satisfies it.
 *
 * @param {Object} schema The schema to check against.
 * @param {Object} data The data to check.
 * @param {string} path the object dot notation path to the current sub-schema from the parent schema.
 * @returns {Array} An array containing any accumulated failures of the data to meet the schema.
 */
function _checkParams (schema, data, path = '') {
  const paramErrors = []

  // Note the loop is over the schema, there are no constraints on data properties outside the schema.
  for (const schemaProp in schema) {
    const dataValue = data[schemaProp]
    const dataPropType = _getType(dataValue)
    const schemaValue = schema[schemaProp]
    const schemaPropIsDefinition = Boolean(schemaValue.__schemaDefinition__)
    const schemaExample = schemaPropIsDefinition ? schemaValue.example : schemaValue
    const schemaPropType = _getType(schemaExample)
    const schemaPropIsOptional = schemaPropIsDefinition && schemaValue.optional
    const schemaPropAllowedValues = schemaValue.allowedValues
    const pathToProp = `${path}${schemaProp}`

    // Potential Error: the data should contain a value for each non-optional schema property.
    if (dataValue === undefined) {
      // If value is not optional throw, otherwise it's ok that it's `undefined`.
      if (!schemaPropIsOptional) {
        paramErrors.push(`Required property '${pathToProp}' is undefined.`)
      }

    // Error: the data should contain a value of the correct type.
    } else if (schemaPropType !== dataPropType) {
      paramErrors.push(`Expected property '${pathToProp}' to have type '${schemaPropType}', received value '${data[schemaProp]}' with type '${dataPropType}'.`)

    // The data exists and is of the correct type.
    } else {
      // If there is an allowed value list check the provided data against it.
      if (Array.isArray(schemaPropAllowedValues)) {
        if (!schemaPropAllowedValues.includes(dataValue)) {
          paramErrors.push(`Expected value to be one of '[${schemaPropAllowedValues.join(', ')}]', received: '${dataValue}'`)
        }
      }

      // If the example schema value is an object then recursively check its keys as well.
      if (schemaPropType === 'object') {
        const subPath = `${pathToProp}.`
        const subErrors = _checkParams(schemaExample, dataValue, subPath)
        // Merge any errors and move on to the next property in the schema.
        paramErrors.push(...subErrors)
      }
    }
  }

  return paramErrors
}

// Format error output.
function _toErrorString (paramErrors) {
  return paramErrors.reduce(
    (p, c) => { return (p += c.toString() + '\n') },
    ''
  )
}

/**
 * Check an object against a schema, throw if props or types in the schema are not followed.
 * The data object can contain additional props not in the schema.
 *
 * @param {Object} schema The schema
 * @param {Object} data The data to be checked against the schema
 * @throws {TypeError} A TypeError if the schema is not followed.
 */
function validateData (schema, data) {
  if (typeof schema !== 'object') {
    throw new TypeError(`Expected schema definition object, received ${schema}`)
  }
  if (typeof data !== 'object') {
    throw new TypeError(`Expected data object, received ${data}`)
  }

  const paramErrors = _checkParams(schema, data)

  // If schema errors were found then throw.
  if (paramErrors.length) {
    if (paramErrors.length > 1) {
      throw new TypeError('Schema errors:\n' + _toErrorString(paramErrors))
    }
    throw new TypeError('Schema error: ' + _toErrorString(paramErrors))
  }
}

/**
 * Create a schema value definition from an options object.
 * Allows more fine-grained control than specifying e.g. `treeDescription: ''`.
 *
 * Currently used to mark values as optional but still allow type testing
 * if they are present, and to set lists allowed values.
 *
 * @param {object} options Collection of options describing the value
 * @param {*} options.example An example type for the value, e.g. `''`, `true`, `1`, `[]`, `{}`
 * @param {boolean} [options.optional] An (optional) boolean describing whether the value is optional, default false.
 * @param {Array} [options.allowedValues] An (optional) array of allowed values for the value.
 * @returns {{
    __schemaDefinition__: true,
    optional: boolean,
    example: any,
    allowedValues: Array
  }} A data value schema definition object.
 */
function defineValue (options) {
  if (typeof options !== 'object') {
    throw new TypeError(`Expected an options object, received: ${options}`)
  }
  if (options.example === undefined) {
    throw new TypeError('Please provide an example type for the value being defined. E.g. \'\', [], or {}')
  }
  const allowedValues = options.allowedValues
  if (allowedValues !== undefined && !Array.isArray(allowedValues)) {
    throw new TypeError(`Expected an array of allowed values, received: ${allowedValues}`)
  }

  const valueDefinition = {
    __schemaDefinition__: true,
    example: options.example,
    optional: Boolean(options.optional),
    allowedValues: _cloneDeep(allowedValues) || undefined
  }

  return valueDefinition
}

export default validateData
export { defineValue }
