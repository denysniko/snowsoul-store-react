const navItems = [
	{ label: 'Home', path: '/' },
	{ label: 'About', path: '/about' },
	{ label: 'Store', path: '/store' },
]

export const NavBar = () => {
	return navItems
}

export const filterGoods = (query, goods) => {
	query = query.toLowerCase()
	return goods.filter(item =>
		item.name.split(' ').some(word => word.toLowerCase().startsWith(query))
	)
}
