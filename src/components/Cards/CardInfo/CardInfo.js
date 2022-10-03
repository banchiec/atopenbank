import PropTypes from 'prop-types'
import { Card, Image, TextInfo } from './cardInfoStyled'

const CardInfo = ({ img, text }) => {
	return (
		<Card>
			<Image src={img} alt="image" />
			<TextInfo>{text}</TextInfo>
		</Card>
	)
}
CardInfo.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string
}
export default CardInfo
