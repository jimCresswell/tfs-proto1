import validateData from '../helpers/schema'

const dataSchema = {
  species: '',
  name: '',
  wikiLink: '',
  wikiData: {},
  otherNames: [],
  seedContainer: '',
  collect: { start: '', finish: '' }
}

/**
 * Container class for tree data, with argument checking.
 *
 * @class Tree
 */
class Tree {
  constructor (options) {
    validateData(options, dataSchema)
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
export const constants = {
  seedContainers,
  months
}
