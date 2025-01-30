// export const metadata = {
//     title: {
//         default: 'درباره من',
//         // absolute: 'درباره من'
//     }
// }

import Link from "next/link";
import Image from "next/image";

export function generateMetadata({params, searchParams}) {
    return {
        title: 'درباره من', description: 'این صفحه درباره من است'
    }
}

export default function About() {
    return (<>
            <h1>درباره من</h1>
            <p>این صفحه درباره من است</p>
            <Link href={'/about/photo'}>
                <Image className={'w-full object-cover aspect-square col-span-2'} src={'https://fakeimg.pl/350x200/?text=World&font=lobster'} alt={''} width={400} height={400}/>
            </Link>
        </>)
}