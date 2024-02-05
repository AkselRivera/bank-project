export const dynamic = 'force-dynamic'
export const revalidate = 0

import { BankCard } from '../../../components/shared'

export async function getInstitutions(page = 1, page_size = 50) {
  const resp = await fetch(
    `http://localhost:3000/api/institutions?page=${page}&page_size=${page_size}`
  )
  const data = await resp.json()

  return data
}

export default async function BanksPage() {
  const institutions = await getInstitutions()

  return (
    <div className="w-full p-4 ">
      <h1 className="text-3xl font-bold capitalize">Banks list</h1>

      <div className="w-full h-auto flex flex-wrap items-strech justify-center gap-6 my-4">
        {institutions?.results?.map((institution) => (
          <BankCard
            key={institution.id}
            id={institution.id}
            title={institution.display_name}
            img={institution.icon_logo}
            country={institution.country_code}
            type={institution.type}
            status={institution.status}
            resources={institution.resources}
          />
        ))}
      </div>
    </div>
  )
}
