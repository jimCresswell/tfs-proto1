import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import TreeSummary from './TreeSummary.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('TreeSummary.vue', () => {
  it('creates a link to an external data source', () => {
    const link = 'https:example.com'
    const wrapper = shallowMount(TreeSummary, {
      propsData: { wikiLink: link },
      localVue
    })
    expect(wrapper.text()).toContain(link)
  })
})
