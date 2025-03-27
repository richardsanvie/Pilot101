import { Meta, StoryObj } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Red Dead Redemption 2',
    developer: 'Rockstar Games',
    img: 'https://picsum.photos/300/140',
    price: 'R$235,00',
    promotionalPrice: 'R$ 100,00'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

export const WithRibbon: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
