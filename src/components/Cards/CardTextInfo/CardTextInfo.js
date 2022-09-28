import { Article, CardText, Description, Icon, Title } from './cardTextInfoStyled'

const CardTextInfo = ({ title, text, icon, size, colorIcon }) => {
	return (
		<CardText size={size} >
      <Icon colorIcon={colorIcon}>
        {icon}
      </Icon>
			<Article>
				<Title>{title}</Title>
				<Description>{text}</Description>
			</Article>
		</CardText>
	)
}

export default CardTextInfo
