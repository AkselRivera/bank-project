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
}

export async function POST(request, { params }) {
  const { bank_id } = params
  const body = await request.json()

  body['access_mode'] = 'recurrent'
  const token = process.env.TOKEN || 'nothing'
  const headers = {
    Authorization: `Basic ${token}`,
    'Content-Type': 'application/json',
  }

  const institutionResp = await fetch(
    `https://sandbox.belvo.com/api/institutions/${bank_id}`,
    {
      headers,
    }
  )

  const { name } = await institutionResp.json()
  body['institution'] = name

  const resp = await fetch('https://sandbox.belvo.com/api/links/', {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })

  const details = await resp.json()
  console.log(details)
  if (!resp.ok) {
    return NextResponse.json(
      {
        message: 'Something went wrong',
        details,
      },
      {
        status: resp.status,
      }
    )
  }

  return NextResponse.json(details, { status: 201 })
}
