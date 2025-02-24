import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
} from '@mui/material'

const buyBtnStyles = {
	width: '80px',
	color: '#fff',
	borderRadius: '0.5rem',
	backgroundColor: '#1d4ed8',
	boxShadow: '0',
}

export const Modal = ({ open, handleClose, item }) => {
	// If item is null, we don't render the content
	if (!item) return null

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>{item.name}</DialogTitle>
			<DialogContent>
				<picture>
					<source
						type='image/webp'
						srcSet={`${item.img.webp['1x']}, ${item.img.webp['2x']} 2x`}
					/>
					<img
						src={item.img.jpg['1x']}
						srcSet={`${item.img.jpg['2x']} 2x`}
						alt={item.name}
						style={{ borderRadius: '0.875rem' }}
					/>
				</picture>
				<p style={{ marginTop: '1.1rem', fontSize: '1.125rem' }}>
					${item.price}
				</p>
			</DialogContent>
			<DialogActions>
				<Button
					variant='outlined'
					color='error'
					sx={{ borderRadius: '0.5rem', boxShadow: '0' }}
					onClick={handleClose}
				>
					Close
				</Button>
				<Button variant='contained' sx={buyBtnStyles}>
					Buy
				</Button>
			</DialogActions>
		</Dialog>
	)
}
