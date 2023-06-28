import Image from 'next/image'
import Link from 'next/link'


export default function Sidebar({active}) {
    return (
        <>
        <aside className='flex-col fixed sidebar  text-white'>
          <div className='self-center text-center items-center flex flex-col mb-0 xl:mb-8 '>
            <Link href='/' className='justify-center flex '>
              <Image src="/images/profilePic.png" width={211} height={1} className='profilePic flex ' alt='My profile pic'></Image>
            </Link>
            <h1 className='font-montserrat font-extrabold text-2xl flex xl:text-4xl'>Facundo Barberia</h1>
            <h2 className='font-montserrat font-normal text-xl xl:text-2xl'>Desarrollador Full-Stack</h2>
          </div>
          <div className='flex justify-center xl:hidden'>
            <ul className='font-montserrat font-extralight italic pt-7'>
                  <li><Link href='/aboutme'><span className={active == "aboutme" ? "text-red-500" : "invisible"}>&ensp; return</span> <span>index.<span className='text-amber-500'>_AcercaDeMi</span></span></Link></li>
                  <li><Link href='/myprojects'><span className={active == "myprojects" ? "text-red-500" : "invisible"}>&ensp; return</span> <span>index.<span className='text-amber-500'>_MisProyectos</span></span></Link></li>
                  <li><Link href='/contact'><span className={active == "contact" ? "text-red-500" : "invisible"}>&ensp; return</span> <span>index.<span className='text-amber-500'>_Contactame</span></span></Link></li>
                </ul>
          </div>
          <div className='self-center flex mt-8 pt-5 flex-col xl:mt-0 xl:pt-0'>
            <div className='indexList h-0 pt-0 pb-5 text-base hidden xl:h-full xl:flex xl:text-2xl xl:pt-5 xl:flex-col xl:px-5 xl:pb-0'>
              <div className='font-montserrat font-extralight italic'><span className='text-red-500'>Import</span> <span className='text-amber-300'>&#123;</span> data <span className='text-amber-300'> &#125;</span> <span className='text-red-500'> from </span> <span className='text-cyan-400'>‘../perfil/info.js’</span></div>
              <br></br>
              <div className='font-montserrat font-extralight italic'><span className='text-red-500'>const</span> index <span className='text-red-500'>=</span> data</div>
              <br></br>
              <span className='font-montserrat font-extralight italic'><span className='text-red-500'>const</span><span> showIndex</span><span className='text-red-500'> =</span> <span className='text-amber-300'>&#40;&#41;</span><span className='text-red-500'> =&#62;</span> <span className='text-amber-300'>&#40;</span></span>
                <ul className='font-montserrat font-extralight italic'>
                  <li className='xl:hover:text-3xl'><Link href='/aboutme'><span className={active == "aboutme" ? "text-red-500" : "invisible"}>&ensp; return</span> <span>index.<span className='text-amber-500'>_AcercaDeMi</span></span></Link></li>
                  <li className='xl:hover:text-3xl'><Link href='/myprojects'><span className={active == "myprojects" ? "text-red-500" : "invisible"}>&ensp; return</span> <span>index.<span className='text-amber-500'>_MisProyectos</span></span></Link></li>
                  <li className='xl:hover:text-3xl'><Link href='/contact'><span className={active == "contact" ? "text-red-500" : "invisible"}>&ensp; return</span> <span>index.<span className='text-amber-500'>_Contactame</span></span></Link></li>
                  <li className='text-amber-300'>&#41;</li>
                </ul>
            </div>
          </div>
        </aside>
        </>
    )
}