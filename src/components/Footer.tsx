import { useNavigate } from "react-router-dom"
import { useDrawing } from "./state/hook/useDrawing"
import { useParticipantsList } from "./state/hook/useParticipantsList"

const Footer = () => {
	const participants = useParticipantsList()
	const navigate = useNavigate()
	const draw = useDrawing()

	const start = () => {
		draw()
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