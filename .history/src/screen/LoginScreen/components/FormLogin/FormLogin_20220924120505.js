import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CardInfo from '../../../../components/Cards/CardInfo/CardInfo'
import CardTextInfo from '../../../../components/Cards/CardTextInfo/CardTextInfo'
import CustomButton from '../../../../components/Buttons/CustomButton/CustomButton'
import { dataInfo, textInfo } from '../../../../utils/data'

import { deniedForm } from '../../../../features/user/userLoginSlice'

import {
	Actions,
	ContainerActions,
	ContainerForm,
	ContainerLogin,
	ContainerLoginTitle,
	Form,
	Title,
} from './formLoginStyled'
import { Input } from '../../../../components/CustomInput/customInputStyled'
import CustomInput from '../../../../components/CustomInput/CustomInput'

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
					<Input
						id='password'	
						type={'password'}
						textLabel={'Crea tu Contraseña Maestra'}
						// placeholder={'Repite  tu contraseña'}
					/>
					<CustomInput
						type={'text'}
						textLabel={'Crea tu Contraseña Maestra'}
						placeHolder={'Repite  tu contraseña'}
					/>
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
