export interface ISignInData {
  email: string
  password: string
}

export interface ISignUpData {
  username: string
  email: string
  password: string
}

export interface ErrorResData {
  errors: { [key: string]: string[] }
}

export interface IUserData {
  email: string
  token: string
  username: string
  bio: string
  image: string
}
