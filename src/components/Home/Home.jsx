import { Hero } from '../Hero/Hero'
import { AboutSection } from '../AboutSection/AboutSection'
import { Goods } from '../Goods/Goods'

export const Home = ({ snowboards }) => {
	return (
		<>
			<Hero />
			<AboutSection />
			<Goods snowboards={snowboards.slice(0, 6)} />
		</>
	)
}
