import { IoMdEyeOff } from 'react-icons/io'
import { ContainerInput, Input } from './customInputStyled'

const CustomInput = ({ icon, textLabel, placeHolder, type }) => {
	return (
		<ContainerInput>
			<Input type={type} placeholder={placeHolder} />
			<IoMdEyeOff  clas/>
		</ContainerInput>
	)
}

export default CustomInput
