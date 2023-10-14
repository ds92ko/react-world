// heroicons
import icons from './icons'

interface IProps {
  name: keyof typeof icons
  type?: 'outline' | 'solid'
  className?: string
}

export default function Icon({
  name,
  type = 'outline',
  className = '',
}: IProps) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={type === 'outline' ? 'none' : 'currentColor'}
        viewBox="0 0 24 24"
        {...(type === 'outline' && {
          stroke: 'currentColor',
          strokeWidth: 1.5,
        })}
        className="w-full h-full">
        <path
          d={icons[name][type]}
          {...(type === 'outline'
            ? {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }
            : {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
              })}
        />
      </svg>
    </div>
  )
}
