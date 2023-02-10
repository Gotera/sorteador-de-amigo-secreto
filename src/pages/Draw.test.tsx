import { act, fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useParticipantsList } from '../components/state/hook/useParticipantsList';
import { useResult } from '../components/state/hook/useResult';
import Draw from './Draw';

jest.mock('../components/state/hook/useParticipantsList', () => {
	return {
		useParticipantsList: jest.fn()
	}
})
jest.mock('../components/state/hook/useResult', () => {
	return {
		useResult: jest.fn()
	}
})
describe('na pagina de sorteio', () => {
	const participants = [
		'Ana',
		'Rubens',
		'Rodolfo'
	]
	const result = new Map([
		['Ana', 'Rubens'],
		['Rubens', 'Rodolfo'],
		['Rodolfo', 'Ana']
	])

	beforeEach(() => {
		(useParticipantsList as jest.Mock).mockReturnValue(participants);
		(useResult as jest.Mock).mockReturnValue(result)
	})
	test('todos os participantes podem exibir o seu amigo secreto', () => {
		render(
			<RecoilRoot>
				<Draw />
			</RecoilRoot>)

		const opcoes = screen.queryAllByRole('option')
		expect(opcoes).toHaveLength(participants.length + 1)
	})

	test('o amigo secreto é exibido quando solicitado', () => {
		render(<RecoilRoot>
			<Draw />
		</RecoilRoot>)

		const select = screen.getByPlaceholderText('Seleciona o seu nome')
		fireEvent.change(select, {
			target: {
				value: participants[0]
			}
		})

		const botao = screen.getByRole('button')
		fireEvent.click(botao)

		const secretFriend = screen.getByRole('alert')
		expect(secretFriend).toBeInTheDocument()
	})

	test('nome do amigo selecionado deve sumir após cinco segundos', () => {
		jest.useFakeTimers();
		render(<RecoilRoot>
			<Draw />
		</RecoilRoot>)

		const select = screen.getByPlaceholderText('Seleciona o seu nome')
		fireEvent.change(select, {
			target: {
				value: participants[1]
			}
		})

		const botao = screen.getByRole('button')
		fireEvent.click(botao)

		const secretFriend = screen.getByRole('alert')
		expect(secretFriend).toBeInTheDocument()

		act(() => {
			jest.runAllTimers()
		})
		
		const alerta = screen.queryByRole('alert')
		expect(alerta).not.toBeInTheDocument()
	})
})