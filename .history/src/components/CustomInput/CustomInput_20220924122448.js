import { IoMdEyeOff } from 'react-icons/io'
import { ContainerInput, Input } from './customInputStyled'

const CustomInput = ({ icon, textLabel, placeHolder, type }) => {
	return (
		<ContainerInput>
			<label>{textLabel}</label>
			<div>{icon}</div>
			<Input type={type} placeholder={placeHolder}>
				<IoMdEyeOff/>
			</Input>
		</ContainerInput>
	)
}

export default CustomInput
