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
    const schemaPropType = _getType(schemaValue)
    const pathToProp = `${path}${schemaProp}`

    // Error: the data should contain a value for each schema property.
    if (dataValue === undefined) {
      paramErrors.push(`Required property '${pathToProp}' is undefined.`)

    /** @todo allow type mismatch if schema object is schema value definition */
    // Error: the data should contain a value of the correct type.
    } else if (schemaPropType !== dataPropType) {
      paramErrors.push(`Expected property '${pathToProp}' to have type '${schemaPropType}', received value '${data[schemaProp]}' with type '${dataPropType}'.`)

    // Success.
    } else {
    /** @todo don't do this if schema object is schema value definition */
      // If the schema property is an object then recursive check that part of the schema.
      if (schemaPropType === 'object') {
        const subPath = `${pathToProp}.`
        const subErrors = _checkParams(schemaValue, dataValue, subPath)
        // Merge any errors.
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
 * if they are present, and to set allowed values.
 *
 * @param {object} options Collection of options including `type` and `optional`
 * @returns A data value schema definition object.
 */
function defineValue (options) {
  if (typeof options !== 'object') {
    throw new TypeError(`Expected an options object, received: ${options}`)
  }
  if (options.type === undefined) {
    throw new TypeError('Please provide an example type for the value being defined. E.g. \'\', [], or {}')
  }
  const allowedValues = options.allowedValues
  if (allowedValues !== undefined && !Array.isArray(allowedValues)) {
    throw new TypeError(`Expected an array of allowed values, received ${allowedValues}`)
  }

  const valueDefinition = {
    __schemaDefinition__: true,
    optional: Boolean(options.optional),
    type: options.type,
    allowedValues: _cloneDeep(allowedValues)
  }

  return valueDefinition
}

export default validateData
export { defineValue }
