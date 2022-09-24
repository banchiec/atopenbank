import styled from 'styled-components'

export const ContainerLogin = styled.div`
	margin: 20px 20px 80px 20px;
	.pagination {
		width: 100%;
		height: 4vh;
	}

	@media (min-width: 768px) {
		display: flex;
		justify-content: center;
		margin: 3em 0;
		.container_login {
			width: 70%;
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		}
	}
`
export const PaginationLogin = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 1;
`
