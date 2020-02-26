import Tree, { constants } from './tree'
const { months, seedContainers } = constants

export default new Tree({
  species: 'Quercus robur',
  family: 'Fagaceae',
  name: 'English oak',
  otherNames: [
    'common oak',
    'pedunculate oak',
    'European oak'
  ],
  confusedWith: [
    'sessile oak',
    'Turkey oak',
    'other oaks'
  ],
  seedContainer: seedContainers.NUT,
  // All dimensions are in meters and approximate.
  // Dimensions must contain height, may contain width.
  dimensions: {
    fiveYears: { height: 5 },
    tenYears: { height: 10 },
    max: { height: 35 }
  },
  // Descriptions are plain strings and can contain markdown formatted links.
  descriptions: {
    definingFeatures: 'The acorns are on long stalks (also called peduncles, hence the name "pedunculate oak"), the leaves are lobed and almost stalkless.',
    didYouKnow: 'Two common names of the native British oaks, pedunculate oak (Quercus robur, English oak), and the sessile oak (Quercus petraea), describe how the acorns are attached? Pedunculate oak acorns on long stalks or "peduncles", sessile oak acorns are stalkless (attached directly to a leaf cluster) or "sessile".',
    general: `The English oak is an iconic native British tree typically found in lowland areas (higher or wetter areas are more likely to contain the closely related Sessile oak).
    Oaks are very important to British ecologies, and have provided fuel, building material and in some cases food to people in Britain since the last ice age. They grow and mature slowly, often not reproducing until they are 40 and not reaching maximum fertility until they are 80. A 500 year old oak supports many more species than a 50 year old oak, and some specimens are thought to be [over a 1000 years old](https://en.wikipedia.org/wiki/Savernake_Forest).`,
    seedGathering: `Collect acorns from the ground as soon as they fall, they don't stay viable for long. Don't take too many as they are a vital food source for many animals, and acorns planted by squirrels, [jays](https://en.wikipedia.org/wiki/Eurasian_jay) and other animals will become the next generation of super-resilient naturally grown trees. Don't take any with holes in, they're already home to a happy invertebrate.
    Gently separate the acorns from their cups, then float the acorns in some water. Discard any that float, they don't have a viable seed inside.
    Sow your acorns straight away, they aren't dormant and if they dry out they will die. Sow about 10cm down (about as deep as a squirrel digs).
    Roots will grow over winter and shoots should appear by mid-spring.`,
    supports: `English oaks support over 500 species of invertebrates, and many birds, bats, other mammals, mosses and lichens, as well as an incredible host of microorganisms including [mycorrhizal fungi](https://en.wikipedia.org/wiki/Mycorrhizal_network) which allow plants to communicate and share resources through their roots and sink extra carbon into the ground.
    The [purple hairstreak butterfly](https://en.wikipedia.org/wiki/Purple_hairstreak) only breeds on oaks, where they can be spotted in the canopies in mid to late summer.
    Oaks are an incredibly important source of food and shelter for many British species.`
  },
  // Date ranges are inclusive:
  // "September" to "October" means all of September and all of October.
  // "mid-September" to "mid-October" means approximately four weeks starting in mid-September.
  dates: {
    collect: {
      start: { year: 1, month: months.SEPTEMBER },
      finish: { year: 1, month: months.OCTOBER }
    },
    sow: {
      start: { year: 1, month: months.SEPTEMBER },
      finish: { year: 1, month: months.OCTOBER }
    },
    germinate: {
      start: { year: 2, month: months.APRIL },
      finish: { year: 2, month: months.SEPTEMBER }
    },
    plant: {
      start: { year: 2, month: months.OCTOBER },
      finish: { year: 3, month: months.FEBRUARY }
    }
  },
  wikipedia: {
    link: 'https://en.wikipedia.org/wiki/Quercus_robur',
    data: { fetched: false }
  },
  woodlandTrust: 'https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/english-oak/'
})
