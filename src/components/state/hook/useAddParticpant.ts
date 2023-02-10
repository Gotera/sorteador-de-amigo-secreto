import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, listParticipantsState } from "../../atom"

export const useAddParticipant = () => {
	const setList = useSetRecoilState(listParticipantsState)
	const list = useRecoilValue(listParticipantsState)
	const setError= useSetRecoilState(errorState)

	return (nameOfParticipant: string) => {
		if (list.includes(nameOfParticipant)) {
			setError('Nomes duplicados não são permitidos!')
			setTimeout(() => {
				setError('')
			}, 5000)
			return
		}
		return setList(currentList => [...currentList, nameOfParticipant])
	}
}