import styled from 'styled-components'

export const Input = styled.input`
	padding: 10px;
`
export const ContainerInput = styled.div`
	position: relative;
	/* border: 1px solid green; */
`
export const Icon = styled.div`
	@media (min-width: 768px) {
		width: 20px;
		position: absolute;
		height: 20px;
		right: 0px;
		top: 20%;
		margin: 0 5px;
		svg {
			font-size: 20px;
		}
	}
`
