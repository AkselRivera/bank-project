const dynamic = 'force-dynamic'
import { Spinner } from 'flowbite-react'
import { LayoutCardsLoading } from '../../../components/layouts'

export default function TestPage() {
  return (
    <div className="w-full flex justify-center items-center h-[calc(100vh-5rem)] ">
      <Spinner size="xl" color="info" aria-label="Info spinner example" />
    </div>
  )
}
