import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListParticipants from "./ListParticipants"
import { useParticipantsList } from "./state/hook/useParticipantsList"

jest.mock('./state/hook/useParticipantsList', () => {
	return{
		useParticipantsList: jest.fn()
	}
})

describe('Uma lista vazia de participantes', () => {
	beforeEach(() => {
		(useParticipantsList as jest.Mock).mockReturnValue([])
	})
	test('deve ser rednerizada sem elementos', () => {
		render(
			<RecoilRoot>
				<ListParticipants />
			</RecoilRoot>)

		const itens = screen.queryAllByRole('listitem')
		expect(itens).toHaveLength(0)
	})
})

describe('Uma lista preenchida de participantes', () => {
	const participants = ['Ana', 'Rubens']
	beforeEach(() => {
		(useParticipantsList as jest.Mock).mockReturnValue(participants)
	})
	test('deve ser renderizada sem elementos', () => {


		render(
			<RecoilRoot>
				<ListParticipants />
			</RecoilRoot>)

		const itens = screen.queryAllByRole('listitem')
		expect(itens).toHaveLength(participants.length)
	})
})
