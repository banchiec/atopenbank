import { ContainerInput, Input } from './customInputStyled'

const CustomInput = ({ icon, textLabel, placeHolder, type }) => {
	return (
		<ContainerInput>
			<label>{textLabel}</label>
			{icon}
			<Input type={type} placeholder={placeHolder}>
				{icon}
			</Input>
		</ContainerInput>
	)
}

export default CustomInput
