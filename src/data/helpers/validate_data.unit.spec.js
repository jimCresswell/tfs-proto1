import validateData, { defineValue } from './validate_data'

let schema, goodData

describe('The Validate Data module', () => {
  describe('defineValue function', () => {
    it('throws without an options object argument', () => {
      expect(
        () => { defineValue() }
      ).toThrow(/Expected an options object/)
    })

    it('throws if options.example is missing', () => {
      expect(
        () => { defineValue({}) }
      ).toThrow(/Please provide an example type/)
    })

    it('throws if options.allowedValues is not an Array', () => {
      expect(
        () => { defineValue({ example: '', allowedValues: 123 }) }
      ).toThrow(/Expected an array of allowed values/)
    })

    it('enables optional values to be defined', () => {
      const schemaValue = defineValue({ example: 1, optional: true })
      expect(schemaValue.optional).toBe(true)
    })

    it('enables lists of allowed values to be defined', () => {
      const av = [1, 2, 3]
      const schemaValue = defineValue({ example: 1, allowedValues: av })
      expect(schemaValue.allowedValues).toEqual(av)
    })
  })

  describe('validateData function', () => {
    beforeEach(() => {
      schema = {
        name: '',
        otherNames: [],
        age: 1,
        happy: true,
        collect: {
          start: '',
          finish: ''
        },
        optionalValue: defineValue({ example: 1, optional: true }),
        constrainedValue: defineValue({ example: '', allowedValues: ['allowed1', 'allowed2'] })
      }

      goodData = {
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
        optionalValue: 888,
        constrainedValue: 'allowed1'
      }
    })

    it('allows data matching the schema', () => {
      expect(
        () => validateData(schema, goodData)
      ).not.toThrow()
    })

    it('allows additional properties in the data', () => {
      goodData.anExtraProperty = 'lovely'

      expect(
        () => validateData(schema, goodData)
      ).not.toThrow()
    })

    it('throws on properties missing from the schema', () => {
      const badData = goodData
      delete badData.name

      expect(
        () => validateData(schema, badData)
      ).toThrow(/Schema error: Required property (.+) is undefined/)
    })

    it('throws on properties not matching the type in the schema', () => {
      const badData = goodData
      badData.name = ['unexpected array']

      expect(
        () => validateData(schema, badData)
      ).toThrow(/Schema error: Expected property (.+) to have type/)
    })

    it('accumulates errors and throws once', () => {
      const badData = goodData
      // Error 1.
      badData.name = ['unexpected array']
      // Error 2.
      delete badData.otherNames

      expect(
        () => validateData(schema, badData)
      ).toThrow(/Schema errors:\n/)
    })

    it('checks the schema recursively and includes the property path in the error message', () => {
      const badData = goodData
      delete badData.collect.start

      expect(
        () => validateData(schema, badData)
      ).toThrow(/collect.start/)
    })

    it('allows optional values to be missing', () => {
      delete goodData.optionalValue

      expect(
        () => validateData(schema, goodData)
      ).not.toThrow()
    })

    it('supports type checking on optional values', () => {
      const badData = goodData
      badData.optionalValue = 'unexpected string'

      expect(
        () => validateData(schema, badData)
      ).toThrow(/Schema error: Expected property .* to have type .*/)
    })

    it('checks values against the allowedValues list', () => {
      const badData = goodData
      badData.constrainedValue = 'another unexpected string'

      expect(
        () => validateData(schema, badData)
      ).toThrow(/Expected value to be one of/)
    })
  })
})
