import { Button } from './customButtonStyled'

const CustomButton = ({ color, text, textColor }) => {
	return (
		<Button textColor={textColor} color={color}>
			{text}
		</Button>
	)
}
CustomButton.propTypes = {
}
export default CustomButton
