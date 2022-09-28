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
		height: 70px;
    padding: 0px;
    margin: 0px;
	}
`

export const PageItem = styled.button`
	width: ${(props) => (props.active ? '30px ' : '20px')};
	height: ${(props) => (props.active ? '30px' : '20px')};
	background-color: ${(props) => (props.active ? '#000000' : '#8f99af')};
	border: none;
	text-align: center;
  font-size: 10px;
	border-radius: 50%;
	color: #ffffff;
	margin: 0 10px;
	:hover {
		cursor: pointer;
	}
	@media (min-width: 768px) {
		width: ${(props) => (props.active ? '35px ' : '25px')};
		height: ${(props) => (props.active ? '35px' : '25px')};
		background-color: ${(props) => (props.active ? '#000000' : '#8f99af')};
	}
`
export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding: 0px;
  }
`
export const Pivot = styled.div`
  margin-bottom: -5px;
  width: 0;
  height: 0;
  border-left: 10px solid trasnparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #fff;
  @media (min-width: 768px) {
    margin-bottom: -30px;
    border-left: 15px solid trasnparent;
    border-right: 15px solid transparent;
    border-bottom: 43px solid #fff;
  }
`