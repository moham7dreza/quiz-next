'use client'

import {useEffect} from "react";

export default function Error({error, reset}) {
    useEffect(() => {
        console.error(error)
    }, [error]);

    return (
        <div>
            <h2>problem</h2>
            {/*try to rerender parent layout of the current component*/}
            <button onClick={() => reset()}>retry</button>
        </div>
    )
}