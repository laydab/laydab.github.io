import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
    const ref = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.footer__content', {
                scrollTrigger: { trigger: '.footer', start: 'top 92%' },
                y: 20, opacity: 0, duration: 0.6, ease: 'power2.out'
            })
        }, ref)
        return () => ctx.revert()
    }, [])

    return (
        <footer className="footer" ref={ref}>
            <div className="footer__content">
                <div className="footer__socials">
                    <a href="mailto:aydenbadyal@gmail.com" className="social-icon" aria-label="Email">
                        <i className="fa-solid fa-envelope" />
                    </a>
                    <a href="https://www.linkedin.com/in/ayden-badyal-a5bb82306/" target="_blank" rel="noopener" className="social-icon" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="https://github.com/laydab" target="_blank" rel="noopener" className="social-icon" aria-label="GitHub">
                        <i className="fa-brands fa-github" />
                    </a>
                </div>
                <p className="footer__text">Designed &amp; built by <strong>Ayden Badyal</strong></p>
                <p className="footer__copy">&copy; 2026 All rights reserved.</p>
            </div>
        </footer>
    )
}
