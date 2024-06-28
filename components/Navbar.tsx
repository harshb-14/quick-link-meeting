"use client"
import Image from 'next/image'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const stopMediaStreams = () => {
  navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    .then(stream => {
      stream.getTracks().forEach(track => track.stop());
    })
    .catch(error => console.log('Error stopping media streams:', error));
};

const handleLogoClick = () => {
  stopMediaStreams();
  window.location.href = '/';
};

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-color-1 px-6 py-4 lg:px-10 border-b-2'>
      <div onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
        <Image
          src="/icons/logo.png"
          width={34}
          height={34}
          alt="link Logo"
          className='max-sm: size-7'
        />
        <p className='text-[16px] font-regular text-black'>
          <span className='text-[26px] font-regular text-black'>quick</span>.link
        </p>
      </div>
      <div className="flex-between gap-5">
        {/* Clerk - User Management */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
