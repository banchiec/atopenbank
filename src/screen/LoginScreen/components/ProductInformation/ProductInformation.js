import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CardInfo from '../../../../components/Cards/CardInfo/CardInfo'
import CardTextInfo from '../../../../components/Cards/CardTextInfo/CardTextInfo'
import CustomButton from '../../../../components/Buttons/CustomButton/CustomButton'
import Group from '../../../../assets/img/group.svg'
import Group3 from '../../../../assets/img/group-3.svg'
import {
	acceptInformation,
	deniedInformation,
} from '../../../../features/user/userLoginSlice'
import {
	Actions,
	CheckBox,
	ContainerActions,
	ContainerCard,
	ContainerCheck,
	ContainerInformation,
	ContainerInformationTitle,
	ContainerText,
	Title,
} from './productInformationStyled'
import { useTranslation } from 'react-i18next'

const ProductInformation = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

  const [t, i18n] = useTranslation("global")
  const [checkInformation, setCheckInformation] = useState(false)

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
				<Title>{t('productInformation.title')}</Title>
			</ContainerInformationTitle>
			<ContainerCard>
        <CardInfo 
          img={Group}
          text={t('productInformation.information-icon-one')}
        />
        <CardInfo 
          img={Group3}
          text={t('productInformation.information-icon-two')}
        />
			</ContainerCard>
			<ContainerText>
        <CardTextInfo
          title={t('productInformation.information-title-one')}
          text={t('productInformation.information-description-one')}
          size={'L'}
        />
        <CardTextInfo
          title={t('productInformation.information-title-two')}
          text={t('productInformation.information-description-two')}
          size={'L'}
        />
			</ContainerText>
      <ContainerCheck>
        <label htmlFor='chbx-confirm'>{t("productInformation.accept-the-conditions")}
          <CheckBox 
            type='checkbox' 
            id='chbx-confirm' 
            value={checkInformation}
            onChange={(e) =>{
              setCheckInformation(e.target.checked)}
            } 
          />
        </label>
      </ContainerCheck>
			<ContainerActions>
				<Actions>
					<CustomButton
						onClick={handleDeniedInformation}
						color={'#ffff'}
						textColor={'#000000'}
						text={t("productInformation.cancel")}
					/>
					<CustomButton
						onClick={handleAcceptInformation}
						color={'#002B45'}
            disabled={!checkInformation}
						text={t("productInformation.next")}
					/>
				</Actions>
			</ContainerActions>
		</ContainerInformation>
	)
}

export default ProductInformation
