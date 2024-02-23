import { render } from '@redwoodjs/testing/web'

import ArPage from './ArPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ArPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArPage />)
    }).not.toThrow()
  })
})
