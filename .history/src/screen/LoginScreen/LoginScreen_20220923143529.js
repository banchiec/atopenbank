import Pagination from './components/Pagination/Pagination'
import ProductInformation from './components/ProductInformation/ProductInformation'
import { ContainerLogin, PaginationLogin } from './loginScreenStyled'

const LoginScreen = () => {
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
