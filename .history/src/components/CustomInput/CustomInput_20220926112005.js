import { IoMdEyeOff } from 'react-icons/io'
import { ContainerInput, Icon, Input } from './customInputStyled'

const CustomInput = ({ icon, placeHolder, type, size, lengthSize }) => {
	console.log(type)
	return (
		<ContainerInput>
			<Input
				type={type}
				placeholder={placeHolder}
				size={size}
				pattern={
					'^(?=\\w*\\d)(?=\\w*[A-Z])(?=\w*[a-z])\\S{8,16}$'
				}
				title="Mínimo 8 caracteres y máximo 24, al menos 1 número, una mayuscula y un caracter especial. No espacios en blanco."
			/>
			<Icon>{icon}</Icon>
			{lengthSize && <p>{`0/${lengthSize}`}</p>}
		</ContainerInput>
	)
}

export default CustomInput
