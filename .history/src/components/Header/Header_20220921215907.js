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
				<Button primary>Hazte cliente</Button>
				<Button>Date de alta</Button>
			</NavbarRegister>
		</Navbar>
	)
}
export default Header
