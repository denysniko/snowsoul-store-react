import { useState, useEffect } from 'react'
import './Counter.scss'

export const Counter = () => {
	const [count, setCount] = useState(0)
	const targetValue = 110

	useEffect(() => {
		let interval
		if (count < targetValue) {
			const remaining = targetValue - count
			const delay = remaining > 10 ? 50 : 200
			interval = setInterval(() => {
				setCount(prevCount => Math.min(prevCount + 1, targetValue))
			}, delay)
		}
		// Clearing the interval when changing count or unmounting a component
		return () => clearInterval(interval)
	}, [count, targetValue])

	return (
		<section className='counter'>
			<div className='container'>
				<h2 className='counter__title'>We are in numbers</h2>
				<ul className='counter__list'>
					<li className='counter__item'>
						<h4 className='counter__item-number'>
							{count}
							<span>+</span>
						</h4>
						<p className='counter__item-text'>Happy riders</p>
					</li>
					<li className='counter__item'>
						<h4 className='counter__item-number'>
							{Math.min(Math.round(count * 0.73), 73)}
							<span>+</span>
						</h4>
						<p className='counter__item-text'>Snowboards</p>
					</li>
					<li className='counter__item'>
						<h4 className='counter__item-number'>
							{Math.min(Math.round(count * 0.1), 10)}
							<span>+</span>
						</h4>
						<p className='counter__item-text'>In the market</p>
					</li>
				</ul>
			</div>
		</section>
	)
}
