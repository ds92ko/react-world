import { ISignInData } from '@/types/users'

import { apiInstance } from './api'

export const signIn = async (data: ISignInData) => {
  const res = await apiInstance.post('/users/login', { user: data })
  return res.data
}
