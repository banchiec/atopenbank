import styled from 'styled-components'
export const ContainerInput = styled.div`
	position: relative;
	@media (min-width: 768px) {
		margin: 0;
		padding: 0;
		border: 0;
	}
`
export const Input = styled.input`
	padding: 10px;
	font-size: 14px;
	width: 330px;
	@media (min-width: 768px) {
		margin: 0;
		font-size: 14px;
		width: 100%;
	}
`



export const Icon = styled.div`
	width: 20px;
	height: 20px;
	position: absolute;
	top: 20%;
	right: 10px;

	svg {
		font-size: 22px;
		color: gray;
	}

	@media (min-width: 768px) {
		width: 20px;
		height: 20px;
		position: absolute;
		top: 20%;
		right: 0px;
		svg {
			font-size: 25px;
			color: gray;
		}
	}
`
