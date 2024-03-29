import Image from 'next/image'
import Link from 'next/link'
import { NotFound } from '../components/layouts'

export default function NotFoundPage() {
  return (
    <div className="h-screen w-screen bg-gray-50 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
        <div className="w-full lg:w-1/2 mx-8">
          <div className="text-7xl text-green-500 font-dark font-extrabold mb-8">
            {' '}
            404
          </div>
          <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
            Sorry we couldn't find the page you're looking for
          </p>

          <Link
            href="/"
            className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-blue-600 hover:bg-blue-700 ease-in-out duration-300 "
          >
            back to homepage
          </Link>
        </div>
        <NotFound />
      </div>
    </div>
  )
}
