'use client'

import {useEffect, useState} from "react";
import {redirect, useRouter} from "next/navigation";

// export const metadata = {
//     title: {
//         default: 'سبد خرید',
//     }
// }

export default function Invoice() {

    const router = useRouter()

    const [count, setCount] = useState(0)

    const handleIncreaseCount = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        if (count > 5) {
            // router.push('/')
            redirect('/')
        }
    }, [count])

    return (
        <>
            <h1>invoice</h1>
            <h2>{count}</h2>
            <button onClick={handleIncreaseCount}>increase count</button>
            <div></div>
            <button onClick={() => router.push('/')}>nav</button>
        </>
    )
}