import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RoomsCard = ({ roomData, id }: any) => {
    return (
        <div className='rounded-[8px] overflow-hidden grid grid-cols-1 md:grid-cols-2'>
            <div className={`relative aspect-[4/3] w-full ${id % 2 === 0 ? "order-2" : "order-1"}`}>
                <Image
                    src={roomData.image}
                    alt="Nearby"
                    fill
                    className="w-full h-full object-cover"
                />
            </div>
            <div className={`flex flex-col flex-grow gap-5 px-10 justify-center bg-[#FCF9F2] ${id % 2 === 0 ? "order-1" : "order-2"}`}>
                <h1 className='text-[28px] playfair-display font-medium'>{roomData.name}</h1>
                <p className='text-[16px] text-normal'>{roomData.description}</p>
                <div className='py-3'>
                    <Link href={roomData.linkUrl} className='bg-primary px-5 py-3 rounded-[8px] text-bgLight font-medium'>{roomData.linkName}</Link>
                </div>
            </div>
        </div>
    )
}

export default RoomsCard