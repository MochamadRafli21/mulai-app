"use client"

import { useState } from "react"
import { useLogin } from "@/libs/hooks/auth/login"


export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const loginMutate = useLogin()

  const SubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
    const payload = {
      email,
      password
    }
    loginMutate.mutate(payload)
    console.log(payload)
    setError("")
  }

  return (
    <form onSubmit={(e) => { SubmitForm(e) }}>
      {!error ||
        <div className="border-2 border-red-500 bg-red-50">
          {error && <p className="text-red-500">{error}</p>}
        </div>
      }
      <div className="flex flex-col gap-4 mt-4">
        <div className='flex flex-col gap-2'>
          <label htmlFor="emai">Email</label>
          <input
            type="text"
            name="email"
            required
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="contoh@domain.com"
            className="border border-gray-400 p-2 rounded"
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            placeholder="********"
            className="border border-gray-400 p-2 rounded"
          />
        </div>
        <button className="bg-orange-600 text-white p-2 rounded" type="submit"> Login </button>
      </div>
    </form>

  )
}
