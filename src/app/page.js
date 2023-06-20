import Head from 'next/head'
import FrontPage from './components/frontPage.js'

export default function Home() {
  return (<>
  <Head>
                <title>Portafolio - Facundo Barberia</title>
                <link rel="icon" href="/images/icon.png"></link>
            </Head>   
      <body>
        <FrontPage></FrontPage>
      </body>
  </>
  )
}
