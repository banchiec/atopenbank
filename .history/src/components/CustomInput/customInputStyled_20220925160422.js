import styled from 'styled-components'

export const ContainerInput = styled.div`
	position: relative;
	@media (min-width: 768px) {
		margin: 0;
		padding: 0;
		p {
			border: 1px solid green;
			text-align: end;
			margin: 0;
			padding: 0;
			width: 10%;
		}
	}
`
export const Input = styled.input`
	padding: 14px 10px;
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
		top: 25%;
		right: 0px;
		svg {
			font-size: 25px;
			color: gray;
		}
	}
`
