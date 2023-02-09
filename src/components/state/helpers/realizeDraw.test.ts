import { realizeDraw } from './realizeDraw'

describe('dado um sorteio de amigo secreto', () => {
	test('cada participante não sorteie o prórpio nome', () => {
		const participants = [
			'Ana',
			'Rubens',
			'Rodolfo',
			'Alberto',
			'Maria',
			'Nathaly'
		]
		const draw = realizeDraw(participants)
		participants.forEach(participant => {
			const secretFriend = draw.get(participant)
			expect (secretFriend).not.toEqual(participant)
		})
	})
})