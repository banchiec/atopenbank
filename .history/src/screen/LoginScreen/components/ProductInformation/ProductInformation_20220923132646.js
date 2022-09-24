import {
	Actions,
	ContainerActions,
	ContainerCard,
	ContainerInformation,
	ContainerInformationTitle,
	ContainerText,
	Title,
} from './productInformationStyled'
import CardInfo from '../../../../components/Cards/CardInfo/CardInfo'
import { dataInfo, textInfo } from '../../../../utils/data'
import CardTextInfo from '../../../../components/Cards/CardTextInfo/CardTextInfo'
import CustomButton from '../../../../components/Buttons/CustomButton/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { deniedInformation } from '../../../../features/user/userLoginSlice'
import { useNavigate } from 'react-router-dom'

const ProductInformation = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const user = useSelector((state) => state.userLogin)
	console.log(user)
	const handleDeniedInformation = (e) => {
		dispatch(deniedInformation())
		navigate("/", { replace: true})
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
					<button onClick={() => handleDeniedInformation()}>cancelar</button>
					<CustomButton
						onClick={(e) => handleDeniedInformation}
						color={'#ffff'}
						textColor={'#000000'}
						text={'Cancelar'}
					/>
					<CustomButton color={'#002B45'} text={'Siguiente'} />
				</Actions>
			</ContainerActions>
		</ContainerInformation>
	)
}

export default ProductInformation
