import Tree, { months, seedContainers } from './tree'

export default new Tree({
  species: 'Quercus petrea',
  name: 'sessile oak',
  otherNames: [
    'Cornish oak',
    'durmast oak'
  ],
  seedContainer: seedContainers.NUT,
  collect: [months.SEPTEMBER, months.OCTOBER],
  wikiLink: 'https://en.wikipedia.org/wiki/Quercus_petraea',
  wikiData: { fetched: false }
})
