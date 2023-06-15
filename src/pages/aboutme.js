import Layout from "@/app/layout";
import Sidebar from "../app/components/partials/sidebar";
import Image from "next/image";


export default function AboutMe() {
    return (
        <Layout>       
            <Sidebar active="aboutme"></Sidebar>
            <article className="mainArticle items-center flex flex-col ">
            <h2 className="title">&#60;<span className="text-cyan-500">title</span>&#62;Acerca de mi&#60;<span className="text-cyan-500">title</span>&#62;</h2>
                <div className="flex aboutMeContainer">
                    <div className=" text-xl text-center flex flex-col items-center pe-7">
                        <Image src='/images/code.png' width={100} height={100} className="pb-5 pt-10"></Image>
                        <div className="font-montserrat font-extralight italic">Soy graduado de la carrera Full-Stack de Coderhouse que me introdujo al mundo del desarrollo, ahora mismo me encuentro ampliando mis conocimientos con nuevas tecnologias.<br></br> Adoro el codigo, me motivan los proyectos creativos y ambiciosos que supongan un desafío.<br></br> ¡Trabajemos juntos!</div>
                    </div>
                    <div className="text-4xl px-5 text-center flex flex-col items-center">
                        <div>¡Hola! <br></br>Mi nombre es Facundo Barberia y soy un desarrollador full-stack viviendo en Tandil, Buenos Aires.</div>
                        <Image src='/images/hi.png' width={100} height={100} className="pt-5"></Image>
                    </div>
                    <div className="text-xl text-center flex flex-col items-center">
                        <Image src='/images/goal.png' width={100} height={100} className="pb-5 pt-10"></Image>
                        <div className="font-montserrat font-extralight italic">Aspiro a crecer como profesional y conocer a gente con los mismos objetivos que yo, formar parte de un grupo de trabajo y de un proyecto significativo que requiera de mi participación</div>
                    </div>
                </div>
            </article>
        </Layout>
    )
}