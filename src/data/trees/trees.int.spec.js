/**
 * A test pulling in the `trees` directory index file, which in turn instantiates all
 * the tree data in `Tree` classes, putting all the tree data through the schema check.
 * The schema checks should find no issues and therefore not throw any exceptions.
 */

describe('The tree data collection', () => {
  it('is processed without errors', () => {
    const getTrees = () => {
      const trees = require('./index')
      return trees
    }

    expect(getTrees).not.toThrow()
  })
})
