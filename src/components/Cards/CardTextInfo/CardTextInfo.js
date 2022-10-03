import { Article, CardText, Description, Icon, Title } from './cardTextInfoStyled'
import PropTypes from 'prop-types'

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

CardTextInfo.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.node,
  colorIcon: PropTypes.string,
}

export default CardTextInfo
