import styled from 'styled-components'

export const Input = styled.input`
	padding: 10px;
`
export const ContainerInput = styled.div`
	display: flex;
	flex-direction: column;
`
export const Icon = styled.div`
	border: 1px solid green;
	@media (min-width: 768px) {
		position: absolute;
		border: 1px solid green;
		width: 20px;
		height: 20px;
		/* left: unset; */
		svg {
			/* position: absolute; */
			/* left: 12px;
			top: 50%;
			left: unset;
			right: 12px;
			transform: translateY(-50%); */
		}
	}
`
