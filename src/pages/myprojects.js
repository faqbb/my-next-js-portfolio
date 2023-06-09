import Layout from "@/app/layout";
import Sidebar from "../app/components/partials/sidebar";
import { Button } from "antd";
import CommitList from "@/app/components/partials/commitList";
import dynamic from "next/dynamic";
import HeadPartial from "@/app/components/partials/head";
 function Myprojects() {
    return (
        <Layout>
            <HeadPartial></HeadPartial>   
            <Sidebar active="myprojects"></Sidebar>
            <article className="mainArticle flex flex-col items-center justify-between h-full max-h-full xl:h-screen text-white">
                <h2 className="text-2xl xl:text-6xl text-center pt-10 font-montserrat font-extrabold">&#60;<span className="text-cyan-400">title</span>&#62;Mis proyectos&#60;<span className="text-cyan-400">title</span>&#62;</h2>
                    <div className="projectContainer flex-col xl:flex-row items-center">
                        <div className="projectItem text-center flex items-center place-content-center my-10 xl:my-0">
                            <img className="flex projectPic absolute" src="/images/projectsBg/portfolio.gif"></img>
                            <p className="absolute text-2xl">Este portafolio</p>
                            <Button 
                                    type='dashed' 
                                    className="mt-24 xl:hidden" 
                                    icon={<img src="/images/githubIcon.png" className="w-4 h-4"></img>} 
                                    href="https://github.com/faqbb/my-next-js-portfolio">Ver en Github
                            </Button>
                            <div className="picOverlay">
                                <div className="font-montserrat font-extralight italic flex flex-col items-center pt-5">
                                    Hecho con: 
                                    <ul className="p-2">
                                        <li>NextJs</li>
                                        <li>Tailwind</li>
                                    </ul>
                                    <img src='/images/jsIcon.png' className="w-10 h-10"></img>
                                    <Button 
                                    type='dashed' 
                                    className="mt-5 " 
                                    icon={<img src="/images/githubIcon.png" className="w-4 h-4"></img>} 
                                    href="https://github.com/faqbb/my-next-js-portfolio">Ver en Github</Button>
                                </div>
                            </div>
                        </div>
                        <div className="projectItem text-center flex items-center place-content-center my-10 xl:my-0">
                            <img className="flex projectPic absolute" src="/images/projectsBg/EEE.gif"></img>
                            <p className="absolute text-2xl">Express Ecommerce EJS</p>
                            <Button 
                                    type='dashed' 
                                    className="mt-24 xl:hidden" 
                                    icon={<img src="/images/githubIcon.png" className="w-4 h-4"></img>} 
                                    href="https://github.com/faqbb/Express-Ecommerce-Ejs">Ver en Github
                            </Button>
                            <div className="picOverlay">
                                <div className="font-montserrat font-extralight italic flex flex-col items-center pt-5 ">
                                    Hecho con: 
                                    <ul className="p-2">
                                        <li>ExpressJs</li>
                                        <li>EJS</li>
                                        <li>MongoDB</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                    <img src='/images/jsIcon.png' className="w-10 h-10"></img>
                                    <Button 
                                    type='dashed' 
                                    className="mt-2 " 
                                    icon={<img src="/images/githubIcon.png" className="w-4 h-4"></img>} 
                                    href="https://github.com/faqbb/Express-Ecommerce-Ejs">Ver en Github</Button>
                                </div>
                            </div>
                        </div>
                        <div className="projectItem text-center flex items-center place-content-center my-10 xl:my-0">
                            <img className="flex projectPic absolute" src="/images/projectsBg/adamas.gif"></img>
                            <p className="absolute text-2xl">Adamas Shop</p>
                            <Button 
                                    type='dashed' 
                                    className="mt-24 xl:hidden" 
                                    icon={<img src="/images/githubIcon.png" className="w-4 h-4"></img>} 
                                    href="https://github.com/faqbb/Adamas-Shop-2.0">Ver en Github
                            </Button>
                            <div className="picOverlay">
                                <div className="font-montserrat font-extralight italic flex flex-col items-center pt-5">
                                    Hecho con: 
                                    <ul className="p-2">
                                        <li>ReactJs</li>
                                        <li>Firebase</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                    <img src='/images/jsIcon.png' className="w-10 h-10"></img>
                                    <Button 
                                    type='dashed' 
                                    className="mt-5 " 
                                    icon={<img src="/images/githubIcon.png" className="w-4 h-4"></img>} 
                                    href="https://github.com/faqbb/Adamas-Shop-2.0">Ver en Github</Button>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <section className="pt-10 flex flex-col w-full">
                        <h2 className="text-2xl xl:text-4xl py-4 font-montserrat font-extrabold text-center">&#60;<span className="text-cyan-400">h4</span>&#62;Mis ultimos commits&#60;<span className="text-cyan-400">h4</span>&#62;</h2>
                        <div>
                            <ul>
                                <CommitList></CommitList>
                            </ul>
                        </div>
                    </section>
            </article>
            
        </Layout>
    )
}

export default dynamic (() => Promise.resolve(Myprojects), {ssr: false})