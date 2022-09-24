import { Input } from './customInputStyled'

const CustomInput = ({ icon, textLabel, placeHolder, type }) => {
	console.log(textLabel)
	return (
		<Containe>
			<label>{textLabel}</label>
			<Input type={type}></Input>
		</>
	)
}

export default CustomInput
