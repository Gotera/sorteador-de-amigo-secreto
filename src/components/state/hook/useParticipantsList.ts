import { useRecoilValue } from "recoil"
import { listParticipantsState } from "../../atom"

export const useParticipantsList = () => {
	return useRecoilValue(listParticipantsState)
}