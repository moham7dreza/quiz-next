import Link from "next/link";

export default function Home() {
    return (
        <section>
            <h2>
                تاپ ریت
            </h2>
            <Link
                // href="/about"
                // replace={true} remove browser route history -> default is false
                // prefetch={false} pre fetch component in background -> default is true
                href={{
                    pathname: "/about",
                    query: {name: "toprate"}
                }}
            >درباره من</Link>
            <div></div>
            <Link href='invoice'>invoice</Link>
        </section>
    );
}
