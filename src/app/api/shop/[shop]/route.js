// for test in browser link localhost:3000/api/shop according to file system
// dynamic route
export async function GET(request, {params}) {
    // console.log(request)
    // console.log(params)

    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    // console.log(query)

    const shop = (await params).shop
    // console.log(shop)
    return  new Response(shop, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    })
}

export async function POST(request) {
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    return Response.json({ name, email })
}