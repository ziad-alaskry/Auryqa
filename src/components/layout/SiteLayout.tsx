import Header from "./Header"
import Footer from './Footer'

interface Props {
    children: React.ReactNode
}

export default function SiteLayout ({children}:Props) {
    return (
        <div className="min-h-screen bg-black text-silver">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}