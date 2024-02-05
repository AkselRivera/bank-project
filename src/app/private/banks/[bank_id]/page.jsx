export const dynamic = 'force-dynamic'
export const revalidate = 0

import { BankDetailLayout } from '../../../../components/layouts'
import { AccountCard } from '../../../../components/shared'

export async function getInstitutionDetails(id, page = 1, page_size = 50) {
  const resp = await fetch(
    `http://localhost:3000/api/accounts/${id}?page=${page}&page_size=${page_size}`
  )
  const data = await resp.json()

  return data
}

export const metadata = {
  title: 'Bank Details',
  description: 'Get more details about Banks accounts',
}

export default async function BankDetailsPage({ params }) {
  const { bank_id } = params
  const data = await getInstitutionDetails(bank_id)

  return (
    <BankDetailLayout
      name={data?.institution.display_name ?? 'Bank Name'}
      logo={data?.institution.logo}
    >
      <div className=" h-[calc(100vh-13rem)] -mx-4 p-4 flex flex-wrap items-strech justify-center gap-6 my-4 overflow-auto">
        {data?.results?.map((account) => (
          <AccountCard
            key={account.id}
            account_id={account.id}
            name={account.name}
            type={account.type}
            currency={account.currency}
            category={account.category}
            balance={account.balance}
            link={account.link}
          />
        ))}
      </div>
    </BankDetailLayout>
  )
}
