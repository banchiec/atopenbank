import styled from 'styled-components'

export const Navbar = styled.header`
	display: flex;
	height: 10px;
	justify-content: space-around;
	align-items: center;
	background: #0000;
	padding: 25px 0;
	border: 1px solid greee;
	border-bottom: 1px solid gray;
	/* a {
		text-decoration: none;
		color: #ffff;
		font-weight: 500;
	}
	svg {
		font-size: 1.3rem;
		color: #ffff;
	}
	div {
		padding: 0;
		margin: 0;
		p {
			position: absolute;
			margin: 0;
			color: #000;
			font-weight: 600;
			text-align: center;
			font-size: 14px;
			margin-top: -10px;
			margin-left: 10px;
			z-index: 2;
		}
	} */
	@media (min-width: 768px) {
		div {
			padding: 0;
			margin: 0;
			/* p {
				position: absolute;
				margin: 0;
				color: #000;
				font-weight: 600;
				text-align: center;
				font-size: 14px;
				margin-top: -10px;
				margin-left: 10px;
				z-index: 2;
			} */
		}
	}
`

export const NavbarLogo = styled.div`
	border: 1px solid green;
	a {
		text-decoration: none;
		color: #ffff;
		font-weight: 500;
	}
	img {
		width: 99px;
		padding: 0;
		margin: 0;
	}
`
export const NavbarMenuMobile = styled.div`
	border: 1px solid green;
	svg {
	}
`

export const ListLink = styled.ul`
	display: flex;
	flex-direction: row;
	padding: 0;
	margin: 0;
`
export const ListItem = styled.li`
	padding: 0 40px;
	list-style: none;
`
