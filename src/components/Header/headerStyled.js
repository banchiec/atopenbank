import styled from 'styled-components'

export const Navbar = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #0000;
	padding: 10px 15px;
	@media (min-width: 768px) {
    height: 50px;
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
			width: 120px;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
		width: 300px;
    padding: 0;
		position: relative;
		bottom: auto;
		right: 10px;
		left: auto;
	}
`
export const Select = styled.select`
	width: 20%;
  height: 45px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 12px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  img{
    border: 1px solid green;
    width: 100%;
  }
`

