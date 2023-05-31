import Link from "next/link"

export default function BlogPost({title, link, date}){
    return(
        <div className="blog-post">
            <div>
                <h2><Link href={link}>{title}</Link></h2>
            </div>
            <p>{date}</p>
        </div>
    )
}