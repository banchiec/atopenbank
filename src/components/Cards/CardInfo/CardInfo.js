import { Card, Image, TextInfo } from './cardInfoStyled'

const CardInfo = ({ img, text }) => {
	return (
		<Card>
			<Image src={img} alt="image" />
			<TextInfo>{text}</TextInfo>
		</Card>
	)
}
export default CardInfo
