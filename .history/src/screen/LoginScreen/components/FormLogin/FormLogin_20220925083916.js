import { useDispatch, useSelector } from 'react-redux'
import { IoMdEyeOff } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import CustomInput from '../../../../components/CustomInput/CustomInput'
import CustomButton from '../../../../components/Buttons/CustomButton/CustomButton'

import { deniedForm } from '../../../../features/user/userLoginSlice'
import { BsEye } from 'react-icons/bs'

import {
	Actions,
	ContainerActions,
	ContainerForm,
	ContainerLogin,
	ContainerLoginTitle,
	Form,
	FormControl,
	Title,
} from './formLoginStyled'

const FormLogin = () => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.userLogin)
	console.log(user)

	const handleDeniedForm = () => {
		dispatch(deniedForm())
	}

	const handleAcceptLogin = () => {
		// dispatch(acceptLogin())
	}

	return (
		<ContainerLogin>
			<ContainerLoginTitle>
				<Title>Crea tu Password Manager</Title>
			</ContainerLoginTitle>
			<ContainerForm>
				<Form>
					<FormControl>
						<label>Repite tu Contraseña Maestra</label>
						<CustomInput
							type={'text'}
							textLabel={'Crea tu Contraseña Maestra'}
							icon={<BsEye />}
							placeHolder={'Repite  tu contraseña'}
						/>
					</FormControl>
					<FormControl>
						<label>Repite tu Contraseña Maestra</label>
						<CustomInput
							type={'text'}
							textLabel={'Crea tu Contraseña Maestra'}
							icon={<BsEye />}
							placeHolder={'Repite  tu contraseña'}
						/>
					</FormControl>
				</Form>
			</ContainerForm>
			<ContainerActions>
				<Actions>
					<CustomButton
						onClick={handleDeniedForm}
						color={'#ffff'}
						textColor={'#000000'}
						text={'Cancelar'}
					/>
					<CustomButton
						onClick={handleAcceptLogin}
						color={'#002B45'}
						text={'Siguiente'}
					/>
				</Actions>
			</ContainerActions>
		</ContainerLogin>
	)
}

export default FormLogin
