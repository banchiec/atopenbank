import styled from 'styled-components'

export const ContainerLogin = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: ;
	}
`

export const ContainerLoginTitle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	width: 100%;
	padding-left: 15px;
	@media (min-width: 768px) {
		padding: 10px 20px;
		flex-direction: center;
		width: 80%;
	}
`

export const Title = styled.h2`
	text-align: start;
	@media (min-width: 768px) {
		text-align: start;
	}
`

export const ContainerActions = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-top: 1.5em;
	border-top: 1px solid gray;
	padding-bottom: 10px;
	@media (min-width: 768px) {
		width: 100%;
	}
`

export const Actions = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	padding: 10px 0;
	@media (min-width: 768px) {
		width: 80%;
	}
`

export const ContainerForm = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (min-width: 768px) {
		flex-direction: row;
		width: 80%;
		justify-content: start;
		align-items: center;
		padding: 20px;
		flex-wrap: wrap;
	}
`
export const ContainerText = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

export const Form = styled.form`
	padding: 10px;
	display: flex;
	flex-direction: column;
	@media (min-width: 768px) {
		padding: 0;
		margin: 0;
		width: 80%;
		flex-direction: column;
	}
`

export const FormControl = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5px 0;
	label {
		padding: 5px 0;
		font-weight: 500;
	}
	@media (min-width: 768px) {
		padding: 0;
		padding-right: 2em;
		justify-content: start;
		width: 50%;
		label {
			margin: 0;
			font-weight: 500;
			padding: 5px 0;
		}
	}
`

export const FormControlPanel = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 768px) {
		flex-direction: row;
		border: 1px solid green;
	}
`

export const Article = styled.div`
	padding: 10px;
	p {
		padding: 0;
		margin: 0;
	}
	@media (min-width: 768px) {
		padding: 10px 20px;
		border: 1px solid green;
	}
`
