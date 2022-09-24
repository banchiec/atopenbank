import { Button } from './customButtonStyled'
import PropTypes from 'prop-types'

const CustomButton = ({ color, text, textColor }) => {
	return (
		<Button textColor={textColor} color={color}>
			{text}
		</Button>
	)
}
CustomButton.prop= {
	color: PropoTypes.String,
}
export default CustomButton
