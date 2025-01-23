import AcUnitIcon from '@mui/icons-material/AcUnit'
import './AboutSection.scss'

export const AboutSection = () => {
	return (
		<section className='about'>
			<div className='container'>
				<div className='about__content'>
					<h2 className='about__title'>
						<AcUnitIcon sx={{ mr: '0.5rem', fontSize: 33, fill: '#111111' }} />
						About us
					</h2>
					<p className='about__text'>
						<span className='about__text-right'>
							Welcome to our shop - the place <br />
						</span>
						where your winter adventures begin! We specialise in selling quality
						snowboards and equipment to suit both beginners and experienced
						riders. Our mission is to provide you with everything you need for a
						comfortable and exciting ride. We carefully select our products to
						offer only reliable and stylish models from trusted brands.
					</p>
				</div>
			</div>
		</section>
	)
}
