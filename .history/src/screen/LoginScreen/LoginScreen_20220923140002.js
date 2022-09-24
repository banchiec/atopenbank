import ProductInformation from './components/ProductInformation/ProductInformation'
import { ContainerLogin, PaginationLogin } from './loginScreenStyled'

const LoginScreen = () => {
	return (
		<ContainerLogin>
			<div className="container_login">
				<Pagination
				<PaginationLogin> 1 2 3 </PaginationLogin>
				<ProductInformation />
			</div>
		</ContainerLogin>
	)
}
export default LoginScreen
