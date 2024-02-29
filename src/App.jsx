import AnimatedText from './components/AnimatedText/AnimatedText'
import ListScroll from './components/ListScroll/ListScroll'
import PostGrid from './components/Posts/PostGrid'
import HeaderCard from './components/headerCard/HeaderCard'
import './global.css'
import './main.css'

function App() {
	return (
		<div className='container mx-auto'>
			<HeaderCard />
			<ListScroll />
			<PostGrid />
			<AnimatedText />
		</div> 
		
	)
}

export default App
