import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

import BackDrop from "./Backdrop"
import { useOrder } from '@/libs/hooks'

export default function OrderForm({
  isVisible,
  setIsVisible
}: {
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const router = useRouter()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")
  const orderMutation = useOrder()

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    orderMutation.mutate({ customer_name: name, customer_phone: phone, description })
    setIsVisible(false)
    router.push(`https://wa.me/6285159185563?text=Halo%20saya%20${name},Saya%20ingin%20diskusi%20tentang%20deskripsi%20dibawah%3A%0A%0A${encodeURI(description)}.`)
  }
  return (
    <>{
      isVisible ?
        <>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-white
            top-1/2
            left-1/2
            !-translate-x-1/2
            !-translate-y-1/2
            fixed z-[100] w-full mx-auto md:m-0 md:w-1/2 h-fit flex flex-col p-4 rounded">

            <div className="w-full">
              <Image src="/mulai.svg" alt="Mulai" width={120} height={70} />
              <h1 className='text-4xl font-semibold'>Selangkah lagi untuk memulai Perjalanan Digital Yang Lebih Baik.</h1>
            </div>

            <form onSubmit={(e) => { submitForm(e) }} className='flex flex-col gap-4 mt-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="name">Nama</label>
                <input
                  type="text"
                  name="name"
                  required
                  id="name"
                  placeholder="Mochamad Rafli"
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-400 p-2 rounded"
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="phone">No. Whatsapp</label>
                <input
                  type="phone"
                  required
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  placeholder="0851****662"
                  className="border border-gray-400 p-2 rounded"
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="desctiprion">Ceritakan masalah anda</label>
                <textarea
                  name="description"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  placeholder="Saya membutuhkan website untuk berjualan produk digital"
                  className="border border-gray-400 p-2 rounded h-24"
                />
              </div>
              <motion.button
                type="submit"
                className="font-bold w-full hover:bg-gradient-to-t bg-white border-2 border-orange-600 text-orange-600 hover:text-white hover:border-0 from-orange-600 to-orange-300 rounded px-8 py-2"
                whileHover={{ scale: 1.04, className: 'border-orange-600' }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                whileTap={{ scale: 0.8 }}
              >
                Mulai Sekarang
              </motion.button>
            </form>
          </motion.div>
          <BackDrop
            onClose={() => { setIsVisible(false) }}
            isVisible={isVisible}
          /></> : <></>

    }</>

  )
}
