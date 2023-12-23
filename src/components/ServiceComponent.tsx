"use client"
import { useState } from 'react'

import ServiceCard from "./serviceCard"

export default function ServiceComponent() {
  const [selectedMenu, setSelectedMenu] = useState(0)
  return (
    <div className='flex flex-col md:flex-row md:w-4/5 md:gap-4 p-4 mx-auto justify-center'>
      <div className="flex flex-col gap-4 md:pl-4 md:mr-4 break-word">
        <button onClick={() => setSelectedMenu(0)}
          className={selectedMenu === 0 ?
            "text-start font-semibold text-4xl text-orange-600 hover:text-orange-600 focus:text-orange-600" :
            "text-start font-semibold text-4xl text-gray-400 hover:text-orange-600 focus:text-orange-600"}>
          Website
        </button>
        <button onClick={() => setSelectedMenu(1)}
          className={selectedMenu === 1 ?
            "text-start font-semibold text-4xl text-orange-600 hover:text-orange-600 focus:text-orange-600" :
            "text-start font-semibold text-4xl text-gray-400 hover:text-orange-600 focus:text-orange-600"}>
          Social Media Content
        </button>
        <button onClick={() => setSelectedMenu(2)}
          className={selectedMenu === 2 ?
            "text-start font-semibold text-4xl text-orange-600 hover:text-orange-600 focus:text-orange-600" :
            "text-start font-semibold text-4xl text-gray-400 hover:text-orange-600 focus:text-orange-600"}>
          Product Packaging Design
        </button>
      </div>


      <div className="col-span-2 mt-8 md:mt-0">
        <ServiceCard
          isDisplay={selectedMenu === 0}
          titleText='Website'
          imageSrc="/globe-wire.svg"
          descriptionText='Jasa custom website dari mulai landing page, hingga website company profile, kami sanggup mengerjakannya'
        />

        <ServiceCard
          isDisplay={selectedMenu === 1}
          titleText='Social Media Content'
          imageSrc="/camera.svg"
          descriptionText='Kami menciptakan konten media sosial yang menarik dan efektif untuk membangun kehadiran online yang kuat.'
        />

        <ServiceCard
          isDisplay={selectedMenu === 2}
          titleText='Product Packaging Design'
          imageSrc="/forward.svg"
          descriptionText='Kami Memahami betapa pentingnya kemasan produk dalam mempengaruhi persepsi konsumen. Oleh karena itu, kami akan bekerja sama dengan Anda untuk menghasilkan desain kemasan yang sesuai dengan merek Anda dan menonjol di rak toko.'
        />
      </div>

    </div>
  )
}
