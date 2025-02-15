import "styles/globals.css";

import {Vazirmatn} from 'next/font/google'
import {MainLayout} from "components/MainLayout";
import PrelineScript from "components/PrelineScript";
import {ReduxProvider} from "store/provider";

// import localFont from 'next/font/local'
//
// const localFont = localFont({
//     src: [
//         {
//             path: './fonts/VazirMatn-Bold-FD.ttf',
//             weight: 'bold',
//             style: 'italic',
//         }
//     ],
//     fontFamily: 'VazirMatn',
//     display: 'swap',
// })

const vazirmatn = Vazirmatn({
    subsets: [
        'arabic',
        'latin',
    ],
    display: 'swap',
})

export const metadata = {
    title: {
        default: "تاپ ریت",
        template: "%s | تاپ ریت",
    },
    description: "Generated by create next app",
};

export default async function RootLayout({children, params}) {
    const lang = (await params).lang
    const dir = lang === 'en-US' ? 'ltr' : 'rtl'
    return (
        <html lang={lang} dir={dir}>
        <body className={vazirmatn.className}>
        <ReduxProvider>
            <MainLayout>
                {children}
            </MainLayout>
        </ReduxProvider>
        </body>
        <PrelineScript/>
        </html>
    );
}
