import Link from "next/link"


export default function ProjectBlock({title, link, desc}){
    return(
        <div className="project-block">
            <div style={{display:"flex", alignItems:"baseline", gap:"1rem"}}>
                <h2>{title}</h2>
                <Link href={link}>See more &rarr;</Link>
            </div>
            <p>{desc}</p>
        </div>
    )
}