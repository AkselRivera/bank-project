import moment from 'moment'

export async function getTransactions({ link_id, account_id }) {
  try {
    const date_to = moment().format('YYYY-MM-DD')
    const date_from = moment().subtract(2, 'month').format('YYYY-MM-DD')

    const resp = await fetch(`/api/transactions/${link_id}/${account_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        link: link_id,
        account: account_id,
        date_from,
        date_to,
      }),
    })

    return resp
  } catch (error) {
    return error
  }
}
