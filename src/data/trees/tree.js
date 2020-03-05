import validateData from '../helpers/validate_data'
import treeSchema, { constants } from './tree_schema'

/**
 * Container class for tree data, with argument checking.
 *
 * @class Tree
 */
class Tree {
  /**
   * Creates an instance of Tree.
   * @param {Object} treeData The tree data to be validated them mixed into the Tree object.
   * @param {Boolean} [disableValidation] Disable the validation for testing purposes only.
   * @memberof Tree
   */
  constructor (treeData, disableValidation = false) {
    if (disableValidation) {
      console.warn('Tree class instantiated without validation, for testing only.')
    } else {
      validateData(treeSchema, treeData)
    }

    Object.assign(this, treeData)
  }
}

export default Tree
export { constants }
