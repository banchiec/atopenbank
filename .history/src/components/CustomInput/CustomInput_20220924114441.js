import { Input } from './customInputStyled'

const CustomInput = ({ icon, textLabel, placeHolder, type }) => {
	console.log(textLabel)
	return (
		<>
			<p>{textLabel}</p>
			<Input type={type}></Input>
		</>
	)
}

export default CustomInput
