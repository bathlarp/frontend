import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log(`Request: ${request.nextUrl.pathname}`);
  if (request.nextUrl.pathname.startsWith('/confirm')) {
    return NextResponse.redirect(new URL('/auth/new-user', request.url));
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
