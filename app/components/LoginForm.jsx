'use client'

import { useRouter } from 'next/navigation'
import { login } from '../actions'
import { useState } from 'react'

export default function LoginForm() {
  const [error, setError] = useState('')
  const router = useRouter()
  async function onSubmit(e) {
    e.preventDefault()
    try {
      const formData = new FormData(e.currentTarget)
      const response = await login(formData)

      if (!!response.error) {
        console.log(response.error)
        setError(response.error.message)
      } else {
        router.push('/')
      }
    } catch (err) {
      console.log(err)
      setError('Check your Credentials')
    }
  }
  return (
    <form className="login-form" onSubmit={onSubmit}>
      <div>
        <label for="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button
        type="submit"
        className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">
        Login
      </button>
    </form>
  )
}
