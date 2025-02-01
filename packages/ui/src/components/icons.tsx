import { AlignJustify, ChevronRight, Send, X } from 'lucide-react'
import React from 'react'

interface IconWrapperProps {
  className?: string
  children: React.ReactElement
}

const IconWrapper = ({ className, children }: IconWrapperProps) => {
  const child = React.cloneElement(children, { className })
  return child
}

const createIcon = (Icon: React.ReactElement) => {
  // eslint-disable-next-line react/display-name
  return ({ className }: { className?: string }) => <IconWrapper className={className}>{Icon}</IconWrapper>
}

const icons = {
  menu: createIcon(<AlignJustify />),
  rightArrow: createIcon(<ChevronRight />),
  send: createIcon(<Send />),
  close: createIcon(<X />)
}

export type CustomIconsName = keyof typeof icons

interface CustomIconsProps extends React.HTMLAttributes<HTMLDivElement> {
  name: CustomIconsName
  description?: string
  text?: string
  isBox?: boolean
  className?: string
  iconClassName?: string // 아이콘 자체의 className
}

export function CustomIcons({
  name,
  isBox = false,
  description,
  text,
  className,
  iconClassName = 'w-5 h-5', // 기본 크기 설정
  ...props
}: CustomIconsProps) {
  const IconComponent = icons[name]

  return (
    <div className={`${isBox && 'flex rounded-xl border border-border bg-background-primary'} group flex flex-col items-center ${className}`} {...props}>
      <div className={iconClassName}>
        <IconComponent className='w-full h-full' />
      </div>
      {text && <p className='text-center'>{text}</p>}
      {description && (
        <div className='invisible absolute left-full top-1/2 z-50 ml-2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white group-hover:visible'>
          {description}
        </div>
      )}
    </div>
  )
}
