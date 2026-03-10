import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        title: 'SFU Course Map',
        badge: '🏆 Hackathon Winner',
        desc: 'Interactive course prerequisite visualization using D3.js force-directed graphs. Built a recursive API with Next.js serverless functions, regex-based parsing, quick search, and color-coded dependency chains.',
        tech: ['Next.js', 'D3.js', 'JavaScript'],
        github: 'https://github.com/laydab',
        color: '#C45D3E',
    },
    {
        title: 'Simple MapReduce',
        desc: 'Parallel distributed data processing framework using threads and synchronization primitives. Implements map and reduce functions inspired by the original MapReduce paper, processing large data sets across worker threads.',
        tech: ['C', 'Threads', 'Synchronization'],
        github: 'https://github.com/laydab',
        color: '#5A6B7A',
    },
    {
        title: 'Memory Allocator',
        desc: 'Custom memory management system implementing heap allocation with malloc/free-style operations. Uses memory management techniques like coalescing, splitting, and free-list management for efficient allocation.',
        tech: ['C', 'Systems Programming', 'GDB'],
        github: 'https://github.com/laydab',
        color: '#7A5A6B',
    },
    {
        title: 'Simple Shell',
        desc: 'Unix shell supporting foreground/background process execution, built-in commands, and command history. Uses fork, exec, and wait system calls with signal handling for process management.',
        tech: ['C', 'Unix', 'System Calls'],
        github: 'https://github.com/laydab',
        color: '#6B7A5A',
    },
    {
        title: 'Travelytics',
        desc: 'Full-stack travel analytics platform with GeoNames & OpenWeatherMap APIs for real-time demographics, weather, and air quality. API rate limiting, caching, and Agile Scrum workflow.',
        tech: ['Next.js', 'TailwindCSS', 'TypeScript'],
        github: 'https://github.com/laydab',
        color: '#7A8B6F',
    },
    {
        title: 'Stock Forecasting',
        desc: 'Random Forest regression model predicting stock prices from 4+ years of Alpaca API data. Feature engineering with moving averages, volatility, and temporal train-test validation.',
        tech: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib'],
        github: 'https://github.com/laydab',
        color: '#8B6F7A',
    },
    {
        title: 'Blockchain Explorer',
        desc: 'Blockchain exploration and analysis tool built for BUS 237. Investigates blockchain data structures, cryptographic hashing, and decentralized ledger concepts through hands-on implementation.',
        tech: ['JavaScript', 'Blockchain', 'Crypto'],
        github: 'https://github.com/laydab/BlockChainBus237',
        color: '#6F7A8B',
    },
    {
        title: 'Blanket Fort Game API',
        desc: 'REST backend for game initialization, move execution, and state retrieval. DTO serialization, strict separation of concerns, and Gradle build automation.',
        tech: ['Java', 'Spring Boot', 'REST'],
        github: 'https://github.com/laydab',
        color: '#8B7A6F',
    },
    {
        title: 'Text Math RPG',
        desc: 'Polymorphic weapon system using strategy pattern, observer-based UI separation, and refactored with composition over inheritance and null object patterns.',
        tech: ['Java', 'OOP', 'Design Patterns'],
        github: 'https://github.com/laydab',
        color: '#5A7A6B',
    },
    {
        title: 'Meal Fetcher',
        desc: 'DreamHacks 2025 — recipe search app by ingredients. Fetches from an external API and displays results in a user-friendly interface.',
        tech: ['React', 'CSS', 'Vercel'],
        github: 'https://github.com/Daniel101Shi/Meal-Fetcher-Dreamhacks-2025-',
        live: 'https://meal-fetcher-dusky.vercel.app',
        color: '#C45D3E',
    },
]

export default function Projects() {
    const ref = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.projects .section__label, .projects .section__title', {
                scrollTrigger: { trigger: '.projects', start: 'top 80%' },
                y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out'
            })

            gsap.from('.project', {
                scrollTrigger: { trigger: '.projects__track', start: 'top 85%' },
                y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out'
            })
        }, ref)

        return () => ctx.revert()
    }, [])

    return (
        <section id="projects" className="section projects" ref={ref}>
            <p className="section__label">02 / Projects</p>
            <h2 className="section__title">Featured Work</h2>

            <div className="projects__wrapper">
                <div className="projects__track">
                    {projects.map((p, i) => (
                        <article className="project" key={i}>
                            {p.badge && <div className="project__badge">{p.badge}</div>}
                            <div className="project__color-bar" style={{ background: p.color }} />
                            <div className="project__body">
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div className="project__tech">
                                    {p.tech.map(t => <span key={t}>{t}</span>)}
                                </div>
                                <div className="project__links">
                                    <a href={p.github} target="_blank" rel="noopener" className="project__link">
                                        <i className="fa-brands fa-github" /> Code
                                    </a>
                                    {p.live && (
                                        <a href={p.live} target="_blank" rel="noopener" className="project__link">
                                            <i className="fa-solid fa-arrow-up-right-from-square" /> Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className="projects__scroll-hint">
                <span>drag to explore</span>
                <div className="arrow-line" />
            </div>
        </section>
    )
}
