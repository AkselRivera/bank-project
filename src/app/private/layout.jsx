import { Navbar } from '../../components/navbar'
import { Sidebar } from '../../components/sidebar'

// export async function getServerSideProps(context) {
//   const resp = await me(context)

//   const data = await resp.json()

//   return {
//     props: { data },
//   }
// }

export default async function PrivateLayout({ children }) {
  return (
    <div className="flex flex-col flex-wrap flex-1">
      <Navbar />
      <div className="flex flex-row flex-1 overflow-hidden">
        {/*
        TODO: Meterlo a un layout custom con client server para renderizar el sidebar y Navbar
          <Sidebar /> 
      */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="w-full overflow-auto">{children}</div>
      </div>
    </div>
  )
}
