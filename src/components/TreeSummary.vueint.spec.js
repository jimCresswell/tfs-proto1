import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import TreeSummary from './TreeSummary.vue'
import Tree from '../data/trees/tree'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('TreeSummary.vue', () => {
  it('creates a link to an external data source', () => {
    const disableValidation = true
    const url = 'https:example.com'
    const data = {
      tree: new Tree({
        wikipedia: { link: url }
      }, disableValidation)
    }

    const wrapper = shallowMount(TreeSummary, {
      propsData: data,
      localVue
    })

    expect(wrapper.html()).toContain(url)
  })
})
