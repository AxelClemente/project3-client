import React from 'react'
import Search from '../Search/Search'

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
        <div className='flex flex-col lg:flex-row'>
            <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                <h1 className='primaryText'>
                    <span className='text-customPrimary'>Stroll</span> your way through the city
                </h1>
                <p className='max-w-[480px] mb-8 '>
                    Discover the city's hidden gems, secret spots, and local flavors at your own pace. Say goodbye to generic tours and hello to an authentic and immersive city experience."
                </p>
                <p className='max-w-[480px] mb-8'>
                    Also you can make the most of your trip with a <span className='text-customSecondary'>local insider</span>
                </p>
            </div>
            <div className='hidden flex-1 lg:flex justify-end items-end mr-14'>
            <img src="images/mainPic.png" alt="bannerImage" style={{marginTop: '-48px'}} />
            </div>
        </div>
        <Search/>
    </section>

  )
}

export default Banner
