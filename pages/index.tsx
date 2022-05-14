import { GetServerSidePropsContext } from 'next'
import { env } from 'process'
import React from 'react'
import { ServicesCard } from '../components/ServicesCard'
import { servicesData } from '../data/services/servicesData'
import { IServices } from '../interface/IServices'

function index({ endpoint }) {
  return (
    <div className="flex flex-col px-6 pt-1 ">
      <h6 className="my-3 text-base font-medium">
        I am currently pursuing B.E Degree(Final Year) in Computer Science
        Engineering from SSPM College of Engineering, Kankavali. I have 2+ years of experience in Web Development.
      </h6>
      <div
        className="flex-grow px-4 py-1 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem", paddingBottom: "3rem" }}
      >
        <h4 className="my-4 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <div className="grid gap-6 mb-4 md:grid-cols-2 ">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {servicesData.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark md:col-span-1 "
              key={service.title}
            >
              <ServicesCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  // const res = await fetch('http://localhost:3000/api/services/')
  // const data = await res.json()
  // console.log("data", data)
  return {
    props: { endpoint: process.env.VERCEL_URL }, // will be passed to the page component as props
  }
}

export default index