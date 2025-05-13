import { render, screen } from '@testing-library/react'
import Home from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import Index from '@/app/page'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    render(<Index />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', {name:/contact us/i})).toBeInTheDocument()
    it('should render the sections', () =>{
      renderWithTheme(<Index/>)
    })
  })
})
