import './globals.css'
import localFont from 'next/font/local'

const montserrat = localFont({
  src: [
    {
      path: '../../public/fonts/Montserrat-Medium.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: "../../public/fonts/Montserrat-MediumItalic.ttf",
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/Montserrat-Bold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Montserrat-LightItalic.ttf',
      weight: '200',
      style: 'italic'
    }
  ],
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'Portafolio - Facundo Barberia',
  description: '¡Bienvenido a mi portafolio!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
