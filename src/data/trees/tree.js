import validateData from '../helpers/validate_data'
import treeSchema, { constants } from './tree_schema'

/**
 * Container class for tree data, with argument checking.
 *
 * @class Tree
 */
class Tree {
  constructor (options) {
    validateData(options, treeSchema)
    Object.assign(this, options)
  }
}

export default Tree
export { constants }
