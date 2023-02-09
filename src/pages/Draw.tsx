import { useParticipantsList } from "../components/state/hook/useParticipantsList"

export const Draw = () => {
	const participants = useParticipantsList()
	return(
		<section>
			<form>
				<select name="participanteDaVez" id="participanteDaVez">
					{participants.map(participant => <option key={participant}>{participant}</option>)}
				</select>
			</form>
		</section>
	)
}
export default Draw