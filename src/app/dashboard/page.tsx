'use client'
import Link from "next/link"
import { useEffect } from "react"
import { getOrders } from "@/libs/hooks"
import { OrderList } from "@/libs/types/order"

export default function Dashboard() {
  const { data: orders } = getOrders()

  useEffect(() => {
    console.log(orders)
  }, [orders])

  return (
    <main className="min-h-screen">
      <div className="bg-white border-b-gray-200 mb-8 h-full w-full min-h-[50px] md:min-h-[100px] p-4">
        <h1 className="text-orange-600 font-bold text-3xl">Dashboard</h1>
      </div>
      {
        orders && <div className="hidden md:block mt-2 p-4 overflow-x-auto">
          <div className={`grid grid-cols-${orders.data.data[0].length || '4'} text-gray-500 px-2 mb-4 font-semibold gap-4`}>
            <h3> Customer </h3>
            <h3> Follow Up </h3>
            <h3> Gross Revenue </h3>
            <h3> Discount </h3>
          </div>
          {orders.data.data.map((order: OrderList) => {
            return (
              <div key={order.id} className="grid bg-white grid-cols-4 items-center border-b-gray-200 h-full w-full min-h-[50px] md:min-h-[100px] p-4">
                <div>
                  <h1 className="text-orange-600 font-bold text-xl">{order.customer_name}</h1>
                  <span>{order.customer_phone}</span>
                </div>
                <Link href={`https://wa.me/${order.customer_phone}`}>
                  <div className="font-bold font-mono w-fit px-4 text-white bg-green-500 hover:bg-green-700 py-2 rounded-xl">
                    <h1>Follow Up</h1>
                  </div>
                </Link>

                <h3>{order.total_price}</h3>
                <h3>{order.discount}</h3>
              </div>
            )
          })
          }

        </div>
      }

      {
        orders && <div className="md:hidden mt-2 p-4 overflow-x-clip flex flex-col gap-2">
          {
            orders.data.data.map((order: OrderList) => {
              return (
                <div className="bg-white p-6 border-b border-gray-200  rounded shadow-2xl shadow-orange-100">
                  <div className="flex w-full justify-between">
                    <div className="max-w-[180px]">
                      <h1 className="text-xl font-semibold text-orange-600 ">{order.customer_name}</h1>
                      <h1 className="max-w-[100px] font-semibold text-gray-600 ">{order.customer_phone}</h1>
                    </div>
                    <Link href={`https://wa.me/${order.customer_phone}`}>
                      <div className="font-bold font-mono w-fit px-4 text-white bg-green-500 hover:bg-green-700 py-2 rounded-xl">
                        <h1>Follow Up</h1>
                      </div>
                    </Link>
                  </div>
                  <div className="flex w-full mt-4 justify-between font-semibold text-gray-600">
                    <h3>Gross Revenue :</h3>
                    <h3>{order.total_price}</h3>
                  </div>
                  <div className="flex w-full justify-between font-semibold text-gray-600">
                    <h3>Discount :</h3>
                    <h3>{order.discount}</h3>
                  </div>
                </div>
              )
            })
          }
        </div>
      }
    </main>
  )
}
