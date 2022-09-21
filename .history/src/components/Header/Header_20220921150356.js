import { Link } from 'react-router-dom'
import * as path from '../../utils/paths'
import { BiLogIn } from 'react-icons/bi'
import { Navbar, ListItem, NavbarLogo, NavbarMenuMobile } from './headerStyled'

import OpenbankLogo from '../../assets/img/logo_openbank.png'
import KeyOpnebank from '../../assets/'

const Header = () => {
	return (
		<Navbar>
			<NavbarLogo>
				<Link to={path.HOMEPAGE}>
					<img src={OpenbankLogo} alt={'openbank-logo'} />
					<img src={OpenbankLogo} alt={'openbank-logo'} />
				</Link>
			</NavbarLogo>
			<NavbarMenuMobile>
				<Link to={path.LOGINPAGE}>
					<ListItem>
						<BiLogIn />
					</ListItem>
				</Link>
			</NavbarMenuMobile>
		</Navbar>
	)
}
export default Header
