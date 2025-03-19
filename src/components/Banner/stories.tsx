import { Meta, StoryObj } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  argTypes: {
    ribbon: {
      type: 'string'
    }
  },
  args: {
    img: 'https://picsum.photos/1042/580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj<BannerProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
}

export const WithRibbon: StoryObj<BannerProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
}

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
