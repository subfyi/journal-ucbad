import '../assets/style.scss'
import Layout from '@/layout/Layout'
import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'latin-ext']
})

export const metadata = {
  title: 'UCBAD - Ulusal Çevre Bilimleri Araştırma Dergisi',
  description: 'Ulusal Çevre Bilimleri Araştırma Dergisi (UCBAD), ISSN-2636-7483',
  openGraph: {
    title: 'UCBAD - Ulusal Çevre Bilimleri Araştırma Dergisi',
    description: 'Ulusal Çevre Bilimleri Araştırma Dergisi (UCBAD), ISSN-2636-7483',
    url: 'https://ucbad.com/',
    siteName: 'UCBAD',
    locale: 'tr-TR',
    type: 'website'
  },
  verification: {
    yandex: 'c428f1aafb4a49a3'
  }
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='tr'>
    <head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <link rel='icon' href='/favicon.ico' />
    </head>
    <body className={poppins.className}>
    <div className="page-wrapper">
    <Layout>
      {children}
    </Layout>
    </div>
    </body>
    </html>
  )
}
