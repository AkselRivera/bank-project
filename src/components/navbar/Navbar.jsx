'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import NextLogo from '../../../public/next.svg'
import Link from 'next/link'
import {
  Avatar,
  DarkThemeToggle,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar as FNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react'
import { me } from '../../actions/auth'

export function Navbar() {
  const [userData, setuserData] = useState({ name: '', email: '' })
  useEffect(() => {
    me()
      .then((resp) => resp.json())
      .then(({ data }) => {
        const name = data?.name || 'Guest Name'
        const email = data?.email || 'email@email.com'
        const avatar =
          data?.avatar ||
          'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
        const role = data?.role || 'GUEST'

        setuserData({ name, email, avatar, role })
      })
  }, [])
  return (
    <FNavbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        <Image
          src={NextLogo}
          alt="Logo"
          width={100}
          className="mr-3 h-6 sm:h-9"
        />
      </NavbarBrand>

      <div className="flex md:order-2">
        <DarkThemeToggle className="mx-2" />

        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={userData.avatar} rounded />}
        >
          <DropdownHeader>
            <span className="block text-sm">{userData.name}</span>
            <span className="block truncate text-sm font-medium">
              {userData.email}
            </span>
          </DropdownHeader>
          {/* <DropdownItem>Dashboard</DropdownItem> */}
          {/* <DropdownItem>Settings</DropdownItem> */}
          <DropdownDivider />
          <DropdownItem>
            <Link href="/private/logout">Sign out</Link>
          </DropdownItem>
        </Dropdown>
        {/* <NavbarToggle /> */}
        <NavbarToggle />
      </div>
      <NavbarCollapse className="md:hidden">
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </FNavbar>
  )
}
