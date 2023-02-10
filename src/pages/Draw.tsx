import { useState } from "react"
import { useResult } from "../components/state/hook/useResult"
import { useParticipantsList } from "../components/state/hook/useParticipantsList"
import './Draw.css'

export const Draw = () => {
	const participants = useParticipantsList()
	const [participantOnTheTurn, setParticipantOnTheTurn] = useState('')
	const [secretFriend, setSecretFriend] = useState('')
	const result = useResult()

	const Drawn = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (result.has(participantOnTheTurn)) {
			setSecretFriend(result.get(participantOnTheTurn)!)
			setTimeout(() => {
				setSecretFriend('')
			}, 5000)
		}
	}

	return (
		<section className="sorteio">
			<h2>Quem vai tirar o papelzinho?</h2>
			<form onSubmit={Drawn}>
				<select
					required
					onChange={event => setParticipantOnTheTurn(event.target.value)}
					value={participantOnTheTurn}
					name="participanteDaVez"
					id="participanteDaVez"
					placeholder="Seleciona o seu nome">
					<option>Seleciona seu nome</option>
					{participants.map(participant => <option key={participant}>{participant}</option>)}
				</select>
				<p>Clique em em sortear para ver quem é seu amigo secreto!</p>
				<button className="botao-sortear">Sortear!</button>
			</form>
			{secretFriend && <p role="alert" className="resultado" >{secretFriend}</p>}
			<footer className="sorteio">
				<img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
			</footer>
		</section>
	)
}
export default Draw