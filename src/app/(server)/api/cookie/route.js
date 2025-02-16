// for test in browser link localhost:3000/api/cookie according to file system

import { cookies } from 'next/headers'

export async function GET(request) {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')

    const token2 = request.cookies.get('token') // from next request
    // console.log(token, token2)

    return new Response('Hello, Next.js!', {
        status: 200,
        headers: { 'Set-Cookie': `token=${token}` },
    })
}