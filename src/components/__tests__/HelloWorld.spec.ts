import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

// vue component.
const HelloWorld = {}

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
