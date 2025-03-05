import { useState, useMemo } from 'react'
import { ListItem } from '../ListItem/ListItem'
import { InputField } from '../InputField/InputField'
import { filterGoods } from '../../utils'
import './Store.scss'

export const Store = ({ snowboards }) => {
	const [query, setQuery] = useState('')
	const [minPrice, setMinPrice] = useState('')
	const [maxPrice, setMaxPrice] = useState('')

	// If the goods list is large, reduces unnecessary function calls
	const filteredGoods = useMemo(() => {
		return filterGoods(query, snowboards, minPrice, maxPrice)
	}, [query, snowboards, minPrice, maxPrice])

	const handleChange = e => {
		setQuery(e.target.value)
	}

	return (
		<section className='store'>
			<div className='container'>
				<h2 className='store__title'>Snowboards store</h2>
				<div className='store__wrapper'>
					<div className='store__input-fields'>
						<InputField
							ariaLabel='Find a snowboard'
							placeholder='Find a snowboard'
							value={query}
							onChange={handleChange}
						/>
						<InputField
							ariaLabel='Minimum cost'
							placeholder='Minimum cost'
							value={minPrice}
							onChange={e => setMinPrice(e.target.value)}
						/>
						<InputField
							ariaLabel='Maximum cost'
							placeholder='Maximum cost'
							value={maxPrice}
							onChange={e => setMaxPrice(e.target.value)}
						/>
					</div>
					<ul className='store__list'>
						{filteredGoods.map(s => (
							<ListItem key={s.id} {...s} />
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
