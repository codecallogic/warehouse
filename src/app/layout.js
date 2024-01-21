import { Lato, Poppins } from 'next/font/google'
import './globals.css'
import { ApolloWrapper } from "@/app/_libs/apolloWrapper";

const lato = Lato({ 
  subsets: ['latin'], 
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-lato'
})

export const metadata = {
  title: 'Fabworkflow',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </body>
    </html>
  )
}