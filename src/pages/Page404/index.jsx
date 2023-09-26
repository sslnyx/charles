import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import MainBtn from '../../components/MainBtn'

const Page404 = () => {
  return (
    <>
      <Helmet title='404 Not Found' />
      <div className='container min-h-[600px] py-[50px] h-full flex-1 flex justify-center items-center'>
        <div className='text-center '>
          <h1 className='mb-10'>404 - Page not found</h1>

          <MainBtn to="/" >Back to Home</MainBtn>
        </div>

      </div>
    </>
  )
}

export default Page404