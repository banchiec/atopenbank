import styled from 'styled-components'

export const CardText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
	padding: 10px;
	@media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px;
		width: ${props => props.size === 'L' ? '90%': props.size === 'M' ? '60%': '40%'};
	}
`

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
	@media (min-width: 768px) {
    margin: 0;
    width: 100%;
    justify-content: start;
    align-items: start;
		padding: 0;
	}
`
export const Title = styled.h4`
	font-size: 18px;
	padding: 5px 15px;
  margin: 0px;
  text-align: center;
	@media (min-width: 768px) {
    font-size: 1.12em; 
		margin: 0;
	}
`
export const Icon = styled.div`
  margin: 10px 0;
  font-size: 50px;
  color: ${props => props.colorIcon ? props.colorIcon : '#0000'};
  @media (min-width: 768px) {
    svg {
      font-size: 34px;
      color: ${props => props.colorIcon ? props.colorIcon : '#0000'};
    }
  }
`

export const Description = styled.div`
	padding: 5px 15px 0px 15px;
  margin: 0px;
  width: 80%;
  font-size: 14px;
  text-align: center;
  @media (min-width: 768px){
    text-align: start;
    width: 90%;
  }
`
