import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  if (!selectedNote) {
    return null
  }
  return (
    <div
      className={twMerge(
        'flex justify-center p-2 border-b border-gray-900 text-sm shadow-md bg-[#030511]/50 backdrop-blur-md',
        className
      )}
      {...props}
    >
      <span className="">{selectedNote.title}</span>
    </div>
  )
}
