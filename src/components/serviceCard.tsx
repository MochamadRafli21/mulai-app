import Image from 'next/image'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  imageSrc: string;
  titleText: string;
  descriptionText: string;
  isDisplay: boolean;
}

export default function ServiceCard({ imageSrc, titleText, descriptionText, isDisplay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 100 }}
      exit={{ opacity: 0, scale: 0.5, y: 100 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      className={
        isDisplay ?
          "w-full flex flex-col min-h-[312px] bg-gradient-to-r from-[#e44d26] to-[#f16529] max-w-[540px] backdrop-blur-xl rounded-xl text-white p-4 gap-2" :
          'hidden'}
    >
      <div className='flex items-center mb-2 gap-2'>
        <Image src={imageSrc} alt="Card Icon" width={76} height={76} />
        <h1 className='text-4xl font-bold'>{titleText}</h1>
      </div>
      <p className='text-justify text-2xl'>{descriptionText}</p>
    </motion.div>
  )
}
