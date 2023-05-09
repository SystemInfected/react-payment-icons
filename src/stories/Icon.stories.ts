import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Icon',
	component: Icon,
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
	args: {
		icon: 'AMERICAN_EXPRESS',
	},
}

export const SizePixel: Story = {
	args: {
		icon: 'MASTERCARD',
		size: '100px',
	},
}

export const SizePercent: Story = {
	args: {
		icon: 'SHOPIFY_PAY',
		size: '10rem',
	},
}

export const Styled: Story = {
	args: {
		icon: 'APPLE_PAY',
		size: 50,
		style: { opacity: '0.5' },
	},
}
