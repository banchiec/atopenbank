import { Link } from 'react-router-dom'
import * as path from '../../utils/paths'
import { Navbar, ListItem, ListLink, Logo, NavbarLogo } from './headerStyled'

const Header = () => {
	return (
		<Navbar>
			<NavbarLogo>
				<Link to={path.HOMEPAGE}>SHOP MOBILE</Link>
			</NavbarLogo>
			<NavbarMenuMobile>

			</NavbarMenuMobile>
			<ListLink>
				<Link to={path.LOGINPAGE}>
					<ListItem></ListItem>
				</Link>
			</ListLink>
		</Navbar>
	)
}
export default Header
