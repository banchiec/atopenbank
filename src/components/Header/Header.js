import { Link } from 'react-router-dom'
import * as path from '../../utils/paths'
import { BiLogIn, BiMenuAltLeft } from 'react-icons/bi'
import {
	Button,
	Navbar,
	NavbarLogo,
	NavbarMenuMobile,
	NavbarRegister,
} from './headerStyled'

import OpenbankLogo from '../../assets/img/logo_openbank.png'
import CustomButton from '../Buttons/CustomButton/CustomButton'

const Header = () => {
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
					<CustomButton color={'#FF0049'} text={'Hazte Cliente'} />
				</Link>
				<CustomButton color={'#002B45'} text={'Hazte Cliente'} />
			</NavbarRegister>
		</Navbar>
	)
}
export default Header
