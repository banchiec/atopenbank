import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border: 1px solid green;
	background-color: #a2aec5;
	height: 45px;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`
export const PageItem = styled.button`
	width: 25px;
	height: 25px;
	border: none;
	text-align: center;
	border-radius: 50%;
	margin: 0 10px;
`
