import Layout from "@/app/layout";
import Image from "next/image";
import Sidebar from "../app/components/partials/sidebar";
import Link from "next/link";
import { Button } from "antd";
import { useState } from "react";
import sendContactForm from '../app/utils/apiUtils'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const defaultValues = { name: "", email: "", subject: "", message: ""}
const defautState = { values : defaultValues}

export default function AboutMe() {
    const [state, setState] = useState(defautState)

    const { values, isLoading } = state

    const handleChange = ({target}) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value
        }
    }))


    const onSubmitFunc = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true
        }));
        try {
            await sendContactForm(values)
            setState(defautState)
            toast.success('¡Mail enviado!', {autoClose: 2000, position: "top-center", theme: "dark"})
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message
            }));
            toast.error('Hubo un error :(', {autoClose: 2000, position: "top-center", theme: "dark"})
        }
    }
    return ( 
        <Layout>       
            <Sidebar active="contact"></Sidebar>
            <article className="mainArticle flex flex-col justify-center h-full max-h-full sm:h-screen">
                <div className="text-center pb-7">
                    <h2 className="text-2xl xl:text-5xl py-4 font-montserrat font-extrabold">&#60;<span className="text-cyan-500">h2</span>&#62;Mis Redes&#60;<span className="text-cyan-500">h2</span>&#62;</h2>
                    <ul className="flex flex-row justify-evenly py-5">
                        <li><Link href='https://github.com/faqbb'><Image src='/images/githubIcon.png' width={100} height={100}></Image></Link></li>
                        <li><Link href='https://linkedin.com/in/facundobarberia'><Image src='/images/linkedinIcon.png' width={100} height={100}></Image></Link></li>
                    </ul>
                </div>
                <div className="text-center pt-8">
                    <h2 className="text-2xl xl:text-5xl py-4 font-montserrat font-extrabold">&#60;<span className="text-cyan-500">h2</span>&#62;¡Mandame un mail!&#60;<span className="text-cyan-500">h2</span>&#62;</h2>
                    <form id='emailData' className="flex flex-col px-12 xl:px-96">
                        <label>form.<span className='text-amber-600'>_TuCorreo</span></label>
                        <input 
                            type='text' 
                            name="name" 
                            value={values.name} 
                            onChange={handleChange}
                            className=' text-black'>
                        </input>
                        <label>form.<span className='text-amber-600'>_Asunto</span></label>
                        <input 
                            type='text' 
                            name="subject" 
                            value={values.subject} 
                            onChange={handleChange}
                            className=' text-black'>
                        </input>
                        <label>form.<span className='text-amber-600'>_Mensaje</span></label>
                        <textarea
                            type='text' 
                            name="message" 
                            value={values.message} 
                            onChange={handleChange}
                            className='h-32 text-black'
                            >
                        </textarea> 
                        <Button 
                        className="rounded-full bg-black my-5 xl:mx-48 text-white"
                        type="dashed"
                        loading={isLoading} 
                        onClick={onSubmitFunc}
                        disabled={!(values.subject && values.message && values.name)}
                        >form.<span className='text-amber-600'>_Enviar()</span></Button>    
                    </form>
                </div>
            </article>
            <ToastContainer/>
        </Layout>
    )
}