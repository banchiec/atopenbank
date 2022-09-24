import { ContainerInput, Input } from './customInputStyled'

const CustomInput = ({ icon, textLabel, placeHolder, type }) => {
	console.log(textLabel)
	return (
		<ContainerInput>
			<label>{textLabel}</label>
			<Input 
				type={type} 
				plac={placeHolder}
			></Input>
		</ContainerInput>
	)
}

export default CustomInput
