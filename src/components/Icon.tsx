import React from 'react'
import { IconName, IconProps } from '../types/Icon'
import * as Icons from '../icons'

const styles: React.CSSProperties = {
	boxSizing: 'border-box',
	width: 'fitContent',
}

const getIcon = (icon: IconName, size: string = '24px') => {
	const svgStyles: React.CSSProperties = {
		height: size,
		width: 'auto',
	}
	switch (icon) {
		case 'AMERICAN_EXPRESS':
			return <Icons.AmericanExpress style={svgStyles} />

		default:
			return <Icons.Visa style={svgStyles} />
	}
}

/**
 * Return an SVG component with the payment method icon
 * @param {IconName} icon name of the icon
 * @param {string | number} [size="24"] optional the height in pixels or percentage
 * @param {React.CSSPropertie} [style] optional css inline style properties
 */
const Icon = ({ icon, size, style }: IconProps) => {
	const parsedSize = typeof size === 'number' ? `${size}px` : size

	return (
		<div
			style={{ ...style, ...styles, height: parsedSize }}
			//
		>
			{getIcon(icon, parsedSize)}
		</div>
	)
}

Icon.defaultProps = {
	size: 24,
	style: {},
}

export { Icon, IconProps }
