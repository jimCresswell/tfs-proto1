/**
 * The data structure schema for data passed to the Tree class at instantiation.
 */

import { defineValue } from '../helpers/validate_data'

/*
  Constants used in defining the tree data.
*/

const edibility = {
  YES: 'yes',
  NO: 'no',
  SORT_OF: 'sort of'
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

/*
  The schema.
*/

const treeSchema = {
  species: '',
  family: '',
  name: '',
  otherNames: [],
  confusedWith: [],
  edible: defineValue({
    example: '',
    optional: false,
    allowedValues: [edibility.YES, edibility.NO, edibility.SORT_OF]
  }),
  seedContainer: '',
  // All dimensions are in meters and approximate.
  // Dimensions must contain height, may contain width.
  dimensions: {
    fiveYears: { height: 1 },
    tenYears: { height: 1 },
    max: { height: 1 }
  },
  // Descriptions are plain strings and can contain markdown formatted links.
  descriptions: {
    definingFeatures: '',
    didYouKnow: '',
    general: '',
    seedGathering: '',
    edibility: defineValue({ example: '', optional: true }),
    supports: ''
  },
  // Date ranges are inclusive:
  // "September" to "October" means all of September and all of October.
  // "mid-September" to "mid-October" means approximately four weeks starting in mid-September.
  dates: {
    collect: {
      start: { year: 1, month: '' },
      finish: { year: 1, month: '' }
    },
    sow: {
      start: { year: 1, month: '' },
      finish: { year: 1, month: '' }
    },
    germinate: {
      start: { year: 1, month: '' },
      finish: { year: 1, month: '' }
    },
    plant: {
      start: { year: 1, month: '' },
      finish: { year: 1, month: '' }
    }
  },
  wikipedia: {
    link: '',
    data: { fetched: false }
  },
  woodlandTrust: ''
}

export default treeSchema
export const constants = {
  edibility,
  seedContainers,
  months
}
