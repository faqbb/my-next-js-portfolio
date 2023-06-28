import getLatestCommits from "@/app/utils/ghAppUtils.mjs";
import { useEffect, useState } from "react";



export default function CommitList  () {
    
    const [commitList, setCommitList] = useState([])
    useEffect(() => {
        getLatestCommits(setCommitList)
    }, [])
   
    return ( 
            <ul className="flex flex-col commitList text-xl xl:text-xl">
                { commitList.map((commit) => {
                    return (
                        <li key={commit.id} className="commitItem font-montserrat font-extralight italic px-10 xl:px-0">En el repositorio <span className="text-amber-500">{commit.repo}</span > hice el commit <span className="text-red-500"> {commit.message}</span> en la fecha: <span className="text-cyan-600" >{commit.date}</span></li>
                    )
                })}
            </ul>
    )
}