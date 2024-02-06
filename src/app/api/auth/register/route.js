import bcrypt from 'bcrypt'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

import { STORED_USERS } from '../../../../constants/db/database'

export async function POST(request) {
  const { name, email, password, password_confirmation } = await request.json()

  if (
    email == 'undefined' ||
    password == 'undefined' ||
    name == 'undefined' ||
    password_confirmation == 'undefined'
  ) {
    return NextResponse.json(
      {
        message: 'Name, Email, Password and Password Confirmation are required',
      },
      { status: 400 }
    )
  }

  if (password !== password_confirmation) {
    return NextResponse.json(
      {
        message: "Passwords don't match",
      },
      {
        status: 400,
      }
    )
  }
  if (STORED_USERS.find((user) => user.email === email)) {
    return NextResponse.json(
      {
        message: 'Email already exists',
      },
      {
        status: 409,
      }
    )
  }
  const salt = await bcrypt.genSalt(12)
  const hashedPassword = await bcrypt.hash(password, salt)

  const avatar = Math.floor(Math.random() * 5 + 1)
  const newUser = {
    id: STORED_USERS.length + 1,
    name,
    email,
    password: hashedPassword,
    createdAt: new Date(),
    role: 'ANALYST',
    avatar: `https://flowbite.com/docs/images/people/profile-picture-${avatar}.jpg`,
  }

  STORED_USERS.push(newUser)

  const token = jwt.sign(
    {
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
      avatar: newUser.avatar,
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
  //   const passwordMatch = await bcrypt.compare(
  //     password,
  //     '$2b$12$C/Fxm2X1h76vc7Gh9NV1ze5vzKAoW0ThI7m0oq.mfS55cYwq9qONu'
  //   )

  //   if (!passwordMatch) {
  //     return NextResponse.json(
  //       { message: 'Invalid credentials' },
  //       { status: 401 }
  //     )
  //   }

  //   const salt = await bcrypt.genSalt(12)
  //   const hashedPassword = await bcrypt.hash(password, salt)
}
