import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type React from 'react'
import '../../styles/globals.css'


import { routing } from '@/i18n/routing'
import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { RootWrapper } from './root-wrapper'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <RootWrapper locale={locale}>{children}</RootWrapper>
      </body>
    </html>
  )
}

// Todo: Make sure to change according to your/project needs
export const metadata: Metadata = {
  title: {
    default: 'Next.js Boilerplate',
    template: '%s | Next.js Boilerplate',
  },
  description: 'A comprehensive Next.js boilerplate with modern tooling',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Next.js Boilerplate',
    description: 'A comprehensive Next.js boilerplate with modern tooling',
    siteName: 'Next.js Boilerplate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Boilerplate',
    description: 'A comprehensive Next.js boilerplate with modern tooling',
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
