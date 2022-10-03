import React from 'react'
import * as path from './utils/paths'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App'
import { store } from './app/store'
import HomeScreen from './screen/HomeScreen/HomeScreen'
import LoginScreen from './screen/LoginScreen/LoginScreen'
import { createMemoryHistory } from '@remix-run/router'
import ProductInformation from './screen/LoginScreen/components/ProductInformation/ProductInformation'

const render = component => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>
)

describe('Render App component', () => {
  test('render app', () => {
    const app = render(<App/>)
    expect(app.debug())
  })
})

describe('Checking render HomeScreen in route '/'', () => {
  test('render HomePage component', () => {
    const history = createMemoryHistory('/')
    const homePage = render(
      <Router history={history}>
        <HomeScreen/>
      </Router>
    )
    const loginPage = render(
      <Router history={history}>
        <LoginScreen/>
      </Router>
    )
    expect(homePage.debug())
    expect(loginPage.debug())
  })
})
  
describe('should app routes ', () => {
  test('Renderer App component with react-router-dom' ,() => {
    const history = createMemoryHistory(['/','/login'])
    history.push('/')
    history.push('/login')
    const { debug } =  render(
      <Router history={history}>
        <Routes>
          <Route exact path={path.HOMEPAGE} element={<HomeScreen/>}/>
          <Route exact path={path.LOGINPAGE} element={<LoginScreen/>}/>
        </Routes>
      </Router>
    )
    debug()
  })
})
