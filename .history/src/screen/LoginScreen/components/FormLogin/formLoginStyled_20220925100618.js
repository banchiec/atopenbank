import styled from 'styled-components'

export const ContainerLogin = styled.div`
	br {
		height: 10px;
		width: 100px;
		background-color: black;
	}
	@media (min-width: 768px) {
		border: 1px solid green;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.information {
			/* width: 80%; */
		}
	}
`
export const ContainerLoginTitle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	@media (min-width: 768px) {
		border: 1px solid green;
		flex-direction: center;
	}
`
export const Title = styled.h2`
	text-align: center;
	@media (min-width: 768px) {
		text-align: start;
		width: 80%;
	}
`
export const ContainerActions = styled.div`
	display: flex;
	justify-content: space-between;
	border-top: 1px solid gray;
	margin-top: 1.5em;
	padding-bottom: 10px;

	@media (min-width: 768px) {
		border: 1px solid green;
		justify-content: center;
	}
`
export const Actions = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 20px;
	padding: 10px 0;
	justify-content: space-between;
	align-items: center;
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
		border: 1px solid green;
		justify-content: center;
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
		border: 1px solid green;
		width: 80%;
		flex-direction: row;
	}
`

export const FormControl = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 768px) {
		padding: 0 10px;
		border: 1px solid green;
		margin: 10px;
		width: 40%;
	}
`

export const Article = styled.div`
	border: 1px solid green;
`
