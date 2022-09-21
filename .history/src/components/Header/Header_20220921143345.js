import { Link } from 'react-router-dom'
import * as path from '../../utils/paths'
import { Header, ListItem, ListLink } from './headerStyled'

const Header = () => {
	return (
		<Header>
			<Link to={path.HOMEPAGE}>SHOP MOBILE</Link>
			<ListLink>
				<Link to={path.LOGINPAGE}>
					<ListItem></ListItem>
				</Link>
			</ListLink>
		</Header>
	)
}
export default Header
