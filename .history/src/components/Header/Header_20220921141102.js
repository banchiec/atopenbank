import { Link } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'
import * as path from '../../utils/paths'
import { ContainerHeader, ListItem, ListLink } from './headerStyled'
import { getUrl } from '../../utils/string'
import { useEffect, useState } from 'react'
import { getWithExpiry } from '../../utils/localStorage'

const Header = () => {

	console.log(idProduct)

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
			<div>
				<p>{counterCart != null ? counterCart?.countItems : 0}</p>
				<BsCart />
			</div>
		</ContainerHeader>
	)
}
export default Header
