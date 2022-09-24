import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, PageItem } from './paginationStyled'

const Pagination = () => {
	const [pageActive, setPageActive] = useState(true)
	const {acceptInformationLogin, deniedInformationLogin} = useSelector()
	return (
		<Container>
			<PageItem active={true}>1</PageItem>
			<PageItem>2</PageItem>
			<PageItem>3</PageItem>
		</Container>
	)
}
export default Pagination
