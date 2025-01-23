import { Link } from 'react-router-dom'
import { useState } from 'react'
import { DensityLarge } from '@mui/icons-material'
import {
	Box,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Button,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material'
import { NavBar } from '../../utils'

const drawerWidth = 300

export const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)

	const navItems = NavBar()

	const handleMenuToggle = () => {
		setMenuIsOpen(!menuIsOpen)
	}

	const menu = (
		<Box onClick={handleMenuToggle} sx={{ textAlign: 'center' }}>
			<Typography variant='h6' sx={{ my: 2 }}>
				Snowsoul
			</Typography>
			<Divider />
			<List>
				{navItems.map(item => (
					<ListItem key={item.label} disablePadding>
						<ListItemButton
							component={Link}
							to={item.path}
							sx={{ textAlign: 'center' }}
						>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	return (
		<Box>
			<AppBar
				sx={{
					boxShadow: 'none',
					backdropFilter: 'blur(8px)',
					borderBottom: '1px solid hsl(215, 15%, 92%)',
				}}
			>
				<Toolbar>
					<Typography component={Link} to='/' sx={{ flexGrow: 1 }}>
						Snowsoul
					</Typography>
					<IconButton
						color='inherit'
						aria-label='open menu'
						edge='end'
						onClick={handleMenuToggle}
						sx={{ display: { sm: 'none' } }}
					>
						<DensityLarge color='inherit' />
					</IconButton>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map(item => (
							<Button
								key={item.label}
								component={Link}
								to={item.path}
								sx={{ color: '#111111' }}
							>
								{item.label}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>

			<nav>
				<Drawer
					variant='temporary'
					open={menuIsOpen}
					onClose={handleMenuToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{menu}
				</Drawer>
			</nav>
		</Box>
	)
}
