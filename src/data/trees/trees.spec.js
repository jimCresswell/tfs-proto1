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
  describe('data validation with a schema', () => {
    it('allows data matching the schema', () => {
      expect(
        () => new Tree(goodData)
      ).not.toThrow()
    })

    it('allows additional properties in the data', () => {
      const data = _cloneDeep(goodData)
      data.anExtraProperty = 'lovely'

      expect(
        () => new Tree(data)
      ).not.toThrow()
    })

    it('throws on properties missing from the schema', () => {
      const data = _cloneDeep(goodData)
      delete data.species

      expect(
        () => new Tree(data)
      ).toThrow(/Schema error: Required property (.+) is undefined/)
    })

    it('throws on properties not matching the type in the schema', () => {
      const data = _cloneDeep(goodData)
      data.species = ['unexpected array']

      expect(
        () => new Tree(data)
      ).toThrow(/Schema error: Expected property (.+) to have type/)
    })

    it('accumulates errors and throws once', () => {
      const data = _cloneDeep(goodData)
      data.species = ['unexpected array']
      delete data.name

      expect(
        () => new Tree(data)
      ).toThrow(/Schema errors:\n/)
    })
  })
})
