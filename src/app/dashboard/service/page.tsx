'use client'
import { useState } from "react"


import { getServices, deleteService } from "@/libs/hooks"
import { ServiceList } from "@/libs/types"

import MliModal from "@/components/Modal/MliModal"
import ServiceForm from "@/components/Forms/ServiceForm"

export default function ServicePage() {
  const { data: services } = getServices()
  const { mutate: deleteMutate } = deleteService()
  const [selectedData, setSelectedData] = useState({} as ServiceList)
  const [showModal, setShowModal] = useState(false)

  return (
    <main className="min-h-screen">
      <div className="bg-white bservice-b-gray-200 mb-8 h-full w-full min-h-[50px] md:min-h-[100px] p-4">
        <h1 className="text-orange-600 font-semibold text-3xl">Service</h1>

        <button
          onClick={() => {
            setSelectedData({} as ServiceList)
            setShowModal(true)
          }}
          className="font-semibold hover:bg-gradient-to-t mt-4 bg-white bservice border-gray-400 text-orange-600 hover:text-white hover:border-0 from-orange-600 to-orange-300 rounded px-4 py-2">
          Tambah Service
        </button>
      </div>
      {
        services && <div className="flex flex-wrap gap-2 mt-2 p-4 overflow-x-auto">
          {services.data.data.map((service: ServiceList) => {
            return (
              <div key={service.id} className="bg-white grid-cols-4 items-center border-b-gray-200 w-[300px] min-h-[50px] md:min-h-[100px] p-4">
                <div>
                  <div className="flex flex-row justify-between">
                    <h1 onClick={() => {
                      setSelectedData(service)
                      setShowModal(true)
                    }} className="cursor-pointer hover:text-orange-600 font-semibold text-xl">{service.name}</h1>
                    <span onClick={() => {
                      deleteMutate(service.id)
                    }} className="text-red-600 hover:text-red-900 cursor-pointer text-xl font-semibold">x</span>
                  </div>
                  <span className="mt-2">{service.description}</span>
                </div>
              </div>
            )
          })
          }

        </div>
      }

      <MliModal
        isVisible={showModal}
        setIsVisible={setShowModal}
      >
        <ServiceForm
          data={selectedData}
          isVisible={showModal}
          setIsVisible={setShowModal}
        />
      </MliModal>
    </main>
  )
}
