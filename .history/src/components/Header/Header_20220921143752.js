import { Link } from 'react-router-dom'
import * as path from '../../utils/paths'
import { Navbar, ListItem, ListLink, Logo } from './headerStyled'

const Header = () => {
	return (
		<Navbar>
			<NavbarLogo>
				<Link to={path.HOMEPAGE}>SHOP MOBILE</Link>
			</Logo>
			<ListLink>
				<Link to={path.LOGINPAGE}>
					<ListItem></ListItem>
				</Link>
			</ListLink>
		</Navbar>
	)
}
export default Header
