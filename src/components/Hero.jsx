import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const roles = [
    'Software Developer',
    'Full Stack Engineer',
    'Data Engineer',
    'Cybersecurity Enthusiast',
    'Problem Solver',
]

export default function Hero() {
    const nameRef = useRef(null)
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.4 })

            // Name text reveal
            tl.to('.hero__name-text', {
                y: 0,
                duration: 1,
                stagger: 0.12,
                ease: 'power3.out',
            })
                .to('.hero__label', { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.6')
                .to('.hero__subtitle', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.3')
                .to('.hero__actions', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
                .to('.hero__socials', { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2')
                .to('.hero__scroll', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.2')
        }, sectionRef)

        // Typing effect
        let roleIdx = 0
        let charIdx = 0
        let deleting = false
        const typedEl = document.getElementById('hero-typed')
        let timeout

        function type() {
            const role = roles[roleIdx]
            if (!deleting) {
                if (typedEl) typedEl.textContent = role.slice(0, charIdx + 1)
                charIdx++
                if (charIdx >= role.length) {
                    deleting = true
                    timeout = setTimeout(type, 2000)
                    return
                }
                timeout = setTimeout(type, 70)
            } else {
                if (typedEl) typedEl.textContent = role.slice(0, charIdx)
                charIdx--
                if (charIdx < 0) {
                    deleting = false
                    charIdx = 0
                    roleIdx = (roleIdx + 1) % roles.length
                    timeout = setTimeout(type, 400)
                    return
                }
                timeout = setTimeout(type, 35)
            }
        }
        timeout = setTimeout(type, 1800)

        return () => {
            ctx.revert()
            clearTimeout(timeout)
        }
    }, [])

    return (
        <section id="hero" className="hero" ref={sectionRef}>
            <div className="hero__content">
                <p className="hero__label">// portfolio</p>

                <h1 className="hero__name" ref={nameRef}>
                    <span className="hero__name-line">
                        <span className="hero__name-text">Ayden</span>
                    </span>
                    <span className="hero__name-line">
                        <span className="hero__name-text">Badyal<span className="accent-dot">.</span></span>
                    </span>
                </h1>

                <p className="hero__subtitle" style={{ transform: 'translateY(20px)' }}>
                    Building robust software &amp; exploring cybersecurity.{' '}
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9em', color: 'var(--accent)' }}>
                        <span id="hero-typed"></span>
                        <span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
                    </span>
                </p>

                <div className="hero__actions" style={{ transform: 'translateY(20px)' }}>
                    <a href="/assets/Ayden_Badyal_Resume.pdf" target="_blank" rel="noopener" className="btn btn--primary">
                        <i className="fa-solid fa-arrow-down" /> Resume
                    </a>
                    <a href="#projects" className="btn btn--ghost" onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                    }}>
                        View Work →
                    </a>
                </div>

                <div className="hero__socials">
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
            </div>

            <div className="hero__scroll">
                <span className="hero__scroll-text">scroll</span>
                <div className="hero__scroll-line" />
            </div>

            <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
        </section>
    )
}
