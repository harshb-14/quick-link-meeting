import React, { ReactNode } from 'react'
import StreamVideoProvider from './../../providers/StreamClientProvider'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "link | Build Strong Connections Remotely",
    description: "Video Conferencing webapp",
    icons: {
        icon: ['/icons/favicon.ico'],
        apple: ['/icons/apple-touch-icon.png'],
        shortcut: ['/apple-touch-icon.png']
    }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    )
}

export default RootLayout