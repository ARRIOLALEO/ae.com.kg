import React from 'react'
import {services} from '../components/data/services'
import Service from '../components/sevice'

export default function ServicesAndPrices() {
   const service = services.map(x => <Service index={x.type} data ={x}/>)
    return (
        <section className="section element-section">
          {service}
        </section>
    )
}
