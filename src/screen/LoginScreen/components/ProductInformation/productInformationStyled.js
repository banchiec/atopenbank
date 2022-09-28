import styled from 'styled-components'

export const ContainerInformation = styled.div`
	br {
		height: 10px;
		width: 100px;
		background-color: black;
	}
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		.information {
			width: 80%;
		}
	}
`
export const ContainerInformationTitle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	@media (min-width: 768px) {
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
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid gray;
	margin-top: 1.5em;
	padding-bottom: 10px;
	@media (min-width: 768px) {
    width: 100%;
	}
`
export const Actions = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 20px;
	padding: 10px 0;
	justify-content: space-between;
  width: 100%;
	align-items: center;
	@media (min-width: 768px) {
		width: 80%;
	}
`
export const ContainerCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (min-width: 768px) {
		flex-direction: row;
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
export const ContainerCheck = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding: 0 20px;
`
export const CheckBox = styled.input`
  borde: 1px solid green;
`
