import { Link } from 'react-router-dom'
import * as path from '../../utils/paths'
import {
	Navbar,
	ListItem,
	ListLink,
	Logo,
	NavbarLogo,
	NavbarMenuMobile,
} from './headerStyled'

const Header = () => {
	return (
		<Navbar>
			<NavbarLogo>
				<Link to={path.HOMEPAGE}>SHOP MOBILE</Link>
			</NavbarLogo>
			<NavbarMenuMobile>
				<Link to={path.LOGINPAGE}>
					<ListItem></ListItem>
				</Link>
			</NavbarMenuMobile>
		</Navbar>
	)
}
export default Header
