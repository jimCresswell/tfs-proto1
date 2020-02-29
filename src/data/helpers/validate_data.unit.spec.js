import validateData, { defineValue } from './validate_data'
import _cloneDeep from 'lodash.clonedeep'

const schema = {
  name: '',
  otherNames: [],
  age: 1,
  happy: true,
  collect: {
    start: '',
    finish: ''
  },
  optionalValue: defineValue({ type: 1, optional: true }),
  constrainedValue: defineValue({ type: '', allowedValues: ['allowed1', 'allowed2'] })
}

const goodData = {
  name: 'Fred',
  otherNames: [
    'Henrietta'
  ],
  age: 900,
  happy: true,
  collect: {
    start: 'month 1',
    finish: 'month 2'
  },
  constrainedValue: 'allowed1'
}

describe('The Validate Data module', () => {
  describe('defineValue function', () => {
    it('throws without an options object argument', () => {
      expect(
        () => { defineValue() }
      ).toThrow(/Expected an options object/)
    })

    it('throws if options.type is missing', () => {
      expect(
        () => { defineValue({}) }
      ).toThrow(/Please provide an example type/)
    })

    it('throws if options.allowedValues is not an Array', () => {
      expect(
        () => { defineValue({ type: '', allowedValues: 123 }) }
      ).toThrow(/Expected an array of allowed values/)
    })

    it('enables optional values to be defined', () => {
      const schemaValue = defineValue({ type: 1, optional: true })
      expect(schemaValue.optional).toBe(true)
    })

    it('enables lists of allowed values to be defined', () => {
      const av = [1, 2, 3]
      const schemaValue = defineValue({ type: 1, allowedValues: av })
      expect(schemaValue.allowedValues).toEqual(av)
    })
  })

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

    it('supports optional values', () => {
      const data = _cloneDeep(goodData)
      data.optionalValue = 333

      expect(
        () => validateData(schema, data)
      ).not.toThrow()
    })

    it('supports type checking on optional values', () => {
      const data = _cloneDeep(goodData)
      data.optionalValue = 'unexpected string'

      expect(
        () => validateData(schema, data)
      ).toThrow(/type checking on optional value/)
    })

    it('checks values against the allowedValues list', () => {
      const data = _cloneDeep(goodData)
      data.constrainedValue = 'another unexpected string'

      expect(
        () => validateData(schema, data)
      ).toThrow(/checking against allowed list/)
    })
  })
})
