function argError (message) {
  throw new TypeError(message)
}

class Tree {
  constructor (options) {
    const { name, species, ...theRest } = options

    this.name = name || argError('Name not defined')
    this.species = species || argError('Species not defined')

    Object.assign(this, theRest)
  }
}

export default Tree
