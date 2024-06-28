"use client"

import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger, } from "../components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from './../constants'
import { cn } from '../lib/utils'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger asChild>
                        <Image
                            src="/icons/menu.png"
                            width={36}
                            height={36}
                            alt="hamburger icon"
                            className="cursor-pointer sm:hidden"
                        />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-color-1">
                    <Link href="/" className="flex items-center gap-2 ml-4">
                        <Image
                            src="/icons/logo.png"
                            width={32}
                            height={32}
                            alt="link Logo"
                            className='max-sm:size-6'
                        />
                        <p className='text-[16px] font-regular text-black'>
                            <span className='text-[26px] font-regular text-black'>quick</span>.link
                        </p>
                    </Link>

                    <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
                        <SheetClose asChild>
                            <section className='flex h-full flex-col gap-6 pt-16 text-black'>
                                {sidebarLinks.map((link) => {
                                    const isActive = pathname === link.route;

                                    return (
                                        <SheetClose asChild key={link.route}>
                                            <Link
                                                href={link.route}
                                                key={link.label}
                                                className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60 text-white', {
                                                    'bg-black-1 text-white': isActive,
                                                    'text-[#000000]': !isActive,
                                                })}
                                            >
                                                <Image
                                                    src={link.imgUrl}
                                                    alt={link.label}
                                                    width={26}
                                                    height={26}
                                                />
                                                <p className="font-semibold">
                                                    {link.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNav