import { IoMdEyeOff } from 'react-icons/io'
import { ContainerInput, Icon, Input } from './customInputStyled'

const CustomInput = ({ icon, placeHolder, type, size, lengthSize, onChange }) => {
	return (
		<ContainerInput>
			<Input
				type={type}
				placeholder={placeHolder}
				size={size}
				onChange={onChange}
				pattern={
					type === 'password' ? '^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,24}$' : null
				}
				title="Mínimo 8 caracteres y máximo 24, al menos 1 número, una mayuscula. No espacios en blanco."
			/>
			<Icon>{icon}</Icon>
			{lengthSize && <p>{`0/${lengthSize}`}</p>}
		</ContainerInput>
	)
}

CustomInput.propTypes =


export default CustomInput
