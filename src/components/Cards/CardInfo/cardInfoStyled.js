import styled from 'styled-components'

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1.5em;
	h2 {
		text-align: center;
	}
	@media (min-width: 768px) {
		width: 40%;
	}
`
export const Image = styled.img`
	width: 50%;
	@media (min-width: 768px) {
		width: 40%;
	}
`

export const TextInfo = styled.p`
	padding: 10px;
	color: #002b45;
	text-align: center;
	font-weight: 450;
	@media (min-width: 768px) {
    font-size: 14px;
		width: 80%;
	}
`
