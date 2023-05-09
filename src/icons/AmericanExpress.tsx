import React from 'react'
import { TSVGIcon } from '../types/Icon'

const AmericanExpress = ({ style }: TSVGIcon) => {
	return (
		<svg
			style={style}
			xmlns='http://www.w3.org/2000/svg'
			width='120'
			height='80'
			viewBox='0 0 120 80'
		>
			<defs>
				<linearGradient id='a' x1='5.1%' x2='100%' y1='5.1%' y2='100%'>
					<stop offset='0%' stopColor='#51AAD6'></stop>
					<stop offset='100%' stopColor='#1D3A90'></stop>
				</linearGradient>
			</defs>
			<g fill='none' fillRule='evenodd'>
				<rect width='120' height='80' fill='url(#a)' rx='4'></rect>
				<path
					fill='#FFF'
					d='M27.557 28.241L18 49.971h11.445l1.416-3.465h3.245l1.415 3.465h12.596v-2.643l1.12 2.643h6.52l1.12-2.702v2.702h26.194l3.186-3.377 2.979 3.377 13.45.029L93.1 39.165l9.587-10.924H89.442l-3.097 3.319-2.89-3.319H54.96l-2.448 5.609-2.507-5.609H38.589v2.555l-1.268-2.555h-9.764zm2.212 3.084h5.575l6.342 14.74v-14.74h6.106l4.897 10.57 4.513-10.57h6.076v15.592h-3.687l-.03-12.215-5.397 12.215H50.86l-5.428-12.215v12.215h-7.61l-1.445-3.494H28.59l-1.446 3.494h-4.07l6.695-15.592zm36.901 0h15.044l4.602 5.109 4.749-5.11h4.601l-6.99 7.84 6.99 7.753h-4.808l-4.601-5.168-4.779 5.168H66.67V31.325zm-34.187 2.642l-2.566 6.226h5.132l-2.566-6.226zm37.904.588v2.848h8.2v3.171h-8.2v3.113h9.203l4.277-4.58-4.1-4.552h-9.38z'
				></path>
			</g>
		</svg>
	)
}

export default AmericanExpress
