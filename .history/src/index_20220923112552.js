import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_es from './locale/es/global.json'
import global_en from './locale/en/global.json'
import { Provider } from 'react-redux'
import { store } from './app/store'

i18next.init({
	interpolation: { escapeValue: false },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
	</Provider>
)
