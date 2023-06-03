import Sidebar from "./partials/sidebar";
import Link from "next/link";
export default function FrontPage() {
    return (
        <>
            <Sidebar></Sidebar>
            <article className="frontPage flex text-center flex-col items-center">
                    <div className="welcome">&#60;<span className="text-cyan-500">title</span>&#62;¡Bienvenidos!&#60;<span className="text-cyan-500">title</span>&#62;</div>
                    <div className="flex flex-col buttonList">
                        <button  className="buttonFP hover:text-4xl"><Link href='aboutme'><span className='text-red-600'>&ensp; return</span> <span>index.<span className='text-amber-600'>_AcercaDeMi</span></span></Link></button>
                        <button className="buttonFP hover:text-4xl"><Link href='/myprojects'><span className='text-red-600'>&ensp; return</span> <span>index.<span className='text-amber-600'>_MisProyectos</span></span></Link></button>
                        <button className="buttonFP hover:text-4xl"><Link href='/contact'><span className='text-red-600'>&ensp; return</span> <span>index.<span className='text-amber-600'>_Contactame</span></span></Link></button>
                    </div>
            </article>
        </>
    )
}