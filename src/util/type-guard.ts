import { AxiosError } from 'axios'

export const isAxiosError = (error: unknown): error is AxiosError => {
  return error instanceof AxiosError
}

export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number'
}
