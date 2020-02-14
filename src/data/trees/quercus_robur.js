import Tree, { months, seedContainers } from './tree'

export default new Tree({
  species: 'Quercus robur',
  name: 'English oak',
  otherNames: [
    'common oak',
    'pedunculate oak',
    'European oak'
  ],
  seedContainer: seedContainers.NUT,
  collect: [months.SEPTEMBER, months.OCTOBER],
  wikiLink: 'https://en.wikipedia.org/wiki/Quercus_robur',
  wikiData: { fetched: false }
})
