import { useDispatch, useSelector } from "react-redux"
import { FiCheckCircle } from 'react-icons/fi'
import {BiError} from 'react-icons/bi'
import CardTextInfo from "../../../../components/Cards/CardTextInfo/CardTextInfo"
import { Actions, ContainerActions, ContainerFeedBack } from "./feedbackStyled"
import CustomButton from "../../../../components/Buttons/CustomButton/CustomButton"
import { resetChangingPassword } from "../../../../features/user/userLoginSlice"

const Feedback = () => {
  const { userLogin } = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()

  const handleReturnChangePassword = () => {
    dispatch(resetChangingPassword())
  }

  return(
    <ContainerFeedBack>
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
      <ContainerActions>
        <Actions>
          { userLogin.passwordChanged.passwordChangedSuccessfully === true && (
            <CustomButton
              textColor='red'
              color={'#fff'}
              onClick={handleReturnChangePassword}
              text={'Volver a Password Manager'}
            />
          )}
          { userLogin.passwordChanged.errorChangingPassword === true && (
            <CustomButton
              onClick={handleReturnChangePassword}
              textColor='red'
              color={'#fff'}
              text={'Acceder'}
            />
          )}
        </Actions>
      </ContainerActions>
    </ContainerFeedBack>
  )
}
export default Feedback
