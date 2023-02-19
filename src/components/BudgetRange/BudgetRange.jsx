import React from 'react'
import { RiMoneyEuroCircleLine, RiArrowDropUpLine, RiArrowDropDownLine} from 'react-icons/ri';
import { useState } from 'react'

import { Menu } from '@headlessui/react'

const BudgetRange = () => {
const [isOpen, setIsOpen] = useState('false')

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiMoneyEuroCircleLine className='dropdown-icon-custom'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'>Budget</div>
          <div className='text-[13px]'>Price average </div>
        </div>
        {isOpen ? (
            <RiArrowDropUpLine className='dropdown-icon-custom' />
          ) : (
            <RiArrowDropDownLine className='dropdown-icon-custom' />
          )}
      </Menu.Button>
      
      <Menu.Items>

      </Menu.Items>
    </Menu>
  )
}

export default BudgetRange
