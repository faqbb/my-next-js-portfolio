import Link from "next/link";
import Head from "next/head";
import Sidebar from "@/app/components/partials/sidebar";
import Layout from "@/app/layout";

export default function index() {
    return (
        <> 
        <Layout>
            <Head>
                <title>Portafolio - Facundo Barberia</title>
                <link rel="icon" href="/images/icon.png"></link>
            </Head>  
            <Sidebar active={'none'}></Sidebar>
            <article className="mainArticle flex text-center flex-col items-center justify-center">
                    <div className="text-2xl xl:text-6xl">&#60;<span className="text-cyan-500">title</span>&#62;¡Bienvenidos!&#60;<span className="text-cyan-500">title</span>&#62;</div>
                    <div className="flex flex-col buttonList text-3xl pt-5">
                        <div className="text-xl hover:text-2xl"><Link href='aboutme'><span className='text-red-600'>&ensp; return</span> <span>index.<span className='text-amber-600'>_AcercaDeMi</span></span></Link></div>
                        <div className="text-xl hover:text-2xl"><Link href='/myprojects'><span className='text-red-600'>&ensp; return</span> <span>index.<span className='text-amber-600'>_MisProyectos</span></span></Link></div>
                        <div className="text-xl hover:text-2xl"><Link href='/contact'><span className='text-red-600'>&ensp; return</span> <span>index.<span className='text-amber-600'>_Contactame</span></span></Link></div>
                    </div>
            </article>
        </Layout>
        </>
    )
}