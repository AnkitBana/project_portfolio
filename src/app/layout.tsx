import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Ankit Kumar Gautam - SAP Consultant | DevOps Engineer | Test Automation Specialist',
  description: 'Professional portfolio of Ankit Kumar Gautam showcasing expertise in SAP, DevOps, Kubernetes, Docker, TOSCA, and Test Automation',
  keywords: ['SAP Consultant', 'DevOps Engineer', 'Test Automation', 'TOSCA', 'Kubernetes', 'Docker', 'AWS', 'Jenkins', 'Terraform', 'Ankit Kumar Gautam'],
  authors: [{ name: 'Ankit Kumar Gautam' }],
  creator: 'Ankit Kumar Gautam',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'Ankit Kumar Gautam - Portfolio',
    description: 'SAP Consultant | DevOps Engineer | Test Automation Specialist',
    siteName: 'Ankit Kumar Gautam Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankit Kumar Gautam - Portfolio',
    description: 'SAP Consultant | DevOps Engineer | Test Automation Specialist',
    creator: '@ankitbana',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-gray-900 transition-colors duration-300">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

// Made with Bob
