import Image from 'next/image'

const Loader = () => {
    return (
        <div className="flex-center h-screen w-full">
            <div className='flex flex-col items-center gap-2'>
                <Image
                    src="/icons/loading-circle.gif"
                    alt="Loading"
                    width={40}
                    height={40}
                />
                <h3 className='font-semibold text-xl'>
                    Getting ready...
                </h3>
                {/* <p className="font-regular text-[16px]">You will be redirected automatically.</p> */}
                <p className="font-regular text-[16px]">You'll be able to join in just a moment</p>
            </div>
        </div>
    )
}

export default Loader
