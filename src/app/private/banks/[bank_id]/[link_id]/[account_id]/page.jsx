export const dynamic = 'force-dynamic'
export const revalidate = 0

import { TransactionLayout } from '../../../../../../components/layouts'
import {
  AccountShortCard,
  DefaultTable,
  PaymentDetails,
} from '../../../../../../components/shared'

export async function getTransactions({
  bank_id,
  link_id,
  account_id,
  page = 1,
  page_size = 50,
}) {
  const resp = await fetch(
    `http://localhost:3000/api/transactions/${link_id}/${account_id}?page=${page}&page_size=${page_size}&bank_id=${bank_id}`
  )
  const data = await resp.json()

  return data
}

const headers = ['Date', 'Description', 'Category', 'Amount', 'Status']
export default async function TransactionPage({ params }) {
  const { bank_id, link_id, account_id } = params
  const data = await getTransactions({
    bank_id,
    link_id,
    account_id,
  })

  const tableBody = data.results.map((row) => ({
    id: row.id || new Date().getTime,
    date: row.value_date || 'No data',
    description: row.description || 'No data',
    category: row.category || 'No data',
    amount: (
      <span
        className={`${
          row.type === 'INFLOW'
            ? 'text-green-500'
            : row.type === 'OUTFLOW'
            ? 'text-red-500'
            : ''
        }`}
      >
        {row.type === 'INFLOW' ? '+' : row.type === 'OUTFLOW' ? '-' : ''} $
        {row.amount} {row.currency}
      </span>
    ),
    status: row.status || 'No data',
  }))

  const getPaymentDetails = (category, data) =>
    category === 'CREDIT_CARD' ? data.credit_data : data.loan_data

  return (
    <TransactionLayout
      bank_name={data.institution.display_name || 'Bank Name'}
      account_name={data.account.name || 'Account Name'}
      bank_id={data.institution.id || '1004'}
    >
      <div className="h-[calc(100vh-13rem)] -mx-4  my-4 overflow-auto">
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center flex-wrap px-4">
          <AccountShortCard
            currency={data.account.currency}
            balance={data.account.balance}
            category={data.account.category}
            last_accessed_at={data.account.last_accessed_at}
          ></AccountShortCard>
          {['CREDIT_CARD', 'LOAN_ACCOUNT'].includes(data.account.category) && (
            <div className="my-4 min-w-[20rem] ">
              <h3 className="text-xl font-bold mb-4">Payments details</h3>
              <PaymentDetails
                data={getPaymentDetails(data.account.category, data.account)}
                category={data.account.category}
              />
            </div>
          )}
        </div>
        <div className="px-4 my-4 ">
          <h5 className="text-xl font-bold mb-4">Transactions</h5>

          <DefaultTable headers={headers} data={tableBody} />
        </div>
      </div>
    </TransactionLayout>
  )
}
