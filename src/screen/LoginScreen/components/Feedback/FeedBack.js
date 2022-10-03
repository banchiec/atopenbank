import { useDispatch, useSelector } from "react-redux"
import { FiCheckCircle } from 'react-icons/fi'
import {BiError} from 'react-icons/bi'
import CardTextInfo from "../../../../components/Cards/CardTextInfo/CardTextInfo"
import { Actions, ContainerActions, ContainerFeedBack, ContainerTextInfo } from "./feedbackStyled"
import CustomButton from "../../../../components/Buttons/CustomButton/CustomButton"
import { resetChangingPassword } from "../../../../features/user/userLoginSlice"
import { useNavigate } from "react-router-dom"

const Feedback = () => {
  const navigate = useNavigate()
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
            title={'¡Tu Password Manager ya está creado!'}
            text={'Lorem ipsum dolor sit ament, consectetur adipiscing elit. Maecenas varius totor nibh.'}
            colorIcon={'green'}
            size={'L'}
          />
        ):(
          <CardTextInfo
            icon={<BiError/>}
            title={'Ha habido un error'}
            text={'No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde'}
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
              text={'Acceder'}
            />
          )}
          { userLogin.passwordChanged.errorChangingPassword === true && (
            <CustomButton
              onClick={handleReturnChangePassword}
              textColor='red'
              color={'#fff'}
              text={'Volver a Password Manager'}
            />
          )}
        </Actions>
      </ContainerActions>
    </ContainerFeedBack>
  )
}
export default Feedback
