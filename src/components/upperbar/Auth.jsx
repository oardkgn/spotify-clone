import React from 'react'
import {FaRegUser} from "react-icons/fa";
import { Menu } from '@headlessui/react'
import { Icon } from '../../assets/icons';
import { NavLink } from "react-router-dom";

function Auth({setIsLogin}) {
  return (

    <Menu as="nav" className="relative -mb-1 ">
      <Menu.Button className="hover:scale-110 transition-all"><FaRegUser className='p-2 text-[33px] bg-black rounded-full'/></Menu.Button>
      <Menu.Items className="absolute text-[0.9rem] font-medium top-[110%] right-0 w-52 p-1 bg-[#282828] rounded shadow shadow-black flex flex-col">
        <Menu.Item  className="py-[0.6rem] px-3 rounded">
          {({ active }) => (
            <a
              className={`${active && 'bg-[#3E3E3E]'} flex justify-between  items-center`}
              href="/account-settings"
            >
              Account
              <Icon name="external"  size={18} />
            </a>
          )}
        </Menu.Item>
        <Menu.Item className="py-[0.6rem] px-3 rounded">
          {({ active }) => (
            <a
              className={`${active && 'bg-[#3E3E3E]'}`}
              href="/account-settings"
            >
              Profile
            </a>
          )}
        </Menu.Item>
        <Menu.Item className="py-[0.6rem] px-3 rounded">
          {({ active }) => (
            <a
              className={`${active && 'bg-[#3E3E3E]'} flex justify-between  items-center`}
              href="/account-settings"
            >
              Upgrade to Premium
              <Icon name="external"  size={18} />
            </a>
          )}
        </Menu.Item>
        <Menu.Item className="py-[0.6rem] px-3 rounded">
          {({ active }) => (
            <a
              className={`${active && 'bg-[#3E3E3E]'} flex justify-between  items-center`}
              href="/account-settings"
            >
              Support
              <Icon name="external"  size={18} />
            </a>
          )}
        </Menu.Item>
        <Menu.Item className="py-[0.6rem] px-3 rounded">
          {({ active }) => (
            <a
              className={`${active && 'bg-[#3E3E3E]'} flex justify-between  items-center`}
              href="/account-settings"
            >
              Download
              <Icon name="external"  size={18} />
            </a>
          )}
        </Menu.Item>
        <Menu.Item className="py-[0.6rem] px-3 rounded">
          {({ active }) => (
            <a
              className={`${active && 'bg-[#3E3E3E]'}`}
              href="/account-settings"
            >
              Settings
            </a>
          )}
        </Menu.Item>
        <hr className=' border-[#444444]' />
        <Menu.Item className="py-3 px-3 rounded">
          {({ active }) => (
            <NavLink
              onClick={() => {setIsLogin(false)}}
              to="/"
              className={`${active && 'bg-[#3E3E3E]'}`}
              href="/account-settings"
            >
              Log out
            </NavLink>
          )}
        </Menu.Item>
        
      </Menu.Items>
    </Menu>

    // <div>
    //     <button className="bg-black p-2 rounded-full transition-all hover:scale-110"><FaRegUser /></button>
    // </div>
  )
}

export default Auth