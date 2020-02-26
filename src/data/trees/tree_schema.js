const treeSchema = {
  species: '',
  family: '',
  name: '',
  otherNames: [],
  confusedWith: [],
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
