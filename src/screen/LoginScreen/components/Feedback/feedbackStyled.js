import styled from "styled-components"

export const ContainerFeedBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px){
  }
`
export const ContainerActions = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid gray;
	margin-top: 1.5em;
  width: 100%;
	padding-bottom: 10px;
	@media (min-width: 768px) {
		justify-content: end;
	  align-items: end;
	}
`
export const Actions = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 10px;
	padding: 10px 0;
	justify-content: end;
	align-items: center;
	@media (min-width: 768px) {
		width: 100%;
	}
`
export const ContainerTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 80%;
`