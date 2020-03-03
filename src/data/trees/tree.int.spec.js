/**
 * Test the instantiation of the Tree class with data
 * constructed from the Tree Schema.
 */

import Tree from './tree'
import _cloneDeep from 'lodash.clonedeep'

import treeSchema from './tree_schema'

let goodData

/**
 * Take the schema and turn it into schema compatible data
 * by replacing any schema definition objects with their
 * example values.
 *
 * @param {object} schema
 * @returns {object} The generated good data.
 */
function replaceSchemaDefinitions (schema) {
  const data = _cloneDeep(schema)

  for (const key in data) {
    const value = data[key]

    // Replace schema definitions with their example values.
    // In the case of constrained values use one of the allowed values.
    if (value.__schemaDefinition__) {
      let example

      if (Array.isArray(value.allowedValues)) {
        example = value.allowedValues[0]
      } else {
        example = value.example
      }

      data[key] = example
    }

    // Recurse.
    if (typeof data[key] === 'object') {
      data[key] = replaceSchemaDefinitions(data[key])
    }
  }

  return data
}

describe('The Tree Class', () => {
  beforeEach(() => {
    goodData = replaceSchemaDefinitions(treeSchema)
  })

  it('can be instantiated with good data', () => {
    expect(
      () => new Tree(goodData)
    ).not.toThrow()
  })

  it('cannot be instantiated with bad data', () => {
    const badData = goodData
    delete badData.species

    expect(
      () => new Tree(badData)
    ).toThrow()
  })
})
