import { useNavigate } from "react-router-dom"
import { useParticipantsList } from "./state/hook/useParticipantsList"

const Footer = () => {
	const participants = useParticipantsList()
	const navigate = useNavigate()

	const start = () => {
		navigate('/sorteio')
	}

	return (
		<footer
			className="rodape-configuracoes">
			<button
				className="botao"
				disabled={participants.length < 3}
				onClick={start}>Iniciar Brincadeira</button>
		</footer>
	)
}

export default Footer