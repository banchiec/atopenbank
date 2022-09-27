import { useDispatch, useSelector } from 'react-redux'
import CustomInput from '../../../../components/CustomInput/CustomInput'
import CustomButton from '../../../../components/Buttons/CustomButton/CustomButton'
import { deniedForm } from '../../../../features/user/userLoginSlice'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsEye, BsInfoCircleFill } from 'react-icons/bs'
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
	Label,
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

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(e)
	}

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
				<Form onSubmit={handleSubmit}>
					<FormControlPanel>
						<FormControl size="m">
							<label>Crea tu Contraseña Maestra</label>
							<CustomInput
								type={'password'}
								icon={<BsEye />}
								placeHolder={'Repite  tu contraseña'}
								required
							/>
						</FormControl>
						<FormControl size="m">
							<label>Repite tu Contraseña Maestra</label>
							<CustomInput
								type={'password'}
								autocomplete="new-password"
								icon={<BsEye />}
								placeHolder={'Repite  tu contraseña'}
								required
							/>
						</FormControl>
					</FormControlPanel>
					<FormControl size="l">
						<p>
							También puedes crear una pista que te ayude a recordar tu contraseña
							maestra.
						</p>
						<Label>
							<label>Crea tu pista para recordar tu contraseña (opcional) </label>
							<AiOutlineInfoCircle />
						</Label>
						<CustomInput
							type={'text'}
							placeHolder={'Introduce tu pista'}
							size="L"
							lengthSize="60"
						/>
					</FormControl>
				</Form>
				{/* <ContainerActions> */}
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
			</ContainerForm>
			{/* </ContainerActions> */}
		</ContainerLogin>
	)
}

export default FormLogin
