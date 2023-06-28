import Layout from "@/app/layout";
import Sidebar from "../app/components/partials/sidebar";
import Image from "next/image";
import HeadPartial from "@/app/components/partials/head";


export default function AboutMe() {
    return (
        <Layout>
            <HeadPartial></HeadPartial>     
            <Sidebar active="aboutme"></Sidebar>
            <article className="mainArticle items-center flex flex-col xl:flex-initial pt-5 h-full max-h-full sm:h-screen text-white">
            <h2 className="text-2xl xl:text-6xl text-center font-montserrat font-extrabold">&#60;<span className="text-cyan-400">title</span>&#62;Acerca de mi&#60;<span className="text-cyan-400">title</span>&#62;</h2>
                <div className="flex w-full pt-24 px-2 flex-col xl:flex-row font-montserrat" >
                <div className="text-3xl xl:text-4xl px-5 text-center flex flex-col items-center">
                        <div>¡Hola! <br></br>Mi nombre es Facundo Barberia y soy un desarrollador full-stack viviendo en Tandil, Buenos Aires.</div>
                        <Image src='/images/hi.png' width={100} height={100} className="pt-5"></Image>
                    </div>
                    <div className=" text-xl text-center flex flex-col-reverse items-center px-7 xl:flex-col pt-11 xl:pt-0">
                        <Image src='/images/code.png' width={100} height={100} className="pb-5 pt-10"></Image>
                        <div className="font-montserrat font-extralight italic">Soy graduado de la carrera Full-Stack de Coderhouse que me introdujo al mundo del desarrollo, ahora mismo me encuentro ampliando mis conocimientos con nuevas tecnologias.<br></br> Adoro el codigo, me motivan los proyectos creativos y ambiciosos que supongan un desafío.<br></br> ¡Trabajemos juntos!</div>
                    </div>
                    <div className="text-xl text-center flex flex-col-reverse items-center pt-3 xl:flex-col xl:pt-0">
                        <Image src='/images/goal.png' width={100} height={100} className="pb-5 pt-10"></Image>
                        <div className="font-montserrat font-extralight italic">Aspiro a crecer como profesional y conocer a gente con los mismos objetivos que yo, formar parte de un grupo de trabajo y de un proyecto significativo que requiera de mi participación</div>
                    </div>
                </div>
            </article>
        </Layout>
    )
}