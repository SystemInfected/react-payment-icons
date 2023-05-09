import React from 'react'

export interface IconProps {
	icon: string
}

export const Icon = ({ icon }: IconProps) => {
	return <div>{icon}</div>
}
