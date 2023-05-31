'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Hamburger from 'hamburger-react'
import { useState } from "react";

export default function Header(){

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
// simpler to implement than a map given there are only a few menu options
    return(
        <header>
            <nav className="nav">
                {(pathname === "/") ?(
                    <h1 className="site-title">Adi Arora</h1>
                ):(
                    <Link href="/"><h1 >Adi Arora</h1></Link>
                )}
                <ul onClick={() => setIsOpen(false)} className={`site-nav ${isOpen ? 'show' : ''}`}>

                    {(pathname === "/projects") ? (<li className="active"><Link href="/projects">Projects</Link></li>
                    ) : (
                    <li><Link href="/projects">Projects</Link></li>
                    )}

                    {(pathname === "/blog") ? (<li className="active"><Link href="/blog">Blog</Link></li>
                    ) : (
                    <li><Link href="/blog">Blog</Link></li>
                    )}

                    {(pathname === "/more") ? (<li className="active"><Link href="/more">More</Link></li>
                    ) : (
                    <li><Link href="/more">More</Link></li>
                    )}
                </ul>
                <button  className="open-btn" onClick={() => setIsOpen(!isOpen)}>
                    <Hamburger direction="right" toggled={isOpen} toggle={setIsOpen} onToggle={toggled => setIsOpen(toggled)}/>
                </button>
            </nav>
        </header>
        
        
        
    )
}
