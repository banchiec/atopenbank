import styled from 'styled-components'

export const Navbar = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #0000;
	padding: 10px 15px;
	@media (min-width: 768px) {
		div {
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
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	a {
		text-decoration: none;
		color: #ffff;
		font-weight: 500;
	}
	svg {
		font-size: 2.2rem;
		padding: 0 5px;
	}
	img {
		padding-top: 1em;
		width: 105px;
	}
	@media()
`
export const NavbarMenuMobile = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	svg {
		font-size: 1.4em;
	}
`
