import { Input } from './customInputStyled'

const CustomInput = ({ icon, textLabel, placeHolder, type }) => {
	return (
		<>
			<label>{textLabel}</label>
			<Input></Input>
		</>
	)
}

export default CustomInput
