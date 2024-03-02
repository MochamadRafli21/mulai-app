import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { useService, editService } from '@/libs/hooks'
import { ServiceList } from '@/libs/types'

export default function ServiceForm({
  isVisible,
  setIsVisible,
  data,
  onSuccess,
  onError
}: {
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  data: ServiceList,
  onSuccess?: () => void,
  onError?: (error: any) => void
}) {
  const [name, setName] = useState(data.name || "")
  const [description, setDescription] = useState(data.description || "")
  const serviceMutation = useService()
  const edit = editService()

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (!data.id) {
      try {
        serviceMutation.mutate({ name: name, description })
      } catch (error) {
        if (onError) onError(error)
      }
    } else {
      try {
        edit.mutate({ id: data.id, payload: { name, description } })
      } catch (error) {
        if (onError) onError(error)
      }
    }
    setIsVisible(false)
    if (onSuccess) onSuccess()
  }

  useEffect(() => {
    if (data) {
      setName(data.name)
      setDescription(data.description)
    }
  }, [data])
  return (
    <>{
      isVisible ?
        <>
          <form onSubmit={(e) => { submitForm(e) }} className='flex flex-col gap-4 mt-4'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="name">Judul Jasa</label>
              <input
                type="text"
                name="name"
                required
                id="name"
                value={name}
                placeholder="Social Media Content"
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-400 p-2 rounded"
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="desctiprion">Deskripsi Jasa</label>
              <textarea
                name="description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                placeholder="Konten digital untuk kebutuhan social media "
                className="border border-gray-400 p-2 rounded h-24"
              />
            </div>
            <motion.button
              type="submit"
              className="font-bold w-full hover:bg-gradient-to-t bg-white border-2 border-orange-600 text-orange-600 hover:text-white hover:border-0 from-orange-600 to-orange-300 rounded px-8 py-2"
              whileHover={{ scale: 1.1, className: 'border-orange-600' }}
              whileTap={{ scale: 0.98 }}
            >
              Simpan
            </motion.button>
          </form>

        </> : <></>
    }</>

  )
}
