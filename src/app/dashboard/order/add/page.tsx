'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

import { useOrder } from '@/libs/hooks'
import MliSelect from '@/components/Select'
import { TaskStatus } from '@/libs/types'
import { thousandSeparator, nonNumberFilter } from '@/libs/utils'

export default function Dashboard() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [phone, setPhone] = useState("")
  const [discount, setDiscount] = useState(0)
  const [tasks, setTasks] = useState([{
    temp_id: 1,
    title: "",
    description: "",
    price: 0,
    handlerId: "",
    serviceId: "",
    status: TaskStatus.pending
  }])
  const [description, setDescription] = useState("")
  const orderMutation = useOrder()

  const dummyService = [
    {
      id: "1",
      name: "Service 1"
    },
    {
      id: "2",
      name: "Service 2"
    },
    {
      id: "3",
      name: "Service 3"
    }
  ]

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    // handle error
    if (!name || !title || !phone || !description) return
    const final_task = tasks.map((task) => {
      return {
        title: task.title,
        description: task.description,
        price: task.price,
        handlerId: task.handlerId,
        serviceId: task.serviceId,
        is_active: true,
        status: TaskStatus.pending
      }
    })

    orderMutation.mutate(
      {
        title: title,
        customer_name: name,
        customer_phone: phone,
        description,
        task: final_task
      })
    router.push(`/dashboard`)
  }

  return (
    <main>
      <div className='w-full flex flex-col items-center'>
        <div className="bg-white border-b-gray-200 mb-8 h-full w-full md:w-1/2 min-h-screen p-4">
          <form className='flex flex-col gap-2 mt-4'>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold' htmlFor="title">Judul Pesanan</label>
              <input
                type="title"
                name="title"
                id="title"
                placeholder="Content 30 Post Cafe Mulai"
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-400 p-2 rounded"
              />
            </div>

            <h2 className='font-semibold mt-4'>Informasi Customer</h2>
            <div className='grid grid-cols-2 gap-2'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="name">Nama</label>
                <input
                  type="text"
                  name="name"
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
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  placeholder="0851****662"
                  className="border border-gray-400 p-2 rounded"
                />
              </div>
            </div>
            <div id="task-list" className='mt-4 bg-gray-50 p-4 rounded'>
              <h2 className='font-semibold'>Rincian Jasa</h2>
              {tasks.map((task) => {
                return (
                  <div className='mt-4' id={"task-item-" + task.temp_id.toString()} key={task.temp_id}>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="name">Judul Tugas</label>
                      <input
                        type="text"
                        name="task-name"
                        id="task-item-1-name"
                        value={task.title}
                        placeholder="30x Instagram Post"
                        onChange={(e) => {
                          const newTasks = [...tasks]
                          newTasks[task.temp_id - 1].title = e.target.value
                          setTasks(newTasks)
                        }}
                        className="border border-gray-400 p-2 rounded"
                      />
                    </div>
                    <div className='flex mt-2 flex-col gap-2'>
                      <label htmlFor="name">Assign To:</label>
                      <MliSelect
                        defaultValue={dummyService[0].name}
                        options={dummyService.map((service) => { return { key: service.id.toString(), value: service.name } })}
                        changeHandler={(selectedId) => {
                          const newTasks = [...tasks]
                          newTasks[task.temp_id - 1].serviceId = selectedId
                          setTasks(newTasks)
                        }}
                      />
                    </div>
                    <div className='grid grid-cols-2 gap-2 mt-3'>
                      <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Harga Jasa</label>
                        <input
                          type="text"
                          name="task-name"
                          id="task-item-1-name"
                          value={thousandSeparator(task.price)}
                          placeholder="30.000"
                          onChange={(e) => {
                            let price = 0
                            if (e.target.value !== "") {
                              price = parseInt(nonNumberFilter(e.target.value))
                            } const newTasks = [...tasks]
                            newTasks[task.temp_id - 1].price = price
                            setTasks(newTasks)
                          }}
                          className="border border-gray-400 p-2 rounded"
                        />
                      </div>
                      <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Tipe Jasa</label>
                        <MliSelect
                          defaultValue={dummyService[0].name}
                          options={dummyService.map((service) => { return { key: service.id.toString(), value: service.name } })}
                          changeHandler={(selectedId) => {
                            const newTasks = [...tasks]
                            newTasks[task.temp_id - 1].serviceId = selectedId
                            setTasks(newTasks)
                          }}
                        />
                      </div>
                    </div>

                    <div className='flex flex-col gap-2 mt-2'>
                      <label htmlFor="desctiprion">Deskripsi Jasa</label>
                      <textarea
                        name="description"
                        onChange={(e) => {
                          const newTasks = [...tasks]
                          newTasks[task.temp_id - 1].description = e.target.value
                          setTasks(newTasks)
                        }}
                        id="description"
                        placeholder="Saya membutuhkan website untuk berjualan produk digital"
                        className="border border-gray-400 p-2 rounded h-24"
                      />
                      <button
                        onClick={() => {
                          // Set error
                          if (tasks.length <= 1) return

                          const newTasks = [...tasks]
                          newTasks.splice(task.temp_id - 1, 1)
                          setTasks(newTasks)
                        }}
                        hidden={tasks.length <= 1}
                        className="bg-red-600 text-white p-2 rounded w-">Hapus</button>
                    </div>
                  </div>)
              })}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setTasks([...tasks, {
                    temp_id: tasks.length + 1,
                    title: "",
                    description: "",
                    price: 0,
                    handlerId: "",
                    serviceId: "",
                    status: TaskStatus.pending
                  }])
                }}
                className="mt-3 font-bold w-full hover:bg-gradient-to-t bg-white border-2 border-orange-600 text-orange-600 hover:text-white hover:border-0 from-orange-600 to-orange-300 rounded px-8 py-2"
              >
                Tambah Jasa +
              </button>

            </div>

            <div className='flex flex-col gap-2 mt-2 bg-gray-50 p-4'>
              <h2 className='font-semibold'>Rincian Pesanan</h2>
              {tasks.map((task) => {
                return (
                  <div key={task.temp_id} className='w-full justify-between flex px-4'>
                    <h1>{task.title}</h1>
                    <h1>{task.price ? "Rp. " + thousandSeparator(task.price) : ""}</h1>
                  </div>
                )
              })}
              <div className='font-bold w-full bg-gray-100 p-4 items-end'>
                <div className='flex flex-row justify-between '>
                  <label>Diskon </label>
                  <input
                    type="text"
                    name="task-name"
                    id="task-item-1-name"
                    value={discount ? thousandSeparator(discount) : ''}
                    placeholder="30.000"
                    onChange={(e) => {
                      let price = 0
                      if (e.target.value !== "") {
                        price = parseInt(nonNumberFilter(e.target.value))
                      }
                      setDiscount(price)
                    }}
                    className="border w-24 border-gray-400 px-2 rounded items-end"
                  />

                </div>
                <div className='flex flex-row justify-between'>
                  <h1>Total: </h1>
                  <h1>{"Rp. " + thousandSeparator(tasks.reduce((a, b) => a + b.price - discount, 0))}</h1>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-2 mt-2'>
              <label className='font-semibold' htmlFor="desctiprion">Notes</label>
              <textarea
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                placeholder="Saya membutuhkan website untuk berjualan produk digital"
                className="border border-gray-400 p-2 rounded h-24"
              />
            </div>

            <motion.button
              type="submit"
              className="font-bold w-full hover:bg-gradient-to-t bg-white border-2 border-orange-600 text-orange-600 hover:text-white hover:border-0 from-orange-600 to-orange-300 rounded px-8 py-2"
              whileHover={{ scale: 0.99, className: 'border-orange-600' }}
              transition={{ type: 'spring', stiffness: 100 }}
              onClick={(e) => { submitForm(e) }}
            >
              Buat Pesanan Baru
            </motion.button>
          </form>

        </div>
      </div>
    </main>
  )
}
