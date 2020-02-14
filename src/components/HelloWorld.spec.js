import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

import HelloWorld from '@/components/HelloWorld.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      localVue
    })
    expect(wrapper.text()).toContain(msg)
  })
})
