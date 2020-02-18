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
  for (const prop in schema) {
    const dataValue = data[prop]
    const schemaPropType = _getType(schema[prop])

    // The data should contain a value for each schema property.
    if (undefined === dataValue) {
      paramErrors.push(`Required property '${path + prop}' is undefined.`)
    // The data should contain a value of the correct type.
    } else {
      const dataPropType = _getType(data[prop])
      if (schemaPropType !== dataPropType) {
        paramErrors.push(`Expected property '${path + prop}' to have type '${schemaPropType}', received value '${data[prop]}' with type '${dataPropType}'.`)
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
 * @param {Object} data The data to be checked against the schema
 * @param {Object} schema The schema
 * @throws {TypeError} A TypeError if the schema is not followed.
 */
function validateData (data, schema) {
  const paramErrors = _checkParams(schema, data)

  // If schema errors were found then throw.
  if (paramErrors.length) {
    if (paramErrors.length > 1) {
      throw new TypeError('Schema errors:\n' + _toErrorString(paramErrors))
    }
    throw new TypeError('Schema error: ' + _toErrorString(paramErrors))
  }
}

export default validateData
