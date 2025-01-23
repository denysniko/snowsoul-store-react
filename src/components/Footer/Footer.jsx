import { Link } from 'react-router-dom'
import { Box, Toolbar, Typography, Button } from '@mui/material'
import { NavBar } from '../../utils'

export const Footer = () => {
	const navItems = NavBar()

	return (
		<Box
			component='footer'
			sx={{ p: '3rem 0', color: '#f3f4f6', backgroundColor: '#1d4ed8' }}
		>
			<Toolbar sx={{ flexDirection: 'column' }}>
				<Box sx={{ mb: '3rem', placeSelf: 'self-start' }}>
					{navItems.map(item => (
						<Button
							key={item.label}
							component={Link}
							to={item.path}
							sx={{ color: '#f3f4f6' }}
						>
							{item.label}
						</Button>
					))}
				</Box>
				<Typography sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
					We know how important it is to find a snowboard that fits your style
					perfectly
				</Typography>
			</Toolbar>
		</Box>
	)
}
