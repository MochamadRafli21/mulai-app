"use client"
import { createPortal } from 'react-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

import OrderForm from '@/components/Modal/OrderForm'
export default function OrderButton() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1, className: 'border-orange-600' }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        onClick={() => setIsVisible(true)} className='mt-4 font-semibold hover:bg-gradient-to-t bg-white border-2 border-orange-600 text-orange-600 hover:text-white hover:border-0 from-orange-600 to-orange-300 rounded w-fit px-8 py-2'>
        Siap Memulai Perjalanan Digital Kamu?
      </motion.button>
      {createPortal(
        <OrderForm
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />,
        document.body
      )}
    </>
  )
}
