import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomInput from '../../../../components/CustomInput/CustomInput'
import CustomButton from '../../../../components/Buttons/CustomButton/CustomButton'
import { deniedForm } from '../../../../features/user/userLoginSlice'
import { AiOutlineInfoCircle } from 'react-icons/ai'
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
	FormControlPanel,
	Label,
	Title,
} from './formLoginStyled'
import { fetchSetUserLogin } from '../../../../features/user/api/userLoginApi'

const FormLogin = () => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.userLogin)
	const [password, setPassword] = useState('')
	const [pwdConfirm, setPwdConfirm] = useState('')
	const [hintPassword, setHinkPassword] = useState('')

	const handleDeniedForm = () => {
		dispatch(deniedForm())
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if( password === pwdConfirm) {

		}
		password === pwdConfirm ? {
			const user = {
				password,
				pwdConfirm,
				hintPassword,
			}
			dispatch(fetchSetUserLogin(user))
		} 
		: {
			console.log("object")
		} 
		console.log(password)
		console.log(pwdConfirm)
		console.log(hintPassword)
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
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeHolder={'Repite  tu contraseña'}
								required
							/>
						</FormControl>
						<FormControl size="m">
							<label>Repite tu Contraseña Maestra</label>
							<CustomInput
								type={'password'}
								autocomplete="new-password"
								onChange={(e) => setPwdConfirm(e.target.value)}
								value={pwdConfirm}
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
							value={hintPassword}
							onChange={(e) => setHinkPassword(e.target.value)}
							size="L"
							required
							lengthSize={60}
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
					<CustomButton onClick={handleSubmit} color={'#002B45'} text={'Siguiente'} />
				</Actions>
			</ContainerActions>
		</ContainerLogin>
	)
}

export default FormLogin
