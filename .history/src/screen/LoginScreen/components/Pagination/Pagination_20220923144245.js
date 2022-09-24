import { useState } from 'react'
import { Container, PageItem } from './paginationStyled'

const Pagination = () => {
	const [pageActive, setPageActive] = useState(true)
	const {acceptInformationLogin, deniedInformationLogin} = useSe
	return (
		<Container>
			<PageItem active={true}>1</PageItem>
			<PageItem>2</PageItem>
			<PageItem>3</PageItem>
		</Container>
	)
}
export default Pagination
