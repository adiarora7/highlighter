import './globals.css'
import Header from '../components/header'
import Footer from '../components/footer'

export const metadata = {
  title: 'Adi Arora',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <nav>
            <Header/>
          </nav>
          {children}
          <hr className="solid"></hr>
          <Footer/>
        </main>
      </body>
    </html>
  )
}
