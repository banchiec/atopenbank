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
					'/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!%*?&])([A-Za-zd$@$!%*?&]|[^ ]){8,24}$/'
				}
				title="Mínimo 8 caracteres y máximo 24, al menos 1 número, una mayuscula y un caracter especial, espacios"
			/>
			<Icon>{icon}</Icon>
			{lengthSize && <p>{`0/${lengthSize}`}</p>}
		</ContainerInput>
	)
}

export default CustomInput
