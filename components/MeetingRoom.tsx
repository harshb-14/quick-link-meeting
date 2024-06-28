import { cn } from '../lib/utils';
import { CallControls, CallingState, CallParticipantsList, CallStatsButton, PaginatedGridLayout, SpeakerLayout, useCallStateHooks, } from '@stream-io/video-react-sdk';
import React, { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from '../components/ui/dropdown-menu';
import { LayoutList, Users } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import Loader from './Loader';
import Navbar from './Navbar';

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal');
  const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();
  const callState = useCallCallingState();
  const router = useRouter();
  
  useEffect(() => {
    if (callState !== CallingState.JOINED && callState !== CallingState.JOINING) {
      router.push('/');
    }
  }, [callState, router]);

  if (callState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout />;
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="h-screen overflow-hidden text-color-1 bg-color-1">
      <div className="text-black-1">
        <Navbar />
      </div>
      <div className="relative flex max-sm:flex max-sm:flex-col size-full items-center justify-center">
        <div className="flex h-full w-[1000px] items-center pl-12 pr-12">
          <CallLayout />
        </div>
        <div
          className={cn(
            'h-[calc(100vh-240px)] hidden rounded-xl text-[#ffffff79] bg-[#000000c3] m-10 p-8',
            { 'show-block': showParticipants }
          )}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>

      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap">
        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232D] px-4 py-2 hover:bg-[#19232deb]">
              <LayoutList size={20} className="text-white" />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className="bg-color-1 text-black-1">
            {['Grid', 'Speaker-Left', 'Speaker-Right'].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => {
                    setLayout(item.toLowerCase() as CallLayoutType);
                  }}
                >
                  {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator className="border-black-1" />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="relative">
          <CallStatsButton />
        </div>
        <button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className="cursor-pointer rounded-2xl bg-[#19232D] px-4 py-2 hover:bg-[#19232deb]">
            <Users size={20} className="text-white" />
          </div>
        </button>
        <CallControls />
        {!isPersonalRoom}
      </div>
    </section>
  );
};

export default MeetingRoom;
