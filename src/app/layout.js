import { DarkThemeToggle, Flowbite, ThemeModeScript } from 'flowbite-react'
import './globals.css'

export const metadata = {
  title: 'Banks - Aksel Rivera',
  description: 'Brelo banking app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className="flex h-screen bg-gray-100 dark:bg-gray-900 dark:text-white overflow-hidden">
        {/* <Flowbite> */}
        {children}
        {/* <DarkThemeToggle /> */}
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        {/* </Flowbite> */}
      </body>
    </html>
  )
}
