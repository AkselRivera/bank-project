import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const { bank_id } = params
  const token = process.env.TOKEN || 'nothing'

  const headers = {
    Authorization: `Basic ${token}`,
  }

  const institutionResp = await fetch(
    `https://sandbox.belvo.com/api/institutions/${bank_id}`,
    {
      headers,
    }
  )

  if (!institutionResp.ok) {
    return NextResponse.json(
      {
        message: 'Institution not found',
      },
      { status: 404 }
    )
  }

  const institutionData = await institutionResp.json()

  const { name } = institutionData

  const { searchParams } = new URL(request.url)

  let page = Number(searchParams.get('page') ?? '1')
  let page_size = Number(searchParams.get('page_size') ?? '50')

  const resp = await fetch(
    `https://sandbox.belvo.com/api/accounts?page=${page}&page_size=${page_size}&institution=${name}`,
    {
      headers,
    }
  )
  const data = await resp.json()
  if (data?.results?.length >= 0) {
    data['institution'] = institutionData
    return NextResponse.json(data, { status: 200 })
  } else {
    return NextResponse.json(
      { message: 'Institution not found' },
      { status: 404 }
    )
  }

  // const data = {
  //   count: 4,
  //   next: null,
  //   previous: null,
  //   results: [
  //     {
  //       id: '408b3cd9-a153-4070-b5de-f7194ece1192',
  //       link: 'fc8ca361-1400-4e81-90da-abafdb99a215',
  //       institution: {
  //         name: 'erebor_mx_retail',
  //         type: 'bank',
  //       },
  //       created_at: '2024-02-03T17:52:34.601186Z',
  //       name: 'Cuenta perfiles',
  //       type: 'Créditos',
  //       agency: '449915',
  //       number: '14968838',
  //       balance: {
  //         current: 34453.88,
  //         available: 34453.88,
  //       },
  //       category: 'LOAN_ACCOUNT',
  //       currency: 'MXN',
  //       loan_data: {
  //         fees: null,
  //         limit_day: '19',
  //         loan_type: null,
  //         principal: null,
  //         limit_date: '2024-03-04',
  //         cutting_day: '8',
  //         collected_at: '2024-02-03T17:52:28.279779Z',
  //         credit_limit: 6492,
  //         cutting_date: '2024-02-15',
  //         interest_rate: null,
  //         interest_rates: null,
  //         contract_number: null,
  //         monthly_payment: null,
  //         payment_due_day: null,
  //         last_payment_date: '2024-01-07',
  //         next_payment_date: '2024-02-12',
  //         contract_start_date: null,
  //         last_period_balance: null,
  //         no_interest_payment: null,
  //         outstanding_balance: null,
  //         outstanding_principal: null,
  //         number_of_installments_total: null,
  //         number_of_installments_outstanding: null,
  //       },
  //       credit_data: null,
  //       balance_type: 'LIABILITY',
  //       collected_at: '2024-02-03T17:52:29.977595Z',
  //       bank_product_id: '7605599',
  //       last_accessed_at: '2024-02-01T18:36:39',
  //       internal_identification: '15535241',
  //       public_identification_name: 'ACCOUNT_NUMBER',
  //       public_identification_value: '7650814',
  //     },
  //     {
  //       id: 'a379f125-6883-4167-bebd-fffa031a71d1',
  //       link: 'fc8ca361-1400-4e81-90da-abafdb99a215',
  //       institution: {
  //         name: 'erebor_mx_retail',
  //         type: 'bank',
  //       },
  //       created_at: '2024-02-03T17:52:34.601080Z',
  //       name: 'Tarjeta Platino',
  //       type: 'Cuentas de efectivo',
  //       agency: '806962',
  //       number: '2829 None9647',
  //       balance: {
  //         current: 42845.73,
  //         available: 42845.73,
  //       },
  //       category: 'CREDIT_CARD',
  //       currency: 'MXN',
  //       loan_data: null,
  //       credit_data: {
  //         collected_at: '2024-02-03T17:52:26.672769Z',
  //         credit_limit: 42444,
  //         cutting_date: '2024-04-07',
  //         interest_rate: 0.0,
  //         minimum_payment: 325.0,
  //         monthly_payment: 8,
  //         last_payment_date: '2023-12-28',
  //         next_payment_date: '2024-03-01',
  //         last_period_balance: 0.0,
  //         no_interest_payment: 0.0,
  //       },
  //       balance_type: 'LIABILITY',
  //       collected_at: '2024-02-03T17:52:29.966277Z',
  //       bank_product_id: '5706737',
  //       last_accessed_at: '2024-02-03T05:39:58',
  //       internal_identification: '4439084',
  //       public_identification_name: 'CREDIT_CARD_NUMBER',
  //       public_identification_value: '1017 None2082',
  //     },
  //     {
  //       id: 'cdd5a15f-2b74-4e4a-bd37-70eb7c29cf1c',
  //       link: 'fc8ca361-1400-4e81-90da-abafdb99a215',
  //       institution: {
  //         name: 'erebor_mx_retail',
  //         type: 'bank',
  //       },
  //       created_at: '2024-02-03T17:52:34.600892Z',
  //       name: 'Cartão crédito visa platinum',
  //       type: 'Cuentas de efectivo',
  //       agency: '806963',
  //       number: '9648',
  //       balance: {
  //         current: 50218.92,
  //         available: 50218.92,
  //       },
  //       category: 'CREDIT_CARD',
  //       currency: 'MXN',
  //       loan_data: null,
  //       credit_data: {
  //         collected_at: '2024-02-03T17:52:26.672769Z',
  //         credit_limit: 42444,
  //         cutting_date: '2024-04-07',
  //         interest_rate: 0.0,
  //         minimum_payment: 80.0,
  //         monthly_payment: 8,
  //         last_payment_date: '2023-12-28',
  //         next_payment_date: '2024-03-01',
  //         last_period_balance: 0.0,
  //         no_interest_payment: 0.0,
  //       },
  //       balance_type: 'LIABILITY',
  //       collected_at: '2024-02-03T17:52:29.889931Z',
  //       bank_product_id: '5706738',
  //       last_accessed_at: '2024-02-03T11:28:25',
  //       internal_identification: '4439084',
  //       public_identification_name: 'CREDIT_CARD_NUMBER',
  //       public_identification_value: '2083',
  //     },
  //     {
  //       id: '124a2a9a-0020-4d7e-b639-971e6a7da889',
  //       link: 'fc8ca361-1400-4e81-90da-abafdb99a215',
  //       institution: {
  //         name: 'erebor_mx_retail',
  //         type: 'bank',
  //       },
  //       created_at: '2024-02-03T17:52:34.600666Z',
  //       name: 'Cuenta perfiles',
  //       type: 'Cuentas de efectivo',
  //       agency: '11275487',
  //       number: '1920',
  //       balance: {
  //         current: 30091.0,
  //         available: 30091.0,
  //       },
  //       category: 'CHECKING_ACCOUNT',
  //       currency: 'MXN',
  //       loan_data: null,
  //       credit_data: null,
  //       balance_type: 'ASSET',
  //       collected_at: '2024-02-03T17:52:29.869489Z',
  //       bank_product_id: '16045451',
  //       last_accessed_at: '2024-02-02T05:20:10',
  //       internal_identification: '11939855',
  //       public_identification_name: 'CLABE',
  //       public_identification_value: '1521',
  //     },
  //   ],
  // }

  // data['institution'] = institutionData

  // console.log('api', data)
  // return NextResponse.json(data, { status: 200 })
}
