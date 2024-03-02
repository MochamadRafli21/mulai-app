import { motion } from 'framer-motion'

import BackDrop from "./Backdrop"

export default function MliModal({
  isVisible,
  children,
  setIsVisible
}: {
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
  children: React.ReactNode
}) {

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
            {children}
          </motion.div>
          <BackDrop
            onClose={() => { setIsVisible(false) }}
            isVisible={isVisible}
          /></> : <></>

    }</>

  )
}
