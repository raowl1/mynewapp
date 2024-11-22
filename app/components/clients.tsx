'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import kunal from '../images/1.svg'
const clients = Array(10).fill('/placeholder.svg?height=100&width=200&text=Client+Logo')

export default function Clients() {
  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={kunal}
                alt={`Client ${index + 1}`}
                width={200}
                height={100}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

