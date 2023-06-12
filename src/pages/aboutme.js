import Layout from "@/app/layout";
import Sidebar from "../app/components/partials/sidebar";
import Image from "next/image";


export default function AboutMe() {
    return (
        <Layout>       
            <Sidebar active="aboutme"></Sidebar>
            <article className="mainArticle">
                <div className="flex aboutMeContainer">
                    <div className=" text-2xl text-center flex flex-col items-center pe-7">
                        <Image src='/images/hi.png' width={100} height={100} className="pb-5"></Image>
                        <div>¡Hola! Mi nombre es Facundo Barberia y soy un desarrollador full-stack viviendo en Tandil, Buenos Aires. <br></br> ¡Trabajemos juntos!</div>
                    </div>
                    <div className="text-2xl px-5 text-center flex flex-col items-center">
                        <div>Soy graduado de la carrera Full-Stack de Coderhouse que me introdujo al mundo del desarrollo, ahora mismo me encuentro ampliando mis conocimientos con nuevas tecnologias.<br></br> Adoro el codigo, me motivan los proyectos creativos y ambiciosos que supongan un desafío.</div>
                        <Image src='/images/code.png' width={100} height={100} className="pb-5"></Image>
                    </div>
                    <div className="text-2xl text-center flex flex-col items-center">
                        <Image src='/images/goal.png' width={100} height={100} className="pb-5"></Image>
                        <div>Aspiro a crecer como profesional y conocer a gente con los mismos objetivos que yo, formar parte de un grupo de trabajo y de un proyecto significativo que requiera de mi participación</div>
                    </div>
                </div>
            </article>
        </Layout>
    )
}