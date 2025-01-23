import { List } from '../List/List'
import './Goods.scss'

export const Goods = ({ snowboards }) => {
	return (
		<section className='goods'>
			<div className='container'>
				<h2 className='goods__title'>Our snowboards</h2>
				<div className='goods__wrapper'>
					<List props={snowboards} />
				</div>
			</div>
		</section>
	)
}
