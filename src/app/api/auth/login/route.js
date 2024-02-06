import bcrypt from 'bcrypt'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { STORED_USERS } from '../../../../constants/db/database'

export async function POST(request) {
  const { email, password } = await request.json()

  if (!email || !password) {
    return NextResponse.json(
      { message: 'Email and password are required' },
      { status: 400 }
    )
  }

  const user = STORED_USERS.find((user) => user.email === email)

  if (user === undefined) {
    return NextResponse.json(
      { message: 'Email or password wrong!' },
      {
        status: 401,
      }
    )
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    return NextResponse.json(
      { message: 'Email or password wrong!' },
      { status: 401 }
    )
  }

  const token = jwt.sign(
    {
      email,
      name: user.name,
      role: user.role,
      avatar: user.avatar,
    },
    process.env.SECURE_SIGNER,
    {
      expiresIn: '2d',
    }
  )
  cookies().set('access_token', token, {
    httpOnly: true,
  })
  return NextResponse.json(
    { email, token },
    {
      status: 200,
    }
  )
  //   const salt = await bcrypt.genSalt(12)
  //   const hashedPassword = await bcrypt.hash(password, salt)
}
