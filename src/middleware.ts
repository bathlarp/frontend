import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log(`Request: ${request.nextUrl.pathname}`);

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
