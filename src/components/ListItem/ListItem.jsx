import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import Card from '@mui/material/Card'
import style from './ListItem.module.scss'

const cardStyles = {
	width: '100%',
	height: '400px',
	borderRadius: '1.5rem',
	alignContent: 'start',
	padding: '1.125rem',
}

export const ListItem = ({ img, name, price }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpen = () => setIsOpen(true)
	const handleClose = () => setIsOpen(false)

	const item = { img, name, price }

	return (
		<>
			<Card
				component='li'
				sx={cardStyles}
				onClick={handleOpen}
				aria-label='Open modal window'
			>
				<picture>
					<source
						type='image/webp'
						srcSet={`${img.webp['1x']}, ${img.webp['2x']} 2x`}
					/>
					<img
						className={style.img}
						src={img.jpg['1x']}
						srcSet={`${img.jpg['2x']} 2x`}
						alt={name}
					/>
				</picture>
				<h4 className={style.title}>{name}</h4>
				<p className={style.price}>${price}</p>
			</Card>

			<Modal open={isOpen} handleClose={handleClose} item={item} />
		</>
	)
}
