'use client'

import {useRouter, useSearchParams} from "next/navigation";
import {useRef, useState} from "react";
import {signIn} from "next-auth/react";

export default function Login() {
    /*
    const router = useRouter()

    const searchParams = useSearchParams()

    const [error, setError] = useState('')

    const username = useRef("")
    const password = useRef("")

    // از چه صفحه ای اومده لاگین که بعدش برش میگردونم اونجا
    const callbackUrl = searchParams.get('callbackUrl') || '/quiz'

    const onSubmit = async (event) => {
        event.preventDefault()

        try {
            const result = await signIn('credentials', {
                username: username.current,
                password: password.current,
                redirect: false,
                callbackUrl,
            })

            if (!result?.error) router.push(callbackUrl)
            else setError('error')
        } catch (error) {
            setError(error)
        }
    }
    */
    return (
        <></>
    )
}