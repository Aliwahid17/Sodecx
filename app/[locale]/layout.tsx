import { Urbanist } from 'next/font/google'
import '@/app/globals.css'
import { getCurrentLocale } from '@/locales/server'
import { Footer, Header } from '@/components/navbar'
import { SettingsProvider } from '@context'
import { contactForm } from '@/server/contactForm'
import { Toaster } from "@/components/ui/toaster"

const urbanist = Urbanist({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentLocale = getCurrentLocale()

  return (
    <html lang={currentLocale} suppressHydrationWarning>
      <body className={`${urbanist.className} dark:bg-dark-primary bg-light-primary text-dark-primary dark:text-light-primary `}>
        <SettingsProvider attribute="class">
          <Header serverActions={contactForm} />
          {children}
          <Toaster />
          <Footer />
        </SettingsProvider>
      </body>
    </html>
  )
}
