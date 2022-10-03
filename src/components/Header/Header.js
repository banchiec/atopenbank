import { Link } from 'react-router-dom'
import * as path from '../../utils/paths'
import { BiLogIn, BiMenuAltLeft } from 'react-icons/bi'
import {
	Navbar,
	NavbarLogo,
	NavbarMenuMobile,
	NavbarRegister,
  Select,
} from './headerStyled'

import OpenbankLogo from '../../assets/img/logo_openbank.png'
import CustomButton from '../Buttons/CustomButton/CustomButton'
import { useTranslation } from 'react-i18next'


const Header = () => {
  const [t, i18n] = useTranslation('global')

  const handleChangeSelect = (e) => {
    i18n.changeLanguage(e.target.value)
  }

	return (
		<Navbar>
			<NavbarLogo>
				<BiMenuAltLeft />
				<Link to={path.HOMEPAGE}>
					<img src={OpenbankLogo} alt={'openbank-logo'} />
				</Link>
			</NavbarLogo>
			<NavbarMenuMobile>
				<BiLogIn />
			</NavbarMenuMobile>
			<NavbarRegister>
				<Link to={path.LOGINPAGE}>
					<CustomButton color={'#FF0049'} text={t('header.become-customer')} />
				</Link>
        <Select onChange={(e) => handleChangeSelect(e)}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </Select>
			</NavbarRegister>
		</Navbar>
	)
}
export default Header
