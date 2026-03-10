import { useEffect, useRef, useState } from 'react'

const links = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [hidden, setHidden] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('hero')
    const lastScroll = useRef(0)

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY
            setScrolled(y > 50)
            setHidden(y > lastScroll.current && y > 120)
            lastScroll.current = y
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Active section observer
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActive(entry.target.id)
                })
            },
            { threshold: 0.25, rootMargin: '-80px 0px 0px 0px' }
        )
        sections.forEach(s => observer.observe(s))
        return () => observer.disconnect()
    }, [])

    const handleClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}${hidden ? ' hidden' : ''} `}>
            <div className="navbar__inner">
                <a href="#hero" className="navbar__logo" onClick={(e) => handleClick(e, '#hero')}>
                    Ayden<span>.</span>
                </a>

                <ul className={`navbar__links${menuOpen ? ' open' : ''} `}>
                    {links.map(l => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className={`navbar__link${active === l.href.slice(1) ? ' active' : ''} `}
                                onClick={(e) => handleClick(e, l.href)}
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className={`navbar__hamburger${menuOpen ? ' open' : ''} `}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    )
}
