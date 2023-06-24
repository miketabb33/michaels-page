import { ReactElement } from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

export const shallowRenderer = (component: ReactElement) => {
  const renderer = ShallowRenderer.createRenderer()
  return renderer.render(component)
}
