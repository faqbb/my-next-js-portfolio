import Head from 'next/head'
import FrontPage from './components/partials/frontPage.js'

export default function Home() {
  return (<>
      <Head>
        <title>Portafolio - Facundo Barberia</title>  
      </Head>
      <body>
        <FrontPage></FrontPage>
      </body>
  </>
  )
}
