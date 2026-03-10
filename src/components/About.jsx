import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
    { value: 5, label: 'Projects Built' },
    { value: 11, label: 'Languages' },
    { value: 9, label: 'Frameworks' },
    { value: 1, label: 'Hackathon Win' },
]

export default function About() {
    const ref = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Section header
            gsap.from('.about .section__label, .about .section__title', {
                scrollTrigger: { trigger: '.about', start: 'top 80%' },
                y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out'
            })

            // Text paragraphs
            gsap.from('.about__text p', {
                scrollTrigger: { trigger: '.about__text', start: 'top 80%' },
                y: 25, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out'
            })

            // Stat cards
            gsap.from('.stat', {
                scrollTrigger: { trigger: '.about__stats', start: 'top 80%' },
                y: 30, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
                onComplete: () => {
                    document.querySelectorAll('.stat__number').forEach(el => {
                        const target = parseInt(el.dataset.target)
                        gsap.to(el, {
                            innerText: target,
                            duration: 1.2,
                            snap: { innerText: 1 },
                            ease: 'power2.out',
                        })
                    })
                }
            })

            // Education
            gsap.from('.education', {
                scrollTrigger: { trigger: '.education', start: 'top 85%' },
                y: 30, opacity: 0, duration: 0.7, ease: 'power2.out'
            })
        }, ref)

        return () => ctx.revert()
    }, [])

    return (
        <section id="about" className="section about" ref={ref}>
            <p className="section__label">01 / About</p>
            <h2 className="section__title">About Me</h2>

            <div className="about__grid">
                <div className="about__text">
                    <p>
                        I&apos;m a <strong>Computer Science: Software Systems</strong> student at{' '}
                        <strong>Simon Fraser University</strong> with a minor in Business and Math.
                        My passion sits at the intersection of software development and cybersecurity.
                    </p>
                    <p>
                        My tech journey started in high school with Java, where I built my first hangman
                        game and discovered my love for problem-solving. Since then I&apos;ve built full-stack
                        applications, data pipelines, and even won a hackathon along the way.
                    </p>
                    <p>
                        I&apos;m drawn to cybersecurity and plan to pursue it further after my degree. When
                        I&apos;m not coding, you&apos;ll find me bouldering or running — both help me
                        approach problems from new angles.
                    </p>
                </div>

                <div className="about__stats">
                    {stats.map(s => (
                        <div className="stat" key={s.label}>
                            <div className="stat__number" data-target={s.value}>0</div>
                            <div className="stat__label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="education">
                <img src="/assets/SFU_horizontal_logo_rgb.webp" alt="SFU Logo" className="education__logo" />
                <div className="education__info">
                    <h3>Simon Fraser University</h3>
                    <p className="education__degree">BSc. Computer Science: Software Systems</p>
                    <p className="education__minor">Minor in Business &amp; Math</p>
                    <p className="education__date">May 2023 — Present · Burnaby, BC</p>
                </div>
            </div>
        </section>
    )
}
