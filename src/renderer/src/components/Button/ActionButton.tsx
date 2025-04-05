import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ActionButtonProp = ComponentProps<'button'>

export const ActionButton = ({ className, children, ...props }: ActionButtonProp) => {
  return (
    <button
      className={twMerge(
        'px-2 py-1 p-2 rounded-md text-sm font-medium text-gray-700 hover:bg-[#030511] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
