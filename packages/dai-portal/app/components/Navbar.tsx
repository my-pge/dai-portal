/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Link from 'next/link'
import './navbar.css';
import { usePathname } from 'next/navigation';


export function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
    const pathname = usePathname();
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    const NavLink = ({ href, children }: { href: string; children: JSX.Element }) => {

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
                    <img src="../burger-menu.svg" alt="logo" width="40px" height="40px" />
                </div>
                <div style={{ display: 'grid' }}>
                    <span className="inline-flex align-items-center gap-1 px-2 py-2">
                        <Link href="/" ><img src="../pge logo square.png" alt="logo" width="40px" height="40px" /></Link>
                        <span className="font-medium text-xl font-semibold">
                            DA&I <span className="text-primary">Portal</span>
                        </span>
                        {/* <button className={`filter-icon py-2 ${leftVisible ? 'rotate-180' : 'rotate-0'}`} onClick={handleClick}>
                                <img src="./expand-icon.svg" alt="expand icon" /></button> */}
                    </span>
                </div>

                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink href="/"><span>Home</span></NavLink>
                        </li>
                        <li>
                            <NavLink href="/services"><span>Services</span></NavLink>
                        </li>
                        <li>
                            <NavLink href="/products"><span>Products</span></NavLink>
                        </li>
                        <li>
                            <NavLink href="/faqs"><span>FAQs</span></NavLink>
                        </li>
                        <li>
                            <NavLink href="/dataResources"><span>Data Resources</span></NavLink>
                        </li>
                        {pathname === "/" ?
                            <li>
                                <NavLink href="/#highlights"><span>Highlights</span></NavLink>
                            </li> : ""
                        }
                    </ul>
                </div>
                <div className='mt-0' style={{ marginLeft: 'auto', marginRight: '0' }}>
                    <a href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514" target="new"><button className='flex help-button text-white font-semibold'
                    ><i className="px-2 pi pi-question-circle" style={{ fontSize: '1.25rem' }}></i>
                        <span className='text-sm' >Need Urgent Help now?</span></button></a>
                </div>
            </div>
        </nav >
    )
}
