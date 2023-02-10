import { useRecoilValue } from "recoil"
import { secretFriendResult } from "../../atom"

export const useResult = () => {
	return useRecoilValue(secretFriendResult)
}