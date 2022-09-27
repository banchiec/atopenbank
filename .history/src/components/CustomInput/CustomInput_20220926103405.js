import { IoMdEyeOff } from 'react-icons/io'
import { ContainerInput, Icon, Input } from './customInputStyled'

const CustomInput = ({ icon, placeHolder, type, size, lengthSize }) => {
	clg
	return (
		<ContainerInput>
			<Input type={type} placeholder={placeHolder} size={size} />
			<Icon>{icon}</Icon>
			{lengthSize && <p>{`0/${lengthSize}`}</p>}
		</ContainerInput>
	)
}

export default CustomInput
