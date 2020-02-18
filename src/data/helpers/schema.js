/**
 * typeof with 'array'
 *
 * @param {*} obj
 * @returns string
 */
function getType (obj) {
  let type = typeof obj
  if (type === 'object' && Array.isArray(obj)) {
    type = 'array'
  }
  return type
}

/**
 * Check an object against a schema, throw if props or types in the schema are not followed.
 * The data object can contain additional props not in the schema.
 *
 * @param Object data The data to be checked against the schema
 * @param Object schema The schema
 * @throws A TypeError is the schema is not followed.
 */
function validateData (data, schema) {
  const paramErrors = []
  // Format error output.
  paramErrors.toErrorString = function () {
    return this.reduce(
      (p, c) => { return (p += c.toString() + '\n') },
      ''
    )
  }

  // Note the loop is over the schema, there are no constraints on data properties outside the schema.
  for (const prop in schema) {
    const dataValue = data[prop]
    // The data should contain a value for each schema property.
    if (undefined === dataValue) {
      paramErrors.push(`Required property '${prop}' is undefined.`)
      // The data should contain a value of the correct type.
    } else {
      const schemaType = getType(schema[prop])
      const dataType = getType(data[prop])
      if (schemaType !== dataType) {
        paramErrors.push(
          `Expected property '${prop}' to have type '${schemaType}', received value '${data[prop]}' with type '${dataType}'.`
        )
      }
    }
  }

  // If schema errors were found then throw.
  if (paramErrors.length) {
    if (paramErrors.length > 1) {
      throw new TypeError('Schema errors:\n' + paramErrors.toErrorString())
    }
    throw new TypeError('Schema error: ' + paramErrors.toErrorString())
  }
}

export default validateData
