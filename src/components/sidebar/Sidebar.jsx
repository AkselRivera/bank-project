'use client'
import { Sidebar as FSidebar } from 'flowbite-react'
import { BiBuoy } from 'react-icons/bi'
import { HiChartPie, HiInbox, HiLogout } from 'react-icons/hi'
import { CiBank } from 'react-icons/ci'
import Sidelinks from './Sidelinks'

const Navlinks = [
  {
    to: '/private/dashboard',
    title: 'Dashboard',
    Icon: HiChartPie,
  },
  {
    to: '/private/banks',
    title: 'Banks',
    Icon: CiBank,
    chip: (
      <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
        3
      </span>
    ),
  },
  {
    to: '/',
    title: 'Otra cosa',
    Icon: HiInbox,
  },
]

export function Sidebar() {
  return (
    <FSidebar
      aria-label="Sidebar with content separator example"
      className="h-full max-w-[20rem]"
    >
      <FSidebar.Items>
        <FSidebar.ItemGroup>
          {Navlinks.map((link) => (
            <Sidelinks key={link.to} {...link} />
          ))}

          {/* <FSidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </FSidebar.Item>
          <FSidebar.Item href="#" icon={HiViewBoards}>
            Kanban
          </FSidebar.Item>
          <FSidebar.Item href="#" icon={HiInbox}>
            Inbox
          </FSidebar.Item>
          <FSidebar.Item href="#" icon={HiUser}>
            Users
          </FSidebar.Item>
          <FSidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </FSidebar.Item>
          <FSidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </FSidebar.Item>
          <FSidebar.Item href="#" icon={HiTable}>
            Sign Up
          </FSidebar.Item> */}
        </FSidebar.ItemGroup>
        <FSidebar.ItemGroup>
          <Sidelinks to="/private/help" title="Help" Icon={BiBuoy} />
          <Sidelinks to="/login" title="Sign out" Icon={HiLogout} />
        </FSidebar.ItemGroup>
      </FSidebar.Items>
    </FSidebar>
  )
}
