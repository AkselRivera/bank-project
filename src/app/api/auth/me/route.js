import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const access_token =
    request.headers.get('authorization') ||
    request.cookies.get('access_token')?.value

  if (access_token && access_token !== 'undefined') {
    const data = jwt.verify(access_token, process.env.SECURE_SIGNER)
    return NextResponse.json({ message: 'Valid token', data }, { status: 200 })
  } else {
    cookies().delete('access_token')
    return NextResponse.json(
      { message: 'Invalid token' },
      {
        status: 401,
      }
    )
  }
}
