import React from 'react'
import City from '../City/City'
import BudgetRange from '../BudgetRange/BudgetRange'
import Guide from '../Guide/Guide'
import { RiSearch2Line } from 'react-icons/ri';

const Search = () => {
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <City/>
      <BudgetRange/>
      <Guide/>
      <button className='bg-customPrimary hover:bg-customSecondary transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>
        <RiSearch2Line/>
      </button>
    </div>
  )
}

export default Search;
