import { Link } from 'react-router-dom'
import * as path from '../../utils/paths'
import { FiLogIn } from 'react-icons/fi'
import { Navbar, ListItem, NavbarLogo, NavbarMenuMobile } from './headerStyled'

const Header = () => {
	return (
		<Navbar>
			<NavbarLogo>
				<Link to={path.HOMEPAGE}>SHOP MOBILE</Link>
			</NavbarLogo>
			<NavbarMenuMobile>
				<Link to={path.LOGINPAGE}>
					<ListItem>
						<FiLogIn />
					</ListItem>
				</Link>
			</NavbarMenuMobile>
		</Navbar>
	)
}
export default Header
