import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log(1)
    // return NextResponse.redirect(new URL('/maintenance', request.url))

    // return NextResponse.rewrite(new URL('/maintenance', request.url))

    // conditional statements -> not required any matcher
    if (request.nextUrl.pathname.startsWith('/about')) { // start with about so /about/a/b/ ...
        return NextResponse.rewrite(new URL('/about-2', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.rewrite(new URL('/dashboard/user', request.url))
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}