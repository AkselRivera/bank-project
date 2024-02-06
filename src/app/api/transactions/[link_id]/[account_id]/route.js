import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const { link_id, account_id } = params
  const { searchParams } = new URL(request.url)

  let page = Number(searchParams.get('page') ?? '1')
  let page_size = Number(searchParams.get('page_size') ?? '50')
  let bank_id = searchParams.get('bank_id') ?? 'no_bank'

  if (bank_id === 'no_bank') {
    return NextResponse.json(
      {
        message: 'bank_id parameter is required',
      },
      { status: 400 }
    )
  }

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

  const accountResp = await fetch(
    `https://sandbox.belvo.com/api/accounts/${account_id}`,
    {
      headers,
    }
  )

  if (!accountResp.ok) {
    return NextResponse.json(
      {
        message: 'Account not found',
      },
      { status: 404 }
    )
  }

  const accountData = await accountResp.json()

  const resp = await fetch(
    `https://sandbox.belvo.com/api/transactions?page=${page}&page_size=${page_size}&link=${link_id}&account=${account_id}`,
    {
      headers,
    }
  )
  const data = await resp.json()
  if (data?.results?.length >= 0) {
    data['institution'] = institutionData
    data['account'] = accountData

    return NextResponse.json(data, { status: 200 })
  } else {
    return NextResponse.json(
      { message: 'Institution not found' },
      { status: 404 }
    )
  }
}

export async function POST(request, { params }) {
  try {
    const { account_id } = params
    const body = await request.json()

    const token = process.env.TOKEN || 'nothing'
    const headers = {
      Authorization: `Basic ${token}`,
      'Content-Type': 'application/json',
    }

    if (account_id === '') {
      delete body.account
    }

    const resp = await fetch(`https://sandbox.belvo.com/api/transactions/`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })

    if (resp.ok) {
      return NextResponse.json(
        {
          message: 'Transaction created',
        },
        {
          status: 200,
        }
      )
    }
    const details = await resp.json()
    return NextResponse.json(
      {
        message: 'Error creating transaction',
        details,
      },
      {
        status: resp.status,
      }
    )
  } catch (error) {
    return error
  }
}
