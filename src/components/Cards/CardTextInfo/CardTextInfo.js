import { Article, CardText, Description, SubTitle, Title } from './cardTextInfoStyled'

const CardTextInfo = ({ title, text }) => {
	return (
		<CardText>
			<Article>
				<Title>{title}</Title>
				<Description>{text}</Description>
			</Article>
		</CardText>
	)
}
export default CardTextInfo
