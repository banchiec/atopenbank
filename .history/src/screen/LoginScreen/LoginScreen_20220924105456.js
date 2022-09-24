import { useSelector } from 'react-redux'
import FormLogin from './components/FormLogin/FormLogin'
import Pagination from './components/Pagination/Pagination'
import ProductInformation from './components/ProductInformation/ProductInformation'
import { ContainerLogin } from './loginScreenStyled'

const LoginScreen = () => {
	const { activePage } = useSelector(
		(state) => state.userLogin
	)
	return (
		<ContainerLogin>
			<div className="container_login">
				<Pagination />
				{pageInformationActive && <ProductInformation />}
				{pageFormLoginActive && <FormLogin />}
			</div>
		</ContainerLogin>
	)
}
export default LoginScreen
