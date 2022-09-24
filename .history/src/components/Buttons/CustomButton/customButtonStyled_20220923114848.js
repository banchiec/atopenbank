import styled from 'styled-components'

export const Button = styled.button`
	padding: 10px 25px;
	font-weight: 500;
	border: none;
	background-color: ${(props) => props.color};
	color: ${(props) => (props.textColor ? '#000000' : '#FFF1E5')};
	font-size: 14pxk;
	margin: 0 10px;
	border-radius: 4px;
	::hover {}
`
