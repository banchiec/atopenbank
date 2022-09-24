import styled from 'styled-components'

export const Input = styled.input`
	padding: 10px;
`
export const ContainerInput = styled.div`
	/* display: flex;
	flex-direction: column; */
	border: 1px solid green;
`
export const Icon = styled.div`
	border: 1px solid green;
	@media (min-width: 768px) {
		border: 1px solid green;
		position: absolute;
		width: 20px;
		height: 20px;
		right: 0px;
		svg {
			/* left: 12px;
			top: 50%;
			left: unset;
			right: 12px;
			transform: translateY(-50%); */
		}
	}
`
