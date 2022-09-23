import { Button } from './customButtonStyled'

const CustomButton = ({ color, text, textColor }) => {
	console.log(text)
	return (
		<Button textColor={textColor} color={color}>
			{text}
		</Button>
	)
}
export default CustomButton
