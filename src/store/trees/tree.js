const optionsSchema = {
  species: '',
  name: '',
  wikiLink: '',
  wikiData: {},
  otherNames: [],
  seedContainer: '',
  collect: ['', '']
}

function checkOptions (options) {
  for (const prop in optionsSchema) {
    // Options should contain a value for each schema property.
    const optionsValue = options[prop]
    if (undefined === optionsValue) {
      throw new TypeError(`Tree option '${prop}' is undefined.`)
    }

    // Options should contain a value of the correct type.
    const schemaType = typeof optionsSchema[prop]
    const optionType = typeof options[prop]
    if (schemaType !== optionType) {
      throw new TypeError(
        `Tree option type error.
        Expected type ${schemaType} ... Received ${options[prop]} with type ${optionType}.`
      )
    }
  }
}

/**
 * Container class for tree data, with argument checking.
 *
 * @class Tree
 */
class Tree {
  constructor (options) {
    checkOptions(options)
    Object.assign(this, options)
  }
}

const seedContainers = {
  NUT: 'nut',
  FRUIT: 'fruit',
  WING: 'wing',
  CONE: 'cone'
}

const months = {
  JANUARY: 'January',
  MIDJANUARY: 'mid-January',
  FEBRUARY: 'February',
  MIDFEBRUARY: 'mid-February',
  MARCH: 'March',
  MIDMARCH: 'mid-March',
  APRIL: 'April',
  MIDAPRIL: 'mid-April',
  MAY: 'May',
  MIDMAY: 'mid-May',
  JUNE: 'June',
  MIDJUNE: 'mid-June',
  JULY: 'July',
  MIDJULY: 'mid-July',
  AUGUST: 'August',
  MIDAUGUST: 'mid-August',
  SEPTEMBER: 'September',
  MIDSEPTEMBER: 'mid-September',
  OCTOBER: 'October',
  MIDOCTOBER: 'mid-October',
  NOVEMBER: 'November',
  MIDNOVEMBER: 'mid-November',
  DECEMBER: 'December',
  MIDDECEMBER: 'mid-December'
}

export default Tree
export {
  seedContainers,
  months
}
