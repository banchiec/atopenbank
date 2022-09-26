import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CardInfo from '../../../../components/Cards/CardInfo/CardInfo'
import CardTextInfo from '../../../../components/Cards/CardTextInfo/CardTextInfo'
import CustomButton from '../../../../components/Buttons/CustomButton/CustomButton'
import {
	acceptInformation,
	deniedInformation,
} from '../../../../features/user/userLoginSlice'
import { dataInfo, textInfo } from '../../../../utils/data'
import {
	Actions,
	ContainerActions,
	ContainerCard,
	ContainerInformation,
	ContainerInformationTitle,
	ContainerText,
	Title,
} from './productInformationStyled'

const ProductInformation = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const user = useSelector((state) => state.userLogin)
	console.log(user)

	const handleDeniedInformation = () => {
		dispatch(deniedInformation())
		navigate('/', { replace: true })
	}
	const handleAcceptInformation = () => {
		dispatch(acceptInformation())
	}

	return (
		<ContainerInformation>
			<ContainerInformationTitle>
				<Title>Crea tu Password Manager</Title>
			</ContainerInformationTitle>
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
						onClick={handleDeniedInformation}
						color={'#ffff'}
						textColor={'#000000'}
						text={'Cancelar'}
					/>
					<CustomButton
						onClick={handleAcceptInformation}
						color={'#002B45'}
						text={'Siguiente'}
					/>
				</Actions>
			</ContainerActions>
		</ContainerInformation>
	)
}

export default ProductInformation
