import Tree, { constants } from './tree'
const { months, seedContainers } = constants

export default new Tree({
  species: 'Quercus robur',
  name: 'English oak',
  otherNames: [
    'common oak',
    'pedunculate oak',
    'European oak'
  ],
  seedContainer: seedContainers.NUT,
  collect: {
    start: months.SEPTEMBER,
    finish: months.OCTOBER
  },
  wikiLink: 'https://en.wikipedia.org/wiki/Quercus_robur',
  wikiData: { fetched: false }
})
