import validateData from '../helpers/validate_data'
import treeSchema, { constants } from './tree_schema'

/**
 * Container class for tree data, with argument checking.
 *
 * @class Tree
 */
class Tree {
  constructor (treeData) {
    validateData(treeSchema, treeData)
    Object.assign(this, treeData)
  }
}

export default Tree
export { constants }
