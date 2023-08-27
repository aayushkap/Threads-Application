//This layout is created only for routes inside (auth)

//Clerk Library provides authentication-related functionality to the child components.
import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

import '../globals.css';

//For SEO.
export const metadata = {
    title: 'Threads',
    description: 'A Next.js Meta Threads Application'
}

//Importing font
const inter = Inter({ subsets: ["latin"]})

//Root layouts are especially useful when you have common elements or behaviors that you want to apply to most parts of your website.
//Children is a prop taken by RootLayout which represents the content that will be rendered within this layout.
export default function RootLayout({
    children
}:{ 
    children:React.ReactNode
}) {
    return  (
    <ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>
</ClerkProvider>
)}
