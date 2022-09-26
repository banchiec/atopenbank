import { ContainerInput, Icon, Input } from './customInputStyled'

const CustomInput = ({ icon, textLabel, placeHolder, type }) => {
	return (
		<ContainerInput>
			<Input type={type} placeholder={placeHolder} />
			<Icon>{icon}</Icon>
		</ContainerInput>
	)
}

export default CustomInput
