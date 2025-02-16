import {NextResponse} from 'next/server'
import {match} from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import {defaultLocale, locales} from "./helpers";

// export {default} from 'next-auth/middleware'


function getLocale(request) {
    let headers = {}
    request.headers.forEach((value, key) => (headers[key] = value))
    let languages = new Negotiator({headers}).languages()

    return match(languages, locales, defaultLocale);
}


// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const {pathname} = request.nextUrl

    // localhost:3000/fa/... or localhost:3000/fa
    const pathnameHasLocale = locales.some(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    const locale = getLocale(request)
    // console.log(locale)
    const urlLocale = `${locale}`
    const urlPath = `${pathname.startsWith('/') ? '' : '/'}${pathname}`
    return NextResponse.redirect(new URL(urlLocale + urlPath, request.url))

    // return NextResponse.redirect(new URL('/maintenance', request.url))

    // return NextResponse.rewrite(new URL('/maintenance', request.url))

    // conditional statements -> not required any matcher
    // if (pathname.startsWith('/about')) { // start with about so /about/a/b/ ...
    //     return NextResponse.rewrite(new URL('/about-2', request.url))
    // }
    //
    // if (pathname.startsWith('/dashboard')) {
    //     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
    // }
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