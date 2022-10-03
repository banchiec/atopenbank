import { useDispatch, useSelector } from "react-redux"
import { FiCheckCircle } from 'react-icons/fi'
import {BiError} from 'react-icons/bi'
import CardTextInfo from "../../../../components/Cards/CardTextInfo/CardTextInfo"
import { Actions, ContainerActions, ContainerFeedBack, ContainerTextInfo } from "./feedbackStyled"
import CustomButton from "../../../../components/Buttons/CustomButton/CustomButton"
import { resetChangingPassword } from "../../../../features/user/userLoginSlice"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Feedback = () => {
  const navigate = useNavigate()
  const [t, i18n] = useTranslation('global')
  const { userLogin } = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()

  const handleReturnChangePassword = () => {
    dispatch(resetChangingPassword())
    userLogin.passwordChanged.passwordChangedSuccessfully && navigate('/', {replace: true})
    userLogin.passwordChanged.errorChangingPassword && navigate('/login', {replace: true})
  }

  return(
    <ContainerFeedBack>
      <ContainerTextInfo>
        {userLogin.passwordChanged.passwordChangedSuccessfully? (
          <CardTextInfo
            icon = {<FiCheckCircle/>}  
            title={t('feedback.title-success')}
            text={t('feedback.info-success')}
            colorIcon={'green'}
            size={'L'}
          />
        ):(
          <CardTextInfo
            icon={<BiError/>}
            title={t('feedback.title-error')}
            text={t('feedback.info-error')}
            colorIcon={'red'}
            size={'L'}
          />
        )}
      </ContainerTextInfo>
      <ContainerActions>
        <Actions>
          { userLogin.passwordChanged.passwordChangedSuccessfully === true && (
            <CustomButton
              textColor='red'
              color={'#fff'}
              onClick={handleReturnChangePassword}
              text={t('feedback.button-text-success')}
            />
          )}
          { userLogin.passwordChanged.errorChangingPassword === true && (
            <CustomButton
              onClick={handleReturnChangePassword}
              textColor='red'
              color={'#fff'}
              text={t('feedback.button-text-error')}
            />
          )}
        </Actions>
      </ContainerActions>
    </ContainerFeedBack>
  )
}
export default Feedback
