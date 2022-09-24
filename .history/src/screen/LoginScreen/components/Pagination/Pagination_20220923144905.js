import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, PageItem } from './paginationStyled'

const Pagination = () => {
	const [pageActive, setPageActive] = useState(true)
	const { acceptInformationLogin, deniedInformationLogin } = useSelector(
		(state) => state.userLogin
	)
	return (
		<Container>
			<PageItem active={acceptInformationLogin ? true: false}>1</PageItem>
			<PageItem>2</PageItem>
			<PageItem>3</PageItem>
		</Container>
	)
}
export default Pagination
