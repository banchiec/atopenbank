import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, PageItem } from './paginationStyled'

const Pagination = () => {
	const [pageActive, setPageActive] = useState(true)
	const {
		activePage,
		acceptInformationLogin,
		deniedInformationLogin,
		// pageInformationActive,
		// pageFormLoginActive,
	} = useSelector((state) => state.userLogin)
	return (
		<Container>
			<PageItem active={activePage.pageInformationActive ? true : false}>1</PageItem>
			<PageItem active={activePage.pageFormLoginActive ? true : false}>2</PageItem>
			<PageItem>3</PageItem>
		</Container>
	)
}
export default Pagination
