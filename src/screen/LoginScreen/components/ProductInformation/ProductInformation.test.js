import { renderHook } from '@testing-library/react-hooks'
import '@testing-library/jest-dom/extend-expect'
import { render  as rtlRender} from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../../app/store'
import ProductInformation from './ProductInformation'

const render = component => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>
)
