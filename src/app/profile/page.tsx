import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
export default function page() {
    return (
        <div className='py-36'>
            {/* Page container */}
            <div className='border mx-auto w-[70%] py-5 px-24 rounded-lg'>
                <div className='flex' >
                    {/* Main container */}
                    <div className='flex-shrink-0'>
                        <img className='w-40 h-40 rounded-full' src="https://images.wsj.net/im-580612/8SR" />
                    </div>

                    <div className='px-5 py-5'>
                        <span className='font-extrabold text-2xl tracking-tight'>Elon Musk</span>
                        <br />

                        <span className='mt-5' >

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quibusdam sed optio assumenda sint fugit reprehenderit illum fugiat corporis? Rerum voluptatum voluptates, autem sapiente recusandae corporis iste. Sit placeat provident enim fuga veniam.
                        </span>
                    </div>

                    <div className='pt-3 ' >
                        <Button
                        > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg> Edit</Button>

                    </div>

                </div>

                <div className='grid grid-cols-1 gap-6 py-10' >
                    <div className='border flex justify-around' >
                        <div>Twitter  LinkedIn Github</div>
                        <div>Member Since 2003</div>
                    </div>
                    <div className='border' >About Me</div>
                </div>
            </div>
        </div>
    )
}
