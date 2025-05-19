'use client'
import Home from '../templates/Home'
import bannersMock from '@/components/BannerSlider/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

export default function Page() {
  const Homeprops = {
    banners: bannersMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: gamesMock,
  }

  return <Home {...Homeprops} />
}
