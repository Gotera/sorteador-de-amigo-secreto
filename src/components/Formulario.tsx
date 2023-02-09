import { useRef, useState } from "react"
import { useAddParticipant } from "./state/useAddParticpant"
import { useErrorMessage } from "./state/useErrorMessage"

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
			<input 
				ref={inputRef}
				value={name}
				onChange={event => setName(event.target.value)}	
				type="text" 
				placeholder="Insira os nomes dos participantes"
			/>
			{/* se eu NÃO tiver um nome o botão estara desabilitado */}
			<button disabled={!name}>Adicionar</button>
			{errorMessage && <p role="alert">{errorMessage}</p>}
	</form>)
}

export default Formulario