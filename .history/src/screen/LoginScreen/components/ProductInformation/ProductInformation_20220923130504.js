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
import { deniedInformation } from '../../../../features/user/userLoginSlice'

const ProductInformation = () => {
	const dispatch = useDispatch()
	const history = useHiso
	const user = useSelector(
		(state) => state.userLogin
	)
	console.log(user);
	// useEffect(() => {
	// 	console.log(deniedInformationLogin)
	// }, [acceptInformationLogin])
	const handleDeniedInformation = (e) => {
		console.log(e)
		// dispatch(acceptInformationLogin())
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
					<button onClick={() => dispatch(deniedInformation())}>cancelar</button>
					<CustomButton
						onClick={(e) => handleDeniedInformation(e)}
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
