import { useDispatch, useSelector } from 'react-redux'
import CustomInput from '../../../../components/CustomInput/CustomInput'
import CustomButton from '../../../../components/Buttons/CustomButton/CustomButton'
import { deniedForm } from '../../../../features/user/userLoginSlice'
import { BsEye } from 'react-icons/bs'
import {
	Actions,
	Article,
	ContainerActions,
	ContainerForm,
	ContainerLogin,
	ContainerLoginTitle,
	Form,
	FormControl,
	FormControlPane,
	FormControlPanel,
	Title,
} from './formLoginStyled'

const FormLogin = () => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.userLogin)
	console.log(user)

	const handleDeniedForm = () => {
		dispatch(deniedForm())
	}

	const handleAcceptLogin = () => {}

	return (
		<ContainerLogin>
			<ContainerLoginTitle>
				<Title>Crea tu Password Manager</Title>
			</ContainerLoginTitle>
			<Article>
				<p>
					En primer lugar, debaes crear una contraseña diferente para sus pertenecias
					electrónicas.
				</p>
				<br />
				<p>No podrás recuperar tu contraseña, asi que recuérdalo bien.</p>
			</Article>
			<ContainerForm>
				<Form>
					<FormControlPanel>
						<FormControl>
							<label>Crea tu Contraseña Maestra</label>
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
					</FormControlPanel>
					{/* <FormControl> */}
					<Article>
						<p>
							También puedes crear una pista que te ayude a recordar tu contraseña
							maestra.
						</p>
					</Article>
					{/* </FormControl> */}
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
