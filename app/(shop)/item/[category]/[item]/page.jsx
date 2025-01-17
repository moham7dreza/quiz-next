export default async function Item2({params}) {

    // console.log(params)

    const { item } = await params

    return (
        <div>
            <h1>Item Component</h1>
            <div>My item: {item}</div>
        </div>
    )
}