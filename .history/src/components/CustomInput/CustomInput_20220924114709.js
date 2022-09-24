import { ContainerInput, Input } from './customInputStyled'

const CustomInput = ({ icon, textLabel, placeHolder, type }) => {
	console.log(textLabel)
	return (
		<ContainerInput>
			<label>{textLabel}</label>
			<Input type={type} placeHolder={placeHolder}></Input>
		</ContainerInput>
	)
}

export default CustomInput
