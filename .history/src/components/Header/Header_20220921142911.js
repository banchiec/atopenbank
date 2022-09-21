import { Link } from 'react-router-dom'
import * as path from '../../utils/paths'
import { ContainerHeader, ListItem, ListLink } from './headerStyled'

const Header = () => {
	return (
		<Container>
			<Link to={path.HOMEPAGE}>SHOP MOBILE</Link>
			<ListLink>
				<Link to={path.LOGINPAGE}>
					<ListItem></ListItem>
				</Link>
			</ListLink>
		</Container>
	)
}
export default Header
