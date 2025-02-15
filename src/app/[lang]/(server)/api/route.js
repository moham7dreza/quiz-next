// for test in browser link localhost:3000/api according to file system

export async function GET(request) {
    console.log('/api')
    // console.log(request)
    return  new Response('test')
}