import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { Store } from './components/Store/Store'
import { Footer } from './components/Footer/Footer'

const App = () => {
	const [snowboards, setSnowboards] = useState([])

	useEffect(() => {
		const getSnowboards = async () => {
			try {
				const res = await fetch(`${import.meta.env.BASE_URL}snowboards.json`)
				setSnowboards(await res.json())
			} catch (error) {
				console.log('Receipt error', error)
			}
		}

		getSnowboards()
	}, [])

	return (
		<Router>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home snowboards={snowboards} />} />
					<Route path='/about' element={<About />} />
					<Route path='/store' element={<Store snowboards={snowboards} />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	)
}

export default App
