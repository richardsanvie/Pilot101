import 'match-media-mock'
import { screen } from '@testing-library/react'

import bannerMock from '@/components/BannerSlider/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

import Home from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const props = {
  banners: bannerMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)
    // menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    // logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // card game ( 5 sections com 4 cards cada = 5x4 = 20)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(4)
    // highlight
    expect(screen.getAllByText(/read dead it's back/i)).toHaveLength(1)
  })
})
