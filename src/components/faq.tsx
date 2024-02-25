"use client"
import { useState } from 'react'

interface FaqProps {
  question: string;
  answer: React.ReactNode;
}

export default function Faq({ question, answer }: FaqProps) {
  const [reveal, setReveal] = useState(true)
  return (
    <div onClick={() => setReveal(!reveal)} className='rounded-xl border-2 border-[#E25E3E] p-4'>
      <h1 className='text-2xl text-gray-600 hover:text-orange-600 focus:text-orange-600 cursor-pointer font-semibold pb-2'>Q : {question}</h1>
      <p className={!reveal ? 'h-0 transition-transform opacity-0 duration-300 ease-in translate-y--4' : 'opacity-100 transition-opacity duration-300 ease-in'}>
        {answer}
      </p>
    </div>
  )
}
