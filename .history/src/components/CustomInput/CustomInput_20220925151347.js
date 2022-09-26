import { IoMdEyeOff } from 'react-icons/io'
import { ContainerInput, Icon, Input } from './customInputStyled'

const CustomInput = ({ icon, placeHolder, type, size }) => {
	return (
		<ContainerInput>
			<Input type={type} placeholder={placeHolder} />
			<Icon>{icon}</Icon>
		</ContainerInput>
	)
}

export default CustomInput
