import styled from 'styled-components'

export const Input = styled.input`
	padding: 15px;
	font-size: 18px;
	width: ;
	@media (min-width: 768px) {
		font-size: 14px;
		width: 100%;
	}
`

export const ContainerInput = styled.div`
	position: relative;
	/* border: 1px solid green; */
	@media (min-width: 768px) {
		position: relative;
	}
`

export const Icon = styled.div`
	width: 20px;
	height: 20px;
	position: absolute;
	top: 20%;
	left: 10px;
	/* margin: 0 15px; */
	border: 1px solid green;

	@media (min-width: 768px) {
		width: 20px;
		position: absolute;
		height: 20px;
		right: 0px;
		top: 20%;
		margin: 0 15px;
		svg {
			font-size: 25px;
			color: gray;
		}
	}
`
