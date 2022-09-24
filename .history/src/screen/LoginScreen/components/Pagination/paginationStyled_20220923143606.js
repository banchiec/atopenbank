import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: #a2aec5;
	border: none;
	height: 45px;
	@media (min-width: 768px) {
		flex-direction: row;
		height: 65px;
	}
`
export const PageItem = styled.button`
	width: 25px;
	height: 25px;
	border: none;
	text-align: center;
	border-radius: 50%;
	background-color: #8f99af;
	color: #ffffff;
	margin: 0 10px;
	:hover {
		cursor: pointer;
	}
	@media (min-width: 768px) {
		width: ${(props) => (props.active ? '4px ' : '30px')};
		height: ${(props) => (props.active)};
	}
`
