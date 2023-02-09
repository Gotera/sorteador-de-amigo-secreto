import { useSetRecoilState } from "recoil"
import { secretFriendResult } from "../../atom"
import { realizeDraw } from "../helpers/realizeDraw"
import { useParticipantsList } from "./useParticipantsList"

export const useDrawing = () => {
	const participants = useParticipantsList()
	const setResult = useSetRecoilState(secretFriendResult)

	return () => {
		const result = realizeDraw(participants)
		setResult(result)
	}
}