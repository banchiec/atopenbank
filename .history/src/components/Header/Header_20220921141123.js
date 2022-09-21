import { Link } from 'react-router-dom'
import * as path from '../../utils/paths'
import { ContainerHeader, ListItem, ListLink } from './headerStyled'
import { getUrl } from '../../utils/string'
import { useEffect, useState } from 'react'
import { getWithExpiry } from '../../utils/localStorage'

const Header = () => {


	return (
		<ContainerHeader>
			<Link to={path.HOMEPAGE}>SHOP MOBILE</Link>
			<ListLink>
				<Link to={'/'}>
					<ListItem>Home</ListItem>
				</Link>
				<Link to={path.LOGINPAGE}>
					<ListItem></ListItem>
				</Link>
			</ListLink>
		</ContainerHeader>
	)
}
export default Header
