const navItems = [
	{ label: 'Home', path: '/' },
	{ label: 'About', path: '/about' },
	{ label: 'Store', path: '/store' },
]

export const NavBar = () => {
	return navItems
}

export const filterGoods = (query, goods, minPrice, maxPrice) => {
	query = query.toLowerCase()

	return goods.filter(item => {
		const matchesName = item.name.toLowerCase().includes(query)

		const min = minPrice ? Number(minPrice) : undefined
		const max = maxPrice ? Number(maxPrice) : undefined

		// Filter by price (if min/max is not set, ignore it)
		const matchesPrice =
			(min === undefined || item.price >= min) &&
			(max === undefined || item.price <= max)

		return matchesName && matchesPrice
	})
}
