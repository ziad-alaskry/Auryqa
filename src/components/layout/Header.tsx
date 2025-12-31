import Link from "next/link"
import {useRouter} from 'next/router'
import {navigation} from '@/data/navigation'
import Container from "../ui/Container"


export default function Header() {

    const router = useRouter()

    return (
        <header className="border-b border-silver/5">
            <Container>
                <div className="flex items-center justify-between py-8">
                    <Link href='/' className="text-lg tracking-wide">
                        AURYQA
                    </Link>

                    <nav className="hidden md:flex gap-10 text-sm text-steel">
                        {navigation.map((item) => {
                            const isActive = router.pathname.startsWith(item.href)
                            return (
                                <Link
                                key={item.href}
                                href={item.href}
                                className={`transition ${isActive ? 'text-silver' : 'hover:text-silver'}`}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </Container>
        </header>
    )
}



/**
 * <header className="mx-auto max-w-7xl px-6 py-8 flex justify-between items-center">
            <span className="tracking-wide text-lg">AURYQA</span>
            <nav className="hidden md:flex gap-10 text-sm text-steel">
                <span className="hover:text-silver transition">Devices</span>
                <span className="hover:text-silver transition">Services</span>
                <span className="hover:text-silver transition">Design</span>
                <span className="hover:text-silver transition">Contact</span>
            </nav>
        </header>
    
 */