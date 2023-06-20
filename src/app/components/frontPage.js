import Sidebar from "./partials/sidebar";
import Link from "next/link";
import Head from "next/head";
export default function FrontPage() {
    return (
        <>  <Head>
                <title>Portafolio - Facundo Barberia</title>
                <link rel="icon" href="/images/icon.png"></link>
            </Head>  
            <Sidebar></Sidebar>
            <article className="mainArticle flex text-center flex-col items-center justify-center">
                    <div className="text-2xl xl:text-6xl">&#60;<span className="text-cyan-500">title</span>&#62;¡Bienvenidos!&#60;<span className="text-cyan-500">title</span>&#62;</div>
                    <div className="flex flex-col buttonList text-3xl pt-5">
                        <button className="text-xl"><Link href='aboutme'><span className='text-red-600'>&ensp; return</span> <span>index.<span className='text-amber-600'>_AcercaDeMi</span></span></Link></button>
                        <button className="text-xl"><Link href='/myprojects'><span className='text-red-600'>&ensp; return</span> <span>index.<span className='text-amber-600'>_MisProyectos</span></span></Link></button>
                        <button className="text-xl"><Link href='/contact'><span className='text-red-600'>&ensp; return</span> <span>index.<span className='text-amber-600'>_Contactame</span></span></Link></button>
                    </div>
            </article>
        </>
    )
}