import { useParticipantsList } from "./state/hook/useParticipantsList"

const ListParticipants = () => {
	const participants: string[] = useParticipantsList()
	return (
		<ul>
			{participants.map(praticipant => <li key={praticipant}>{praticipant}</li>)}
		</ul>
	)
}

export default ListParticipants