import { Link } from 'react-router-dom'
import { heroImg } from '../../assets/img.js'
import CallMadeIcon from '@mui/icons-material/CallMade'
import './Hero.scss'

export const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero__container container'>
				<div className='hero__wrapper'>
					<div className='hero__image'>
						<picture>
							<source
								type='image/webp'
								srcSet={`${heroImg.webp['1x']}, ${heroImg.webp['2x']} 2x`}
							/>
							<img
								src={heroImg.jpg['1x']}
								srcSet={`${heroImg.jpg['2x']} 2x`}
								alt='hero img'
							/>
						</picture>
					</div>

					<div className='hero__content'>
						<h1 className='hero__title'>
							Overcome the snowy slopes <br />
							with the best snowboards
						</h1>
						<p className='hero__description'>
							We have snowboards for every level, from beginners to pros, as
							well as accessories and equipment for a complete immersion in the
							winter sport.
						</p>

						<Link to='/store' className='btn hero__btn'>
							Store{' '}
							<CallMadeIcon className='hero__btn-icon' sx={{ fontSize: 22 }} />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
