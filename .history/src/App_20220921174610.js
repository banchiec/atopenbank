import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as path from './utils/paths'
import Header from './components/Header/Header'

import './App.css'
import HomeScreen from './screen/HomeScreen/HomeScreen'

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path={path.HOMEPAGE} element={<HomeScreen />} />
			</Routes>
			<Footer
		</Router>
	)
}

export default App
