"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useLogin } from "@/libs/hooks/auth/login"
import Cookies from "js-cookie"

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const onLoginSuccess = (res: {
    data: {
      data: {
        accessToken: string,
        expiresAt: number
      }
    }
  }) => {
    Cookies.set("accessToken", res.data.data.accessToken)
    Cookies.set("expiresAt", res.data.data.expiresAt.toString(), { expires: new Date(res.data.data.expiresAt), sameSite: "strict" })
    setError("")
    router.push("/dashboard")
  }

  const onLoginError = (err: any) => {
    setError(err.message || "Unauthorized, Please Check your email and password")
  }

  const { mutate: getToken } = useLogin(onLoginSuccess, onLoginError)

  const SubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
    const payload = {
      email,
      password
    }
    getToken(payload)

  }

  return (
    <form onSubmit={(e) => { SubmitForm(e) }}>
      {!error ||
        <div className="border-2 border-red-500 p-2 bg-red-50">
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
