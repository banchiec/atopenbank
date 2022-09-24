import { IoMdEye } from 'react-icons/io'
import { ContainerInput, Input } from './customInputStyled'

const CustomInput = ({ icon, textLabel, placeHolder, type }) => {
	return (
		<ContainerInput>
			<label>{textLabel}</label>
			<Input type={type} placeholder={placeHolder}>
				<IoMdEye />
			</Input>
		</ContainerInput>
	)
}

export default CustomInput
