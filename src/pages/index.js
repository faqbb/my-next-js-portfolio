import Link from "next/link";
import Sidebar from "@/app/components/partials/sidebar";
import Layout from "@/app/layout";
import HeadPartial from "@/app/components/partials/head";

export default function index() {
    return (
        <> 
        <Layout>
            <HeadPartial></HeadPartial>
            <Sidebar active={'none'}></Sidebar>
            <article className="mainArticle flex text-center flex-col items-center justify-center text-white">
                    <div className="text-2xl xl:text-6xl">&#60;<span className="text-cyan-400">title</span>&#62;¡Bienvenidos!&#60;<span className="text-cyan-400">title</span>&#62;</div>
                    <div className="flex flex-col buttonList text-3xl pt-5">
                        <div className="text-xl hover:text-2xl"><Link href='aboutme'><span className='text-red-500'>&ensp; return</span> <span>index.<span className='text-amber-500'>_AcercaDeMi</span></span></Link></div>
                        <div className="text-xl hover:text-2xl"><Link href='/myprojects'><span className='text-red-500'>&ensp; return</span> <span>index.<span className='text-amber-500'>_MisProyectos</span></span></Link></div>
                        <div className="text-xl hover:text-2xl"><Link href='/contact'><span className='text-red-500'>&ensp; return</span> <span>index.<span className='text-amber-500'>_Contactame</span></span></Link></div>
                    </div>
            </article>
        </Layout>
        </>
    )
}