// heroicons
import icons from './icons'

interface IProps {
  name: keyof typeof icons
  type: 'outline' | 'solid'
  className?: string
}

export default function Icon({ name, type, className = '' }: IProps) {
  return <div className={className}>{icons[name][type]}</div>
}
