import { Button } from './customButtonStyled'
import PropTypes from 'prop-types'

const CustomButton = ({ color, text, textColor, onClick, active, disabled }) => {
	return (
		<Button 
			active={active}
			textColor={textColor} 
      disabled={disabled}
			color={color}
			onClick={onClick}
		>
			{text}
		</Button>
	)
}

CustomButton.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
	textColor: PropTypes.string,
	disabled: PropTypes.bool,
	active: PropTypes.bool
}
export default CustomButton
