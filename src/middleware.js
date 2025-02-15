import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let locales = ['en-US', 'fa-IR', 'fa', 'en']


function getLocale(request) {
    let headers = {}
    request.headers.forEach((value, key) => (headers[key] = value))
    let languages = new Negotiator({ headers }).languages()

    let defaultLocale = 'fa-IR'

    return match(languages, locales, defaultLocale);
}



// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const locale = getLocale(request)
    console.log(locale)
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