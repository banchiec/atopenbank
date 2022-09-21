import { Link } from 'react-router-dom'
import * as path from '../../utils/paths'
import { Container, ListItem, ListLink, Navbar } from './headerStyled'

const Header = () => {
	return (
		<Navbar>
			<Link to={path.HOMEPAGE}>SHOP MOBILE</Link>
			<ListLink>
				<Link to={path.LOGINPAGE}>
					<ListItem></ListItem>
				</Link>
			</ListLink>
		</Navbar>
	)
}
export default Header
