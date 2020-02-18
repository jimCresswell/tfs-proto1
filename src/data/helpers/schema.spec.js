import validateData from './schema'
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

describe('The validateData function', () => {
  it('allows data matching the schema', () => {
    expect(
      () => validateData(goodData, schema)
    ).not.toThrow()
  })

  it('allows additional properties in the data', () => {
    const data = _cloneDeep(goodData, schema)
    data.anExtraProperty = 'lovely'

    expect(
      () => validateData(data)
    ).not.toThrow()
  })

  it('throws on properties missing from the schema', () => {
    const data = _cloneDeep(goodData)
    delete data.name

    expect(
      () => validateData(data, schema)
    ).toThrow(/Schema error: Required property (.+) is undefined/)
  })

  it('throws on properties not matching the type in the schema', () => {
    const data = _cloneDeep(goodData)
    data.name = ['unexpected array']

    expect(
      () => validateData(data, schema)
    ).toThrow(/Schema error: Expected property (.+) to have type/)
  })

  it('accumulates errors and throws once', () => {
    const data = _cloneDeep(goodData)
    // Error 1.
    data.name = ['unexpected array']
    // Error 2.
    delete data.otherNames

    expect(
      () => validateData(data, schema)
    ).toThrow(/Schema errors:\n/)
  })
})
