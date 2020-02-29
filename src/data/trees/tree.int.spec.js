import Tree from './tree'
import _cloneDeep from 'lodash.clonedeep'

import treeSchema from './tree_schema'

describe('The Tree Class', () => {
  it('can be instantiated with good data', () => {
    expect(
      () => new Tree(treeSchema)
    ).not.toThrow()
  })

  it('cannot be instantiated with bad data', () => {
    const data = _cloneDeep(treeSchema)
    delete data.species

    expect(
      () => new Tree(data)
    ).toThrow()
  })
})
