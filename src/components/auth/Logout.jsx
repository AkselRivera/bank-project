'use client'

import { Spinner } from 'flowbite-react'
import { logout } from '../../actions/auth'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function Logout() {
  const router = useRouter()
  useEffect(() => {
    logout().then((resp) => {
      if (resp.ok) {
        router.replace('/login')
      } else {
        router.replace('/private/dashboard/')
      }
    })
  }, [])

  return (
    <div className="w-full flex justify-center items-center h-[calc(100vh-5rem)] ">
      <Spinner size="xl" color="info" aria-label="Info spinner example" />
    </div>
  )
}
