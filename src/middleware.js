import { NextResponse } from 'next/server'
import { me } from './actions/auth'

export async function middleware(request) {
  if (
    request.nextUrl.pathname.startsWith('/login') ||
    request.nextUrl.pathname.startsWith('/register')
  ) {
    const resp = await me(request)

    if (!resp.ok) return NextResponse.next()
    if (resp.ok) return NextResponse.redirect(new URL('/', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/private')) {
    const resp = await me(request)

    if (resp.ok) return NextResponse.next()
    if (!resp.ok) return NextResponse.redirect(new URL('/login', request.url))
  } else return NextResponse.next()
}

export const config = {
  // matcher: ['/private/:path*'],
}
