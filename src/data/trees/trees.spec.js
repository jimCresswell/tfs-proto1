import Tree from './tree'
import _cloneDeep from 'lodash.clonedeep'

const goodData = {
  species: 'Someus treeus',
  name: 'Fred',
  otherNames: [
    'Henrietta'
  ],
  seedContainer: 'suitcase',
  collect: {
    start: 'month 1',
    finish: 'month 2'
  },
  wikiLink: 'https://example.com',
  wikiData: { fetched: false }
}

describe('The Tree Class', () => {
  it('can be instantiated with good data', () => {
    expect(
      () => new Tree(goodData)
    ).not.toThrow()
  })

  it('cannot be instantiated with bad data', () => {
    const data = _cloneDeep(goodData)
    delete data.species

    expect(
      () => new Tree(data)
    ).toThrow()
  })
})
