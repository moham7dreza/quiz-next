// for test in browser link localhost:3000/api/shop according to file system
// dynamic route
export async function GET(request, {params}) {
    // console.log(request)
    // console.log(params)

    const { shop } = await params
    // console.log(shop)
    return  new Response(shop)
}