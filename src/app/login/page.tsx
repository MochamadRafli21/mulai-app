"use client"

import Link from 'next/link'
import LoginForm from '@/components/Forms/LoginForm'

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-gradient-to-tl from-[#e44d26] to-[#f16529]">
      <div className="z-10 p-8 font-mono text-sm bg-white h-full min-h-screen w-full lg:w-[45%]">
        <Link className='text-orange-600' href='/'>Kembali Ke Dashboard</Link>
        <h1 className='text-3xl mb-24 font-semibold md:text-5xl mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#e44d26] to-[#f16529]'>Siap Melanjutkan Kembali Langkah Mu?</h1>
        <LoginForm />
      </div>
    </main>
  )
}
