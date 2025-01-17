// export const metadata = {
//     title: {
//         default: 'درباره من',
//         // absolute: 'درباره من'
//     }
// }

export function generateMetadata({params, searchParams}) {
    return {
        title: searchParams.name ?? 'درباره من',
        description: 'این صفحه درباره من است'
    }
}

export default function About() {
    return (
        <>
            <h1>درباره من</h1>
            <p>این صفحه درباره من است</p>
        </>
    )
}