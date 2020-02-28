import Tree, { constants } from '../tree'
const { months, seedContainers, edibility } = constants

export default new Tree({
  species: 'Quercus petraea',
  family: 'Fagaceae',
  name: 'sessile oak',
  otherNames: [
    'Cornish oak',
    'durmast oak'
  ],
  confusedWith: [
    'English oak',
    'Turkey oak',
    'other oaks'
  ],
  seedContainer: seedContainers.NUT,
  edible: edibility.SORT_OF,
  // All dimensions are in meters and approximate.
  // Dimensions must contain height, may contain width.
  dimensions: {
    fiveYears: { height: 6 },
    tenYears: { height: 12 },
    max: { height: 35 }
  },
  // Descriptions are plain strings and can contain markdown formatted links.
  descriptions: {
    definingFeatures: 'The acorns are almost stalkless (or "sessile", hence the name "sessile oak"), the leaves have long stalks.',
    didYouKnow: 'Two common names of the native British oaks, pedunculate oak (Quercus robur, English oak), and the sessile oak (Quercus petraea), describe how the acorns are attached? Pedunculate oak acorns on long stalks or "peduncles", sessile oak acorns are stalkless (attached directly to a leaf cluster) or "sessile".',
    general: `The sessile oak is a native British tree and a close relative of the English oak. Typically found in higher, wetter or more westerly locations than the English oak.
    Oaks are very important to British ecologies, and have provided fuel, building material and in some cases food to people in Britain since the last ice age. They grow and mature slowly, often not reproducing until they are 40 and not reaching maximum fertility until they are 80. A 500 year old oak supports many more species than a 50 year old oak, and some specimens are thought to be [over a 1000 years old](https://en.wikipedia.org/wiki/Savernake_Forest).`,
    seedGathering: `Collect acorns from the ground as soon as they fall, they don't stay viable for long. Don't take too many as they are a vital food source for many animals, and acorns planted by squirrels, [jays](https://en.wikipedia.org/wiki/Eurasian_jay) and other animals will become the next generation of super-resilient naturally grown trees. Don't take any with holes in, they're already home to a happy invertebrate.
    Gently separate the acorns from their cups, then float the acorns in some water. Discard any that float, they don't have a viable seed inside.
    Sow your acorns straight away, they aren't dormant and if they dry out they will die. Sow about 10cm down (about as deep as a squirrel digs).
    Roots will grow over winter and shoots should appear by mid-spring.`,
    edibility: `People have traditionally made flour from acorns and they have other [uses as food](https://en.wikipedia.org/wiki/Acorn#As_food). However, acorns contain bitter tasting chemicals called [tannins](https://en.wikipedia.org/wiki/Tannin) (named for their use in tanning leather) which help the trees fight off predators, and which require proper treatment to remove (usually soaking in cold water).
    As with all lesser known foods they may cause unexpected adverse reactions so take appropriate precautions.`,
    supports: `Sessile oaks support over 500 species of invertebrates, and many birds, bats, other mammals, mosses and lichens, as well as an incredible host of microorganisms including [mycorrhizal fungi](https://en.wikipedia.org/wiki/Mycorrhizal_network) which allow plants to communicate and share resources through their roots and sink extra carbon into the ground.
    The [pied flycatcher](https://en.wikipedia.org/wiki/European_pied_flycatcher) uses sessile oaks as a nesting site.
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
    link: 'https://en.wikipedia.org/wiki/Quercus_petraea',
    data: { fetched: false }
  },
  woodlandTrust: 'https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/sessile-oak/'
})
