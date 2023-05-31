import styles from './page.module.css'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <main>
        <div className='hero'>
          <div className='hero-content'>
            <p>A 2nd year computer science undergrad who&apos;s curious about AI & Finance. <span className='highlight'><Link href="/more">I love building things, being outdoors and people.</Link></span>
                <br></br><b>Currently</b> I&apos;m learning about & building automated trading models. I&apos;m also freelancing web development for small businesses(creating websites, automated workflows & CRM&apos;s).
                <br></br><b>In the past</b> I&apos;ve built & launched web apps such <Link href="/projects">MoonBets, DeepDive & PocketGPT.</Link> User-facing apps utilizing either Data Modeling or AI.</p> 
          </div>
        </div>
      
    </main>
  )
}
