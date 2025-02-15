export function generateMetadata({params}) {
    // console.log(params)
    return {
        title: 'Item'
    }
}

export async function generateStaticParams() {
    const response = await fetch(process.env.BACKEND_URL + '/api/v1/items').then((res) => res.json())
    // console.log(items)
    const items = response.data.map((item) => ({
        slug: item.slug,
    }))

    console.log(items.length)

    return items
}

export default async function Item({params}) {

    // console.log(params)

    const {slug} = await params

    return (
        <div>
            <h1>Item Component</h1>
            <div>My item: {slug}</div>
        </div>
    )
}