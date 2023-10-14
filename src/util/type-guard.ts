import { AxiosError } from 'axios'

export const isAxiosError = <T>(error: unknown): error is AxiosError<T> => {
  return error instanceof AxiosError
}

export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number'
}
