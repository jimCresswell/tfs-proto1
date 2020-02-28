import validateData from './validate_data'
import _cloneDeep from 'lodash.clonedeep'

const schema = {
  name: '',
  otherNames: [],
  collect: {
    start: '',
    finish: ''
  }
}

const goodData = {
  name: 'Fred',
  otherNames: [
    'Henrietta'
  ],
  collect: {
    start: 'month 1',
    finish: 'month 2'
  }
}

describe('The Validate Data module', () => {
  describe('validateData function', () => {
    it('allows data matching the schema', () => {
      expect(
        () => validateData(schema, goodData)
      ).not.toThrow()
    })

    it('allows additional properties in the data', () => {
      const data = _cloneDeep(goodData)
      data.anExtraProperty = 'lovely'

      expect(
        () => validateData(schema, data)
      ).not.toThrow()
    })

    it('throws on properties missing from the schema', () => {
      const data = _cloneDeep(goodData)
      delete data.name

      expect(
        () => validateData(schema, data)
      ).toThrow(/Schema error: Required property (.+) is undefined/)
    })

    it('throws on properties not matching the type in the schema', () => {
      const data = _cloneDeep(goodData)
      data.name = ['unexpected array']

      expect(
        () => validateData(schema, data)
      ).toThrow(/Schema error: Expected property (.+) to have type/)
    })

    it('accumulates errors and throws once', () => {
      const data = _cloneDeep(goodData)
      // Error 1.
      data.name = ['unexpected array']
      // Error 2.
      delete data.otherNames

      expect(
        () => validateData(schema, data)
      ).toThrow(/Schema errors:\n/)
    })

    it('checks the schema recursively and includes the property path in the error message', () => {
      const data = _cloneDeep(goodData)
      delete data.collect.start

      expect(
        () => validateData(schema, data)
      ).toThrow(/collect.start/)
    })

    test.todo('supports optional values with type checks')
    test.todo('supports lists of allowed values ')
  })

  describe('defineValue function', () => {
    test.todo('throws without an options object argument')
    test.todo('throws on an improper options object argument')
    test.todo('enables optional values to be defined')
    test.todo('enables lists of allowed values to be defined')
  })
})
