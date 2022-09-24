import { useState } from 'react'
import { Container, PageItem } from './paginationStyled'

const Pagination = () => {
	const [pageActive, setPageActive] = useState()
	return (
		<Container>
			<PageItem active={false}>1</PageItem>
			<PageItem>2</PageItem>
			<PageItem>3</PageItem>
		</Container>
	)
}
export default Pagination
