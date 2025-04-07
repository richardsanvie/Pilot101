import { Meta, ReactRenderer } from '@storybook/react'
import GameCardSlider from '.'
import { GameCardProps } from '../GameCard'
import { StoryAnnotations } from 'storybook/internal/types'

type GameCardSliderProps = {
  items: GameCardProps[]
}

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://picsum.photos/1042/140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://picsum.photos/1042/141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://picsum.photos/1042/142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://picsum.photos/1042/143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://picsum.photos/1042/144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://picsum.photos/1042/145',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryAnnotations<ReactRenderer, GameCardSliderProps> = {
  render: ({ items }) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider items={items} />
    </div>
  )
}
