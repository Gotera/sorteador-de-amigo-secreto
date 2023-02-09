import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, listParticipantsState } from "../atom"

export const useAddParticipant = () => {
	const setList = useSetRecoilState(listParticipantsState)
	const list = useRecoilValue(listParticipantsState)
	const setError= useSetRecoilState(errorState)

	return (nameOfPartipant: string) => {
		if (list.includes(nameOfPartipant)) {
			setError('Nomes duplicados não são permitidos!')
			setTimeout(() => {
				setError('')
			}, 5000)
			return
		}
		return setList(currentList => [...currentList, nameOfPartipant])
	}
}