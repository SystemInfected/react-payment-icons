export type IconName =
	| 'AMERICAN_EXPRESS'
	| 'APPLE_PAY'
	| 'GOOGLE_PAY'
	| 'KLARNA'
	| 'MASTERCARD'
	| 'SHOPIFY_PAY'
	| 'VISA'

export type TSize = `${number}px` | `${number}em` | `${number}rem`

export interface IconProps {
	icon: IconName
	size?: TSize | number
	style?: React.CSSProperties
}

export interface TSVGIcon {
	style: React.CSSProperties
}
