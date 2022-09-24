import Pagination from './components/Pagination/Pagination'
import ProductInformation from './components/ProductInformation/ProductInformation'
import { ContainerLogin, PaginationLogin } from './loginScreenStyled'

const LoginScreen = () => {
	const {pageInformationActive, pageFormLoginActive} = useSelecto((state) => state.userLogin)
	return (
		<ContainerLogin>
			<div className="container_login">
				<Pagination />
				<ProductInformation />
			</div>
		</ContainerLogin>
	)
}
export default LoginScreen
