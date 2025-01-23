import { useState } from 'react'
import { ListItem } from '../ListItem/ListItem'
import { filterGoods } from '../../utils'
import './Store.scss'

export const Store = ({ snowboards }) => {
	const [query, setQuery] = useState('')

	const filteredGoods = filterGoods(query, snowboards)

	const handleChange = e => {
		setQuery(e.target.value)
	}

	return (
		<section className='store'>
			<div className='container'>
				<h2 className='store__title'>Snowboards store</h2>
				<div className='store__wrapper'>
					<label>
						<input
							className='store__search'
							placeholder='Find a snowboard'
							value={query}
							onChange={handleChange}
						/>
					</label>
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
