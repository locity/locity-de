import { Breadcrumb, Footer, Header } from '@ui'
import { Metadata } from 'next'
import './global.css'
import { FooterItems, HeaderItems } from './navigation-items'

export const metadata: Metadata = {
  title: {
    template: '%s | Locity GmbH',
    default: 'Locity GmbH',
  },
  description: 'Frontend Architecktur und Entwicklung',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <base href="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/fav/icon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/icon-16x16.png" />
        <link rel="manifest" href="/fav/manifest.json" />
        <link rel="mask-icon" href="/fav/icon-mono.svg" color="#5bbad5" />
        <meta name="msapplication-config" content="fav/browserconfig.xml" />
        <meta name="theme-color" content="#4671D5" />
      </head>
      <body>
        <Header items={HeaderItems} />
        <main>
          <>
            <Breadcrumb />
            {children}
          </>
        </main>
        <Footer items={FooterItems} />
      </body>
    </html>
  )
}
