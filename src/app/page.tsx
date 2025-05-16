'use client'
import Home, { HomeTemplateProps } from '../templates/Home'
import bannersMock from '@/components/BannerSlider/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

export default function Page(props: HomeTemplateProps) {
  const Homeprops = {
    banners: bannersMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: gamesMock,
  }

  return <Home {...Homeprops} />
}
