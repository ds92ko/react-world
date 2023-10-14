import { ReactNode } from 'react'

import Icon from '../Icon'
import { infoMsg } from './index.css'

interface IProps {
  children: ReactNode
  type?: 'danger' | 'warning' | 'success'
  className?: string
}

export default function InfoMsg({
  children,
  type = 'danger',
  className,
}: IProps) {
  return (
    <div className={`${infoMsg} ${type} ${className}`}>
      <Icon name="exclamationCircle" className="w-[24px]" />
      <p>{children}</p>
    </div>
  )
}
