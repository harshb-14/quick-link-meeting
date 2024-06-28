"use client";

import React, { useEffect, useState } from 'react'
import { DeviceSettings, StreamCall, StreamCallProvider, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import { Button } from './ui/button';
import Navbar from './Navbar';

const MeetingSetup = ({ setIsSetupComplete }: { setIsSetupComplete: (value: boolean) => void }) => {

    const call = useCall();

    if (!call) {
        throw new Error(
            'useStreamCall must be used within a StreamCall component.',
        );
    }

    const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false)

    useEffect(() => {
        if (isMicCamToggledOn) {
            call?.camera.disable();
            call?.microphone.disable();
        } else {
            call?.camera.enable();
            call?.microphone.enable()
        }
    }, [isMicCamToggledOn, call?.camera, call?.microphone])

    return (
        <><div className='text-black-1'><Navbar /></div>
            <div className="flex h-screen w-full flex-col items-center justify-center gap-3">
                <VideoPreview className='max-sm:max-w-[350px] max-sm:m-8 max-sm:max-h-[200px]'/>
                <div className="flex h-16 items-center justify-center gap-3 bg-[#00000034] pl-4 pr-4 rounded-xl border-[2px] border-black-1 max-sm:max-w-fit">
                    <label className="flex items-center justify-center gap-2 font-medium text-black-1 text-[14px]">
                        <input
                            type="checkbox"
                            checked={isMicCamToggledOn}
                            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
                            />
                        Join with Mic & Camera OFF
                    </label>
                    <div className='rounded-3xl text-color-1'>
                        <DeviceSettings />
                    </div>
                </div>
                <Button className="rounded-md bg-black-1 px-4 py-2.5 text-white mt-2" onClick={() => {
                    call.join();
                    setIsSetupComplete(true);
                }}>
                    Join meeting
                </Button>
                <StreamCallProvider>
                <StreamCall>
                    {!setIsSetupComplete ? (
                        <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
                    ) : (
                        <div className='text-[14px]'>Meeting is set up and ready to go!</div>
                    )}
                </StreamCall>
                </StreamCallProvider>
            </div>
        </>
    )
}

export default MeetingSetup
