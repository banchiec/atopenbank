import { IoMdEyeOff } from 'react-icons/io'
import { ContainerInput, Icon, Input } from './customInputStyled'

const CustomInput = ({ icon, placeHolder, type, size, lengthSize }) => {
	return (
		<ContainerInput>
			<Input type={type} placeholder={placeHolder} size={size} />
			<Icon>{icon}</Icon>
			{lengthSize && <p>{`0/${lengthSize}`}</s>}
		</ContainerInput>
	)
}

export default CustomInput
