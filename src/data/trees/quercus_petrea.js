import Tree, { constants } from './tree'
const { months, seedContainers } = constants

export default new Tree({
  species: 'Quercus petrea',
  name: 'sessile oak',
  otherNames: [
    'Cornish oak',
    'durmast oak'
  ],
  seedContainer: seedContainers.NUT,
  collect: {
    start: months.SEPTEMBER,
    finish: months.OCTOBER
  },
  wikiLink: 'https://en.wikipedia.org/wiki/Quercus_petraea',
  wikiData: { fetched: false }
})
