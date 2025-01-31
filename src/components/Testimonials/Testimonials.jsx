import Avatar from '@mui/material/Avatar'
import { testimonialsImg } from '../../assets/img.js'
import './Testimonials.scss'

export const Testimonials = () => {
	return (
		<section className='testimonials'>
			<div className='container'>
				<h2 className='testimonials__title'>Testimonials</h2>
				<ul className='testimonials__list'>
					<li className='testimonials__item'>
						<Avatar
							alt='Maria Kendal'
							srcSet={`${testimonialsImg.jpg['1x']}, ${testimonialsImg.jpg['2x']} 2x`}
						/>
						<h4 className='testimonials__item-title'>Maria Kendal</h4>
						<p className='testimonials__item-text'>
							Bought my first snowboard here and it was the best choice!
							Excellent quality and professional advice helped me find what I
							needed.
						</p>
					</li>
					<li className='testimonials__item'>
						<Avatar
							alt='Travis Howard'
							srcSet={`${testimonialsImg.jpg['1x']}, ${testimonialsImg.jpg['2x']} 2x`}
						/>
						<h4 className='testimonials__item-title'>Travis Howard</h4>
						<p className='testimonials__item-text'>
							Great shop with a great selection! Found the snowboard of my
							dreams. Would recommend to anyone who appreciates quality and
							service.
						</p>
					</li>
					<li className='testimonials__item'>
						<Avatar
							alt='Cindy Baker'
							srcSet={`${testimonialsImg.jpg['1x']}, ${testimonialsImg.jpg['2x']} 2x`}
						/>
						<h4 className='testimonials__item-title'>Cindy Baker</h4>
						<p className='testimonials__item-text'>
							This place really understands what riders need. Pleasant prices,
							fast delivery and a cool assortment - only here for snowboards!
						</p>
					</li>
				</ul>
			</div>
		</section>
	)
}
