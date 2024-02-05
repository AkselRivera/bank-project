import { Sidebar as FSidebar } from 'flowbite-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidelinks({ to, title, Icon }) {
  const pathName = usePathname()
  return (
    <FSidebar.Item
      active={pathName === to}
      as={Link}
      key={to}
      href={to}
      icon={Icon}
    >
      {title}
    </FSidebar.Item>
  )
}
