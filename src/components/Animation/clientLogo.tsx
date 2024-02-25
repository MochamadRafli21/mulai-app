"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ClientLogo({ imageSrc }: { imageSrc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 100 }}
      exit={{ opacity: 0, scale: 0.5, y: 100 }}
      transition={{ duration: 1.5 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className='flex justify-center'>
      <Image src={imageSrc} alt="Client Logo" width={100} height={100} />
    </motion.div>
  )
}
