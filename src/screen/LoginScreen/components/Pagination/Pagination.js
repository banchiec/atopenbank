import { useSelector } from 'react-redux'
import { Container, ContainerItem, PageItem, Pivot } from './paginationStyled'

const Pagination = () => {
	const { activePage } = useSelector((state) => state.userLogin)

	return (
		<Container>
      <ContainerItem>
		 	  <PageItem active={activePage.pageInformationActive ? true : false}>1 </PageItem>
        {activePage.pageInformationActive && <Pivot/> }
      </ContainerItem>
      <ContainerItem>
			  <PageItem active={activePage.pageFormLoginActive ? true : false}>2</PageItem>
        {activePage.pageFormLoginActive && <Pivot/> }
      </ContainerItem>
      <ContainerItem>
			  <PageItem active={activePage.pageFeedBackActive ? true : false}>3</PageItem>
        {activePage.pageFeedBackActive && <Pivot/> }
      </ContainerItem>
		</Container>
	)
}
export default Pagination
