'use client'

import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'

import Button from '@/components/common/Button'
import InfoMsg from '@/components/common/InfoMsg'
import PageTitle from '@/components/common/PageTitle'
import TextField from '@/components/common/TextField'
import { signIn } from '@/services/api/users'
import { container } from '@/styles/app.css'
import { ISignInData } from '@/types/users'
import { isAxiosError } from '@/util'

import { buttonGroup, infoMsg, loginForm, loginInput } from './index.css'

type LoginInputName = 'email' | 'password'

interface ILoginInput {
  name: LoginInputName
  type: string
  placeholder: string
}

const defaultValues = {
  email: '',
  password: '',
}

const loginInputs: ILoginInput[] = [
  {
    name: 'email',
    type: 'text',
    placeholder: 'Email',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
]

export default function LoginForm() {
  const { push } = useRouter()
  const {
    handleSubmit,
    control,
    formState: { errors },
    setFocus,
    reset,
    setError,
  } = useForm<ISignInData>({
    defaultValues,
  })

  const onSubmit = handleSubmit(async data => {
    try {
      const userData = await signIn(data)
      if (userData) push('/')
    } catch (error) {
      if (isAxiosError(error)) {
        setFocus('email')
        reset()
        setError('password', {
          type: 'manual',
          message: 'email or password is invalid',
        })
      }
    }
  })

  return (
    <section className="mt-[24px]">
      <div className={container}>
        <PageTitle link={{ href: '/register', info: 'Need an account?' }}>
          Sign in
        </PageTitle>
        <form onSubmit={onSubmit} className={loginForm}>
          {loginInputs.map(input => (
            <Controller
              key={input.name}
              control={control}
              name={input.name}
              rules={{
                required: `${input.name} can't be blank`,
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type={input.type}
                  placeholder={input.placeholder}
                  className={loginInput}
                />
              )}
            />
          ))}
          {Boolean(Object.keys(errors).length) && (
            <InfoMsg className={infoMsg}>
              {errors.email
                ? errors.email.message
                : errors.password && errors.password.message}
            </InfoMsg>
          )}
          <div className={buttonGroup}>
            <Button type="submit">Sign in</Button>
          </div>
        </form>
      </div>
    </section>
  )
}
