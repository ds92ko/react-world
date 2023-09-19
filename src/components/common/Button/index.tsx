import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react'

import { button } from './index.css'

type ButtonType = 'submit' | 'reset' | 'button'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  type?: ButtonType
  className?: string
}

const Button = forwardRef(
  (
    { children, type = 'button', className, ...props }: IProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={`${button} ${className}`}
        {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
