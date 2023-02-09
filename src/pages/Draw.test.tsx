import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useParticipantsList } from '../components/state/hook/useParticipantsList';
import Draw from './Draw';

jest.mock('../components/state/hook/useParticipantsList', () => {
	return {
		useParticipantsList: jest.fn()
	}
})

describe('na pagina de sorteio', () => {
	const participants = [
		'Ana',
		'Rubens',
		'Rodolfo'
	]
	beforeEach(() => {
		(useParticipantsList as jest.Mock).mockReturnValue(participants)
	})
	test('todos os participantes podem exibir o seu amigo secreto', () => {
		render(
			<RecoilRoot>
				<Draw />
			</RecoilRoot>)

		const opcoes = screen.queryAllByRole('option')
		expect(opcoes).toHaveLength(participants.length)
	})
})