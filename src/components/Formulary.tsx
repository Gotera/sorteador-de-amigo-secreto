import { useRef, useState } from "react"
import { useAddParticipant } from "./state/hook/useAddParticpant"
import { useErrorMessage } from "./state/hook/useErrorMessage"
import './Form.css'

const Formulario = () => {

	const [name, setName] = useState('')
	const inputRef = useRef<HTMLInputElement>(null)
	const addParticipantOnList = useAddParticipant()
	const errorMessage = useErrorMessage()

	const addParticpant = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addParticipantOnList(name)
		setName('')
		inputRef.current?.focus()
	}

	return (
	<form onSubmit={addParticpant}>
		<div className="grupo-input-btn">
			<input 
				ref={inputRef}
				value={name}
				onChange={event => setName(event.target.value)}	
				type="text" 
				placeholder="Insira os nomes dos participantes"
			/>
			{/* se eu NÃO tiver um nome o botão estara desabilitado */}
			<button disabled={!name}>Adicionar</button>
		</div>
			{errorMessage && <p className="alerta erro" role="alert">{errorMessage}</p>}
	</form>)
}

export default Formulario