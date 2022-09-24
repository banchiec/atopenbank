import { Button } from './customButtonStyled'
import PropTypes from 'prop-types'

const CustomButton = ({ color, text, textColor }) => {
	return (
		<Button textColor={textColor} color={color}>
			{text}
		</Button>
	)
}

CustomButton.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
	textColor: PropTypes.string,
	onClick: PropTypes.node,
}
export default CustomButton
