import React from 'react';
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


function HomePage() {
  return (
    <div className="relative">
        {/* <div></div> */}
        <div className='absolute w-full h-20 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={true}
        showIndicators={true}
        showThumbs={true}
        interval={4000}>
            <div className='rounded-md'>
                <img loading='lazy' src='/images/a.png' alt='mee' className='rounded-none'></img>
            </div>

            <div>
            <img loading='lazy' src='/images/image2.png' alt='mee' className='rounded-md'></img>
            </div>

            <div>
            <img loading='lazy' src='/images/image3.png' alt='mee' className='rounded-md'></img>
            </div>

            <div>
            <img loading='lazy' src='/images/image4.png' alt='mee' className='rounded-md'></img>
            </div>

            <div>
            <img loading='lazy' src='/images/image5.png' alt='mee' className='rounded-md'></img>
            </div>

            <div>
            <img loading='lazy' src='/images/image6.png' alt='mee' className='rounded-md'></img>
            </div>

        </Carousel>
    </div>
  )
}

export default HomePage;