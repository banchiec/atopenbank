import { Button } from './customButtonStyled'
import PropTypes from 'pr'

const CustomButton = ({ color, text, textColor }) => {
	return (
		<Button textColor={textColor} color={color}>
			{text}
		</Button>
	)
}
CustomButton.propoTypes = {
	color: PropoTypes.String,
}
export default CustomButton
