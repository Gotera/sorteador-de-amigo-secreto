import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Configurations from "./Configurations"

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => {
	return {
		useNavigate: () => mockNavigate
	}
})

describe('a pagina de configuração', () => {
	test('deve ser renderizada corretamente', () => {
		const { container } = render(
			<RecoilRoot>
				<Configurations />
			</RecoilRoot>)
			
		expect(container).toMatchSnapshot()
	})
})