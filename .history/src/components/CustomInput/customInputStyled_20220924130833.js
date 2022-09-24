import styled from 'styled-components'

export const Input = styled.input`
	padding: 10px;
`
export const ContainerInput = styled.div`
	position: relative;
	/* display: flex;
	flex-direction: column; */
	border: 1px solid green;
`
export const Icon = styled.div`
	border: 1px solid green;
	@media (min-width: 768px) {
		border: 1px solid green;
		width: 20px;
		position: absolute;
		height: 20px;
		right: 0px;
		top: 20%;
		margin: 0 -5px;
		svg {
			font-size: 20px;
		}
	}
`
