import { Meta, ReactRenderer } from '@storybook/react'
import GameCardSlider from '.'
import { GameCardProps } from '../GameCard'
import { StoryAnnotations } from 'storybook/internal/types'
import items from './mock'

type GameCardSliderProps = {
  items: GameCardProps[]
}



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
