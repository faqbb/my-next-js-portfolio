import Sidebar from "./sidebar";

export default function FrontPage({children}) {
    return (
        <>
            <Sidebar></Sidebar>
            <article className="frontPage flex text-center  justify-center">
                    <div className="welcome">¡Bienvenidos!</div>
                    <div></div>
            </article>
        </>
    )
}