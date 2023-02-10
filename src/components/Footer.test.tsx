import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Footer from "./Footer"
import { useParticipantsList } from "./state/hook/useParticipantsList"

jest.mock('./state/hook/useParticipantsList', () => {
	return {
		useParticipantsList: jest.fn()
	}
})

const mockNavigate = jest.fn()
const mockDraw = jest.fn()

jest.mock('./state/hook/useDrawing', () => {
	return {
		useDrawing: () => mockDraw
	}
})

jest.mock('react-router-dom', () => {
	return {
		useNavigate: () => mockNavigate
	}
})

describe('quando não existem praticipantes suficientes', () => {
	beforeEach(() => {
		(useParticipantsList as jest.Mock).mockReturnValue([])
	})
	test('a brincadeira não pode ser iniciada', () => {
		render(
			<RecoilRoot>
				<Footer />
			</RecoilRoot>)

		const botao = screen.getByRole('button')
		expect(botao).toBeDisabled()
	})
})

describe('quando existem praticipantes suficientes', () => {
	beforeEach(() => {
		(useParticipantsList as jest.Mock).mockReturnValue(['Ana', 'Rubens', 'Mario'])
	})
	test('a brincadeira pode ser iniciada', () => {
		render(
			<RecoilRoot>
				<Footer />
			</RecoilRoot>)
		const botao = screen.getByRole('button')
		expect(botao).not.toBeDisabled()
	})
	test('a brincadeira foi iniciada', () => {
		render(
			<RecoilRoot>
				<Footer />
			</RecoilRoot>)
		const botao = screen.getByRole('button')
		fireEvent.click(botao)
		expect(mockNavigate).toHaveBeenCalledTimes(1)
		expect(mockNavigate).toHaveBeenCalledWith('/sorteio')
		expect(mockDraw).toHaveBeenCalledTimes(1)
	})
})