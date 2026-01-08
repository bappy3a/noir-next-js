"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const isActiveLink = (path: string) => pathname === path;
    return (
        <>
            <nav id="navbar">
                <div className="nav-container">
                    <Link href="/" className="logo-link">
                        <svg className="logo-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: "#fff", stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: "#ff3366", stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                            <polygon points="50,10 20,50 50,90 80,50" fill="none" stroke="url(#logoGrad)" strokeWidth={3} />
                            <circle cx={50} cy={50} r={5} fill="url(#logoGrad)" />
                        </svg>
                        <span className="logo-text">NOIR</span>
                    </Link>
                    <ul className="nav-links">
                        <li>
                            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                                {isActiveLink('/') ? 'Home' : 'Home'}
                            </Link>
                        </li>
                        <li>
                            <Link href="/collections" className={`nav-link ${isActive('/collections') ? 'active' : ''}`}>
                                {isActiveLink('/collections') ? 'Collections' : 'Collections'}
                            </Link>
                        </li>
                        <li>
                            <Link href="/featured" className={`nav-link ${isActive('/featured') ? 'active' : ''}`}>
                                {isActiveLink('/featured') ? 'Featured' : 'Featured'}
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={`nav-cta ${isActive('/contact') ? 'active' : ''}`}>
                                {isActiveLink('/contact') ? 'Get In Touch' : 'Get In Touch'}
                            </Link>
                        </li>
                    </ul>
                    <div className="menu-toggle" id="menuToggle">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </nav>
            <div className="mobile-nav" id="mobileNav">
                <ul className="mobile-nav-links">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/collections">Collections</Link>
                    </li>
                    <li>
                        <Link href="/featured">Featured</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
