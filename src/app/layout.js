import './globals.css'
import localFont from 'next/font/local'
import Head from 'next/head'

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

export default function Layout({ children }) {
  return (<>
            <Head>
                <title>Portafolio - Facundo Barberia</title>
                <link rel="icon" href="/images/icon.png"></link>
                <meta name='description' content='!Bienvenidos a mi portafolio!'></meta>
            </Head>  
      <div className={montserrat.className}>{children}</div>
  </>
  )
}
