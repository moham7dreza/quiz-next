export function generateMetadata({params}) {
    // console.log(params)
    return {
        title: 'Item'
    }
}

export async function generateStaticParams() {
    const response = await fetch('http://toprate.test/api/v1/items').then((res) => res.json())
    // console.log(items)
    const items = response.data.map((item) => ({
        id: item.id,
        slug: item.slug,
    }))

    console.log(items.length)

    return items
}

export default async function Item3({params}) {

    // console.log(params)

    const { id, slug } = await params

    return (
        <div>
            <h1>Item Component</h1>
            <div>My item: {id}</div>
            <div>My item: {slug}</div>
        </div>
    )
}