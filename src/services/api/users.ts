import { ISignInData, ISignUpData } from '@/types/users'

import { apiInstance } from './api'

export const signIn = async (data: ISignInData) => {
  const res = await apiInstance.post('/users/login', { user: data })
  return res.data.user
}

export const signUp = async (data: ISignUpData) => {
  const res = await apiInstance.post('/users', { user: data })
  return res.data.user
}
