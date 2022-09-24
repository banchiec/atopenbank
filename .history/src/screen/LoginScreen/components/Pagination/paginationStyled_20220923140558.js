import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 65px;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`
export const PageItem = styled.button`
	width: 40px;
	height: 40px;
	border: none;
	border-radius: 50%;
`
