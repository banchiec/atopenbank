import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 65px;
	@media (min-width: 768px) {

	flex-direction: column;
	}
`
export const PageItem = styled.button`
	width: 40px;
	height: 40px;
	border: none;
	border-radius: 50%;
`
