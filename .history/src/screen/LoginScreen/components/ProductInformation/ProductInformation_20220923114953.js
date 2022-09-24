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
import { useEffect } from 'react'

const ProductInformation = () => {
	const dispatch = useDispatch()
	const { acceptInformationLogin, deniedInformationLogin } = useSelector(
		(state) => state.userLogin
	)
	useEffect(() => {
		console.log(acceptInformationLogin)
	}, [acceptInformationLogin])
	const handleDeniedInformation = () => {
		dispatch(acceptInformationLogin())
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
						onClick={() => }
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
