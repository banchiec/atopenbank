import styled from 'styled-components'

export const CardText = styled.div`
	padding: 10px;
	@media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 30px;
		width: ${props => props.size === 'L' ? '100%': props.size === 'M' ? '90%': '40%'}
	}
`

export const Article = styled.article`
	@media (min-width: 768px) {
    margin: 0;
    width: 100%;
		padding: 0;
	}
`
export const Title = styled.h4`
	font-size: 18px;
	padding: 5px 15px 0px 15px;
	@media (min-width: 768px) {
    font-size: 1.12em; 
		margin: 0;
	}
`
export const Icon = styled.div`
  @media (min-width: 768px) {
    svg {
      font-size: 34px;
      color: ${props => props.colorIcon ? props.colorIcon : '#0000'};
    }
  }
`

export const Description = styled.div`
	padding: 5px 15px 0px 15px;
  font-size: 14px;
`
