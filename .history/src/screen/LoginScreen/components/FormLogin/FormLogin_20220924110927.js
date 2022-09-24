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
	ContainerCard,
	ContainerLogin,
	ContainerLoginTitle,
	ContainerText,
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
			<ContainerCard>
				{dataInfo.map((info) => {
					return <CardInfo key={info.id} img={info.img} text={info.text} />
				})}
			</ContainerCard>
			<ContainerText>
				{textInfo.map((text) => {
					return <CardTextInfo key={text.id} title={text.title} text={text.text} />
				})}
			</ContainerText>
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
