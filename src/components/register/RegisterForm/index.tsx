'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'

import Button from '@/components/common/Button'
import InfoMsg from '@/components/common/InfoMsg'
import PageTitle from '@/components/common/PageTitle'
import TextField from '@/components/common/TextField'
import { signUp } from '@/services/api/users'
import useUserStore from '@/store/userStore'
import { container, form } from '@/styles/app.css'
import { ErrorResData, ISignUpData } from '@/types/users'

type RegisterInputName = 'username' | 'email' | 'password'

interface IRegisterInput {
  name: RegisterInputName
  type: string
  placeholder: string
}

const defaultValues = {
  username: '',
  email: '',
  password: '',
}

const registerInputs: IRegisterInput[] = [
  {
    name: 'username',
    type: 'text',
    placeholder: 'Username',
  },
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

export default function RegisterForm() {
  const { push } = useRouter()
  const { setUserData } = useUserStore()
  const {
    handleSubmit,
    control,
    formState: { errors },
    setFocus,
    setError,
  } = useForm<ISignUpData>({
    defaultValues,
  })

  const onSubmit = handleSubmit(async data => {
    try {
      const userData = await signUp(data)
      setUserData(userData)
      if (userData) push('/')
    } catch (error) {
      if (axios.isAxiosError<ErrorResData, any>(error)) {
        const errorData = error.response?.data
        if (!errorData) return

        const errorKey = Object.keys(errorData.errors)[0]
        const errorMsg = errorData?.errors[errorKey]

        const key = Object.keys(defaultValues).includes(errorKey)
          ? (errorKey as keyof ISignUpData)
          : (errorKey.split(' ')[0] as keyof ISignUpData)

        setFocus(key)
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
        <PageTitle link={{ href: '/login', info: 'Have an account?' }}>
          Sign up
        </PageTitle>
        <form onSubmit={onSubmit} className={form}>
          {registerInputs.map(input => (
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
              {errors.username
                ? errors.username.message
                : errors.email
                ? errors.email.message
                : errors.password && errors.password.message}
            </InfoMsg>
          )}
          <div className="text-right">
            <Button type="submit" theme="solid" size="lg">
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
