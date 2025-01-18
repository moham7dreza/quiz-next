import "./globals.css";

import {Vazirmatn} from 'next/font/google'

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
        {children}
        </body>
        </html>
    );
}
