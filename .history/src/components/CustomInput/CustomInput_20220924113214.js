import { Input } from './customInputStyled'

const CustomInput = ({ icon, textLabel, placeHolder, type }) => {
	return (
		<>
			<label>{textLabel}</label>
			<Input type={type}></Input>
		</>
	)
}

export default CustomInput
