import { mount } from '@vue/test-utils'
import { CircleProgress } from '@nutui/nutui'

test('CircleProgress: should change stoke when use width props', async () => {
  const wrapper = mount(CircleProgress, {
    props: {
      progress: 40,
      strokeWidth: 10,
      radius: 60
    }
  })
  const element = wrapper.element as HTMLElement
  expect(element.style.width).toEqual('120px')
  expect(element.style.height).toEqual('120px')
})
test('CircleProgress: should change color when use color props', async () => {
  const wrapper = mount(CircleProgress, {
    props: {
      progress: 40,
      color: 'red'
    }
  })
  const path = wrapper.findAll('path')
  expect(path[1].html()).toContain('red')
})
test('CircleProgress: gradient', async () => {
  const wrapper = mount(CircleProgress, {
    props: {
      progress: 40,
      clockwise: false,
      color: {
        '0%': '#FF5E5E',
        '100%': '#FFA062'
      }
    }
  })
  expect(wrapper.html()).toContain('stop')
})
