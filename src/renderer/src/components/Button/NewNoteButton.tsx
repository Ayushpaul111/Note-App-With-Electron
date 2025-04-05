import { createEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { LuSignature } from 'react-icons/lu'
import { ActionButton, ActionButtonProp } from './ActionButton'

export const NewNoteButton = ({ ...props }: ActionButtonProp) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreate = async () => {
    await createEmptyNote()
  }

  return (
    <ActionButton onClick={handleCreate} {...props}>
      <LuSignature className="w-4 h-4 text-white" />
    </ActionButton>
  )
}
