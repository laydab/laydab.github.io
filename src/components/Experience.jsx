import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const jobs = [
    {
        role: 'Bookkeeper',
        company: "Bonny's Taxi Car 40",
        date: 'Jun 2023 — Sep 2024 · Burnaby, BC',
        bullets: [
            'Managed daily financial records including earnings tracking, expense recording for fuel and maintenance, and receipt documentation',
            'Reconciled accounts regularly and prepared income summaries for tax filing and business reporting',
            'Maintained organized financial documentation ensuring accuracy and compliance',
        ],
    },
    {
        role: 'Volunteer Soccer Coach',
        company: 'Coastal FC & Royal City Soccer Club',
        date: 'Leadership & Coaching',
        bullets: [
            'Organized and led soccer training sessions and drills for youth players',
            'Provided individual guidance to improve technical and tactical skills',
            'Assisted with equipment setup, game planning, and activity coordination',
            'Ensured player safety and collaborated with staff for smooth operations',
        ],
    },
]

export default function Experience() {
    const ref = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.experience .section__label, .experience .section__title', {
                scrollTrigger: { trigger: '.experience', start: 'top 80%' },
                y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out'
            })

            gsap.from('.timeline__item', {
                scrollTrigger: { trigger: '.timeline', start: 'top 80%' },
                x: -30, opacity: 0, duration: 0.7, stagger: 0.2, ease: 'power2.out'
            })
        }, ref)

        return () => ctx.revert()
    }, [])

    return (
        <section id="experience" className="section experience" ref={ref}>
            <p className="section__label">03 / Experience</p>
            <h2 className="section__title">Work Experience</h2>

            <div className="timeline">
                {jobs.map((job, i) => (
                    <div className="timeline__item" key={i}>
                        <div className="timeline__dot" />
                        <div className="timeline__card">
                            <div className="timeline__header">
                                <h3>{job.role}</h3>
                                <span className="timeline__company">{job.company}</span>
                            </div>
                            <span className="timeline__date">{job.date}</span>
                            <ul className="timeline__details">
                                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
