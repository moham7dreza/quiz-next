import Link from "next/link";
import {getLang} from "./dictionary";
import {LocaleSwitcher} from "../../components/LocaleSwitcher";

export default async function Home({params}) {
    const lang = (await params).lang
    const dictionary = await getLang(lang);

    return (
        <section>
            <h2>
                {dictionary['main'].appName}
            </h2>
            <LocaleSwitcher/>
            <Link
                // href="/about"
                // replace={true} remove browser route history -> default is false
                // prefetch={false} pre fetch component in background -> default is true
                href={{
                    pathname: "/about",
                    query: {name: "toprate"}
                }}
            >
                {dictionary['about'].title}
            </Link>
            <div></div>
            <Link href='invoice'>
                {dictionary['invoice'].title}
            </Link>
        </section>
    );
}
