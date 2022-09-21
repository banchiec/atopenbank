import styled from 'styled-components'

export const Navbar = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #0000;
	padding: 10px 15px;

	@media (min-width: 768px) {
		border: 1px solid green;
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
	@media (min-width: 768px) {
		img {
			padding-left: 0.5em;
			width: 150px;
		}
	}
`
export const NavbarMenuMobile = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	svg {
		font-size: 1.4em;
	}
	@media (min-width: 768px) {
		display: none;
	}
`

export const NavbarRegister = styled.div`
	position: fixed;
	left: 0;
	width: 100%;
	bottom: 0;
	padding: 10px 0;
	text-align: center;
	@media (min-width: 768px) {
		position: relative;
		right: 0;
		left: auto;
	}
`
export const Button = styled.button`
	padding: 10px 25px;
	font-weight: 500;
	border: none;
	background-color: ${(props) => (props.primary ? '#FF0049' : '#002B45')};
	color: white;
	font-size: 14px;
	margin: 0 10px;
	border-radius: 4px;
`
