// for test in browser link localhost:3000/api according to file system

import {redirect} from "next/navigation";
import {headers} from "next/headers";

export async function GET(request) {
    const requestHeaders = headers()

    // console.log(requestHeaders)

    const contentType = (await requestHeaders).get('Content-Type')

    console.log(contentType)

    return new Response(`contentType is ${contentType}`, {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({message: 'Hello, Next.js API!'}),
    })
}