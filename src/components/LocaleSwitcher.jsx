'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import usFlag from "assets/us.svg";
import irFlag from "assets/ir.svg";

const locales = {
    en: {
        src: usFlag,
        pathName: 'en-US',
        text: 'Us Flag'
    },
    fa: {
        src: irFlag,
        pathName: 'fa-IR',
        text: 'IR Flag'
    }
}
export const LocaleSwitcher = () => {

    const pathName = usePathname()

    const redirectedPathName = (locale) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <div>
            {/* <p>انتخاب زبان :</p> */}
            <ul className="mx-auto inline-block">
                <li className="flex flex-row">
                    {
                        Object.values(locales).map((locale, index) => (
                            <Link key={index} href={redirectedPathName(locale.pathName)}>
                                <Image
                                    src={locale.src}
                                    className="m-2"
                                    width={30}
                                    height={30}
                                    alt={locale.text}
                                />
                            </Link>
                        ))
                    }
                </li>
            </ul>
        </div>
    );
}