import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as path from './utils/paths'
import Header from './components/Header/Header'

import './App.css'
import HomeScreen from './screen/HomeScreen/HomeScreen'
import LoginScreen from './screen/LoginScreen/LoginScreen'

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path={path.HOMEPAGE} element={<HomeScreen />} />
				<Route path={path.LOGINPAGE} element={<LoginScreen />} />
			</Routes>
		</Router>
	)
}

export default App
