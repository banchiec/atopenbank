import { Link } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'
import * as path from '../../utils/paths'
import { ContainerHeader, ListItem, ListLink } from './headerStyled'
import { getUrl } from '../../utils/string'
import { useEffect, useState } from 'react'
import { getWithExpiry } from '../../utils/localStorage'

const Header = () => {
	const [idProduct, setIdProduct] = useState()
	const [productCurrent, setProductCurrent] = useState()

	useEffect(() => {
	// 	setTimeout(() => {
	// 		setProductCurrent(getWithExpiry(`detailsProduct${idProduct}`))
	// 	}, 3000)
	// }, [idProduct])

	// useEffect(() => {
	// 	// setIdProduct(getUrl())
	// }, [])

	console.log(idProduct)

	return (
		<ContainerHeader>
			<Link to={path.HOMEPAGE}>SHOP MOBILE</Link>
			<ListLink>
				<Link to={'/'}>
					<ListItem>Home</ListItem>
				</Link>
				{idProduct && (
					<Link to={path.LOGINPAGE}>
						<ListItem>
						</ListItem>
					</Link>
				)}
			</ListLink>
			<div>
				<p>{counterCart != null ? counterCart?.countItems : 0}</p>
				<BsCart />
			</div>
		</ContainerHeader>
	)
}
export default Header
