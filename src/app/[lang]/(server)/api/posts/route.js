// for test in browser link localhost:3000/api/posts according to file system
export const dynamic = 'force-static' // cache

export const revalidate = 60

export async function GET() {
    const res = await fetch(process.env.BACKEND_URL + '/api/v1/posts', {
        headers: {
            'Content-Type': 'application/json',
            // 'API-Key': process.env.DATA_API_KEY,
        },
    })
    // console.log(res)
    const data = await res.json()

    // console.log(data)

    return Response.json({ data })
}