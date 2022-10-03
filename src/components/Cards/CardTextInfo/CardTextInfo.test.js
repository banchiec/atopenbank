import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import CardTextInfo from './CardTextInfo'
import {BiError} from 'react-icons/bi'
import {prettyDOM} from '@testing-library/dom'
import { createMemoryHistory } from '@remix-run/router'
import { Router } from 'react-router-dom'
import LoginScreen from '../../../screen/LoginScreen/LoginScreen'

test('renders CardTextInfo text', () => {
  const component = render(<CardTextInfo 
    text={'No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde'} 
    title='Ha habido un error' 
    icon={<BiError/>} 
    size={'L'} 
    colorIcon={'green'}
   /> )

 expect(component.getByText('Ha habido un error')).toBeDefined()
 expect(component.getByText('No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde')).toBeDefined()
})
