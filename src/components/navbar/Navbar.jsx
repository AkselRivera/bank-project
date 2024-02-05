import Image from 'next/image'
import React from 'react'
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

export function Navbar() {
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
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
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
