import Layout from "@/app/layout";
import Sidebar from "../app/components/partials/sidebar";
import { Button } from "antd";


export default function Myprojects() {
    return (
        <Layout>       
            <Sidebar active="myprojects"></Sidebar>
            <article className="mainArticle">
                <div>
                    <div className="projectItem text-center flex items-center place-content-center">
                        <img className="flex projectPic absolute" src="/images/projectsBg/portfolio.jpeg"></img>
                        <p className="absolute text-2xl">Este portafolio</p>
                        <div className="picOverlay">
                            <div className="font-montserrat font-extralight italic flex flex-col items-center pt-5">
                                Hecho con: 
                                <ul className="p-2">
                                    <li>NextJs</li>
                                    <li>Tailwind</li>
                                </ul>
                                <img src='/images/jsIcon.png' className="w-10 h-10"></img>
                                <Button type='dashed' className="mt-5 text-white " icon={<img src="/images/githubIcon.png" className="w-4 h-4"></img>}>Ver en Github</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    )
}