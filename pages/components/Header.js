import Image from 'next/image'
import React from 'react'
import {MenuIcon, SearchIcon, ShoppingCartIcon,MessageIcon} from "@heroicons/react/outline"
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Header() {
    const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;
  return (
    <header>

        {/* Top Nav */}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='mt-0 mr-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image src='/images/Teleport.png' alt='' width={150} height={50} style={{objectFit:"cover"}} className='cursor-pointer rounded-md bg-white' />
            </div>
            
        <div className='text-red-50 items-center text-xs font-bold flex space-x-6 mx-6 whitespace-nowrap'>
            

            <div className=' link cursor-pointer'>
                <p className='hover:underline'> Hello ... </p>
                <p className='font-extrabold md:text-sm'>Account & Lists</p>

            </div>
            

            <div className='link cursor-pointer'>
                <p>Meetings</p>
                <p className='font-extrabold md:text-sm'>& Reminders</p>

            </div>

            <div className='relative link flex items-center'>
                <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-red-600 text-center rounded-full text-red-50 font-bold'>4

                </span>
                <MenuIcon className='h-10'/>
                <p className='hidden sm:inline font-extrabold mt-2 md:text-sm'>Messages</p>
            </div>


        </div>



        </div>

        

        {/* Bottom Nav */}

        <div className='flex items-center space-x-3 p-2 bg-gray-800 text-white text-sm'>
            <p className='link flex items-center' >
                <MenuIcon className='h-6 mr-1'/>
                All
            </p>
            <p className='link'>Prime Video</p>
            <p className='link'>About Us</p>
            

            <p className='link hidden lg:inline-flex'>Who</p>
            <p className='link hidden lg:inline-flex'>Why</p>
            <p className='link hidden lg:inline-flex'>What</p>
            <p className='link hidden lg:inline-flex'>When</p>
            <p className='link hidden lg:inline-flex'>Where</p>
        


        </div>
    </header>
  )
}

export default Header