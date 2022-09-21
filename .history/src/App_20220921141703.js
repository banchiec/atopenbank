import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as path from './utils/paths'
import Header from './components/Header/Header'

import './App.css'

function App() {
	return (
		<Router>
			<Routes>
				<Route path={path.HOMEPAGE} />
			</Routes>

		</Router>
	)
}

export default App
