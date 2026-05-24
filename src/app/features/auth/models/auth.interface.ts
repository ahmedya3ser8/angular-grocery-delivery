export interface User {
  _id: string,
  name: string,
  email: string,
  role: 'user' | 'admin',
  isActive: boolean,
}

export interface SignupForm {
  name: string,
  email: string,
  password: string,
}

export interface SigninForm {
  email: string,
  password: string,
}
