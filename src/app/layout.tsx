import '../globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../context/ThemeContext'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: 'Portfolio | Prasidh P Shetty',
  description: 'Web Designer and Full-Stack Developer passionate about building modern, visually engaging, and user-focused digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://github-contributions-api.jogruber.de" />
      </head>
      <body className={`${inter.className} overflow-x-hidden transition-colors duration-300`} suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localTheme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (localTheme === 'dark' || (!localTheme && true)) { // Default to dark if no preference
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
        <div className="min-h-screen text-black dark:text-white transition-colors duration-300">
          {children}
        </div>
      </ThemeProvider>
    </body>
    </html>
  )
}
