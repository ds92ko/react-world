'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'

import Button from '@/components/common/Button'
import InfoMsg from '@/components/common/InfoMsg'
import PageTitle from '@/components/common/PageTitle'
import TextField from '@/components/common/TextField'
import { signIn } from '@/services/api/users'
import useUserStore from '@/store/userStore'
import { container, form } from '@/styles/app.css'
import { ErrorResData, ISignInData } from '@/types/users'

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
  const { setUserData } = useUserStore()
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
      setUserData(userData)
      if (userData) push('/')
    } catch (error) {
      if (axios.isAxiosError<ErrorResData, unknown>(error)) {
        const errorData = error.response?.data
        if (!errorData) return

        const errorKey = Object.keys(errorData.errors)[0]
        const errorMsg = errorData?.errors[errorKey]

        const key = Object.keys(defaultValues).includes(errorKey)
          ? (errorKey as keyof ISignInData)
          : (errorKey.split(' ')[0] as keyof ISignInData)

        setFocus(key)
        reset()
        setError(key, {
          type: 'manual',
          message: `${errorKey} ${errorMsg}`,
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
        <form onSubmit={onSubmit} className={form}>
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
                  className="mb-[16px]"
                />
              )}
            />
          ))}
          {Boolean(Object.keys(errors).length) && (
            <InfoMsg className="mb-[16px]">
              {errors.email
                ? errors.email.message
                : errors.password && errors.password.message}
            </InfoMsg>
          )}
          <div className="text-right">
            <Button type="submit" theme="solid" size="lg">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
