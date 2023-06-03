import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar({active}) {
    return (
        <>
        <aside className='flex-col fixed sidebar'>
          <div className='self-center text-center items-center flex flex-col mb-8'>
            <Image src="/../public/images/profilePic.jpg" width={211} height={1} className='profilePic flex'></Image>
            <h1 className='font-montserrat font-extrabold name flex'>Facundo Barberia</h1>
            <h2 className='font-montserrat font-normal'>Desarrollador Full-Stack</h2>
          </div>
          <div className='self-center flex mt-8 pt-5'>
            <div className='indexList'>
              <p className='font-montserrat font-extralight italic'><span className='text-red-600'>Import</span> <span className='text-amber-300'>&#123;</span> data <span className='text-amber-300'> &#125;</span> <span className='text-red-600'> from </span> <span className='text-cyan-500'>‘../perfil/info.js’</span></p>
              <br></br>
              <p className='font-montserrat font-extralight italic'><span className='text-red-600'>const</span> index <span className='text-red-600'>=</span> data</p>
              <br></br>
              <span className='font-montserrat font-extralight italic'><span className='text-red-600'>const</span><span> showIndex</span><span className='text-red-600'> =</span> <span className='text-amber-300'>&#40;&#41;</span><span className='text-red-600'> =&#62;</span> <span className='text-amber-300'>&#40;</span></span>
                <ul className='font-montserrat font-extralight italic'>
                  <li className='hover:text-3xl'><Link href='/aboutme'><span className={active == "aboutme" ? "text-red-600" : "invisible"}>&ensp; return</span> <span>index.<span className='text-amber-600'>_AcercaDeMi</span></span></Link></li>
                  <li className='hover:text-3xl'><Link href='/myprojects'><span className={active == "myprojects" ? "text-red-600" : "invisible"}>&ensp; return</span> <span>index.<span className='text-amber-600'>_MisProyectos</span></span></Link></li>
                  <li className='hover:text-3xl'><Link href='/contact'><span className={active == "contact" ? "text-red-600" : "invisible"}>&ensp; return</span> <span>index.<span className='text-amber-600'>_Contactame</span></span></Link></li>
                  <li className='text-amber-300'>&#41;</li>
                </ul>
            </div>
          </div>
        </aside>
        </>
    )
}