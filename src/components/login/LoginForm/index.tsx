'use client'

import { Controller, useForm } from 'react-hook-form'

import InfoMsg from '@/components/common/InfoMsg'
import PageTitle from '@/components/common/PageTitle'
import TextField from '@/components/common/TextField'
import { signIn } from '@/services/api/users'
import { container } from '@/styles/app.css'
import { ISignInData } from '@/types/users'
import { isAxiosError } from '@/util'

const defaultValues = {
  email: '',
  password: '',
}

export default function LoginForm() {
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
      console.log(userData)
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
        <form onSubmit={onSubmit}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: `email can't be blank`,
            }}
            render={({ field }) => (
              <TextField {...field} type="text" placeholder="Email" />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              required: `password can't be blank`,
            }}
            render={({ field }) => (
              <TextField {...field} type="password" placeholder="Password" />
            )}
          />
          {Boolean(Object.keys(errors).length) && (
            <InfoMsg>
              {errors.email
                ? errors.email.message
                : errors.password && errors.password.message}
            </InfoMsg>
          )}
          <button type="submit">Sign in</button>
        </form>
      </div>
    </section>
  )
}
