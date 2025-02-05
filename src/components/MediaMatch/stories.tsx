import { Meta, StoryObj } from '@storybook/react'
import MediaMatch from '.'

const meta: Meta<typeof MediaMatch> = {
  title: 'MediaMatch',
  component: MediaMatch
}

export default meta

type Story = StoryObj<typeof MediaMatch>

export const Desktop: Story = {
  render: () => <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
}

export const Mobile: Story = {
  render: () => <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
