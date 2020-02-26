import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import TreeSummary from './TreeSummary.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('TreeSummary.vue', () => {
  it('creates a link to an external data source', () => {
    const url = 'https:example.com'
    const data = { tree: { wikipedia: { link: url } } }

    const wrapper = shallowMount(TreeSummary, {
      propsData: data,
      localVue
    })
    expect(wrapper.html()).toContain(url)
  })
})
