import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BsEye } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import CustomInput from '../../../../components/CustomInput/CustomInput'
import CustomButton from '../../../../components/Buttons/CustomButton/CustomButton'
import AlertForm from '../../../../components/Alerts/AlertForm/AlertForm'
import { acceptForm, deniedForm, errorChangingPassword, passwordChangedSuccessfully } from '../../../../features/user/userLoginSlice'
import { fetchSetUserLogin } from '../../../../features/user/api/userLoginApi'
import { submitForm } from '../../../../services/api'
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
import { useTranslation } from 'react-i18next'

const FormLogin = () => {
	const dispatch = useDispatch()
  const [t, i18n] = useTranslation('global')
	const [password, setPassword] = useState('')
	const [pwdConfirm, setPwdConfirm] = useState('')
	const [hintPassword, setHinkPassword] = useState('')
  const [alert, setAlert] = useState(false)
  const [textAlert, setTextAlert] = useState('')

	const handleDeniedForm = () => {
		dispatch(deniedForm())
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (password === pwdConfirm && (password !== '' && pwdConfirm !== '')) {
			const user = {
				password,
				pwdConfirm,
				hintPassword,
			}
			submitForm(password, pwdConfirm, hintPassword ).then((response) => {
        response.status === 200 && (dispatch(fetchSetUserLogin(user)) && dispatch(acceptForm()) && dispatch(passwordChangedSuccessfully())) 
          response.status === 401 && (
          dispatch(acceptForm()) && 
          dispatch(errorChangingPassword()) 
        )
      }).catch(error => 
        error.status === 401 && (dispatch(acceptForm()) && dispatch(errorChangingPassword()))
        )
		} 
    if(password === '' || pwdConfirm === ''){
      setTextAlert('Necesitas rellenar los campos')
      setAlert(true)
		}
    if(password !== pwdConfirm){
      setTextAlert('Las constraseñas son diferentes')
      setAlert(true)
    }
	}

  const handleCloseAlert = () => {
    setAlert(false)
  }

	return (
		<ContainerLogin>
			<ContainerLoginTitle>
				<Title>{t('formLogin.title')}</Title>
			</ContainerLoginTitle>
			<Article>
				<p>
          {t('formLogin.first-text')}
				</p>
				<br />
				<p>{t('formLogin.second-text')}</p>
			</Article>
			<ContainerForm>
				<Form onSubmit={handleSubmit}>
					<FormControlPanel>
						<FormControl size="m">
							<label>{t('formLogin.label-create-password')}</label>
							<CustomInput
								type={'password'}
								icon={<BsEye />}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeHolder={t('formLogin.placeholder-label-create-password')}
							/>
						</FormControl>
						<FormControl size="m">
							<label>{t('formLogin.label-repeat-password')}</label>
							<CustomInput
								type={'password'}
								autocomplete="new-password"
								onChange={(e) => setPwdConfirm(e.target.value)}
								value={pwdConfirm}
								icon={<BsEye />}
								placeHolder={t('formLogin.placeholder-label-repeat-password')}
							/>
						</FormControl>
					</FormControlPanel>
					<FormControl size="l">
						<p>
              {t('formLogin.info-label-password')}
						</p>
						<Label>
              {t('formLogin.hint-info-label')}
							<AiOutlineInfoCircle />
						</Label>
						<CustomInput
							type={'text'}
							placeHolder={t('formLogin.placeholder-hint')}
							value={hintPassword}
							onChange={(e) => setHinkPassword(e.target.value)}
							size="L"
							lengthSize={255}
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
						text={t('formLogin.cancel')}
					/>
					<CustomButton 
            onClick={handleSubmit} 
            color={'#002B45'} 
            text={t('formLogin.next')} 
           />
				</Actions>
			</ContainerActions>
      {alert && (
        <AlertForm
          handleShowAlert={alert}
          text={textAlert}
          handleCloseAlert={handleCloseAlert}
        />
      )}
		</ContainerLogin>
	)
}

export default FormLogin
