import { useSelector } from 'react-redux'
import Pagination from './components/Pagination/Pagination'
import ProductInformation from './components/ProductInformation/ProductInformation'
import { ContainerLogin } from './loginScreenStyled'

const LoginScreen = () => {
	const { pageInformationActive, pageFormLoginActive } = useSelector(
		(state) => state.userLogin
	)
	return (
		<ContainerLogin>
			<div className="container_login">
				<Pagination />
				{pageInformationActive && <ProductInformation />}
				{pageFormLoginActive && <h1>Form</h1>}
			</div>
		</ContainerLogin>
	)
}
export default LoginScreen
