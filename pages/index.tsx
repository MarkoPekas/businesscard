import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col md:flex-row h-screen'>
      <div className='flex-1 flex flex-col justify-center items-center bg-center bg-cover' style={{backgroundImage: 'url(/bg.jpg)'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" strokeWidth="1" stroke="#bf9565" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 21v-13l9 -4l9 4v13" />
          <path d="M13 13h4v8h-10v-6h6" />
          <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
        </svg>
        <p className='text-2xl md:text-4xl font-semibold pt-10 pb-5 tracking-widest' style={{color: '#7e664a', letterSpacing: '0.2em'}}>OKANAGAN GLAMPING</p>
        <p className='text-lg md:text-xl font-medium tracking-widest' style={{color: '#bf9565'}}>CO</p>
      </div>
      <div className='flex-1 flex flex-col justify-center items-center'>
        <p className='text-lg md:text-xl font-medium tracking-widest' style={{color: '#bf9565', letterSpacing: '0.3em'}}>Opening Sumer 2022</p>
        <div className='px-5 md:px-40 text-justify'>
          <p className='text-base md:text-lg font-serif pt-10 pb-5 opacity-90' style={{color: '#7e664a'}}>Furnished nightly yurt and canvas tent glamping set on a forested hillside overlooking Okanaga Lake. This off grid luxury camping getaway is only 45 minutes from West Kelowna.</p>
        </div>
        <p className='text-sm md:text-base font-medium text-center tracking-widest' style={{color: '#bf9565', letterSpacing: '0.3em'}}>10377 Westside Road<br />Okanaga BC</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" className='mt-10' viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7e664a" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>
      </div>

    </div>
  )
}

export default Home
