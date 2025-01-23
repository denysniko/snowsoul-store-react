import { ListItem } from '../ListItem/ListItem'
import style from './List.module.scss'

export const List = ({ props }) => {
	return (
		<ul className={style.list}>
			{props.map(s => (
				<ListItem key={s.id} {...s} />
			))}
		</ul>
	)
}
