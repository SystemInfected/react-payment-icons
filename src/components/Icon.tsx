import React from 'react'
import { IconName, IconProps } from '../types/Icon'
import * as Icons from '../icons'

const styles: React.CSSProperties = {
	boxSizing: 'border-box',
}

/**
 * Return an SVG component with the payment method icon
 * @param {IconName} icon name of the icon
 * @param {string | number} [size="24"] optional the height in pixels or percentage
 * @param {React.CSSPropertie} [style] optional css inline style properties
 * @param {string} [alt] optional alt property of the icon (for accessibility purposes)
 */
const Icon = ({ icon, size, style, alt }: IconProps) => {
	const parsedSize = typeof size === 'number' ? `${size}px` : size

	return (
		<div
			style={{ ...style, ...styles }}
			//height={parsedSize}
			//alt={alt ? alt : icon}
		>
			<Icons.AmericanExpress />
		</div>
	)
}

Icon.defaultProps = {
	size: 24,
	style: {},
	alt: '',
}

export { Icon, IconProps }
