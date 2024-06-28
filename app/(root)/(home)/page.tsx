import MeetingTypeList from '../../../components/MeetingTypeList';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="backdrop-blur-sm bg-[#778da9]/50 rounded-md py-2 text-center text-base font-normal text-white-1 max-md:px-4 max-md:text-justify">
            Connect, Collaborate, and Capture every moment with <b>quick.link</b> - ultimate video calling platform.
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-6xl">
              {time}
            </h1>
            <p className="text-lg font-normal text-sky-1 lg:text-2xl md:ml-1">
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
      <div className='flex justify-center text-black-1 font-light gap-2'>
        <b>Connect :</b>
        <Link className='flex justify-center' href={'https://www.linkedin.com/in/harsh3311/'} target="_blank">
          <Image src='/icons/github.svg' width={24} height={24} alt='github logo' />
        </Link>
        <Link className='flex justify-center' href={'https://www.github/harsh3311/'} target="_blank">
          <Image src='/icons/linkedin.svg' width={24} height={24} alt='linkedin logo' />
        </Link>
      </div>
    </section>
  )
}

export default Home