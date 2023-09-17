import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'

import { textField } from './index.css'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}
const TextField = forwardRef(
  ({ className, ...props }: IProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={`${className}`}>
        <input ref={ref} className={textField} {...props} />
      </div>
    )
  }
)

TextField.displayName = 'TextField'

export default TextField
