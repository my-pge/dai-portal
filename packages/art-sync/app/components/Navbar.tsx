import { useState } from 'react'
import Link from 'next/link'
import './navbar.css';
import { usePathname } from 'next/navigation';


export function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    const NavLink = ({ href, children }: { href: string; children: JSX.Element }) => {
        const pathname = usePathname();
        const isActive = pathname === href || (pathname.includes(href) && href !== "/");

        return (
            <Link href={href} className={isActive ? 'active' : ''}>
                {children}
            </Link>
        );
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <img src="burger-menu.svg" alt="logo" width="40px" height="40px" />
                </div>
                <div style={{ display: 'grid' }}>
                    <span className="inline-flex align-items-center gap-1 px-2 py-2">
                        <img src="pge logo square.png" alt="logo" width="40px" height="40px" />
                        <span className="font-medium text-xl font-semibold">
                            DA&I <span className="text-primary">ART Sync</span>
                        </span>
                        {/* <button className={`filter-icon py-2 ${leftVisible ? 'rotate-180' : 'rotate-0'}`} onClick={handleClick}>
                                <img src="./expand-icon.svg" alt="expand icon" /></button> */}
                    </span>
                </div>

                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink href="/"><span>1:3:10</span></NavLink>
                        </li>
                        <li>
                            <NavLink href="/products"><span>Products</span></NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
