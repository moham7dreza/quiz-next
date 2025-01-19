import "./globals.css";

import {Vazirmatn} from 'next/font/google'
import {MainLayout} from "./components/MainLayout";
import PrelineScript from "./components/PrelineScript";

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

export default function RootLayout({children}) {
    return (
        <html lang="fa-IR" dir="rtl">
        <body className={vazirmatn.className}>
        <MainLayout>
            {children}
        </MainLayout>
        </body>
        <PrelineScript />
        </html>
    );
}
