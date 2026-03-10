import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
    // Languages
    { name: 'Python', icon: 'python/python-original', category: 'lang' },
    { name: 'JavaScript', icon: 'javascript/javascript-original', category: 'lang' },
    { name: 'TypeScript', icon: 'typescript/typescript-original', category: 'lang' },
    { name: 'Java', icon: 'java/java-original', category: 'lang' },
    { name: 'C++', icon: 'cplusplus/cplusplus-original', category: 'lang' },
    { name: 'C', icon: 'c/c-original', category: 'lang' },
    { name: 'R', icon: 'r/r-original', category: 'lang' },
    { name: 'HTML', icon: 'html5/html5-original', category: 'lang' },
    { name: 'CSS', icon: 'css3/css3-original', category: 'lang' },
    { name: 'SQL', icon: 'azuresqldatabase/azuresqldatabase-original', category: 'lang' },
    { name: 'Assembly', icon: 'wasm/wasm-original', category: 'lang' },
    // Frameworks
    { name: 'React', icon: 'react/react-original', category: 'fw' },
    { name: 'Next.js', icon: 'nextjs/nextjs-original', category: 'fw' },
    { name: 'FastAPI', icon: 'fastapi/fastapi-original', category: 'fw' },
    { name: 'Spring Boot', icon: 'spring/spring-original', category: 'fw' },
    { name: 'TailwindCSS', icon: 'tailwindcss/tailwindcss-original', category: 'fw' },
    { name: 'Pandas', icon: 'pandas/pandas-original', category: 'fw' },
    { name: 'NumPy', icon: 'numpy/numpy-original', category: 'fw' },
    { name: 'scikit-learn', icon: 'scikitlearn/scikitlearn-original', category: 'fw' },
    { name: 'OpenCV', icon: 'opencv/opencv-original', category: 'fw' },
    // Tools
    { name: 'Git', icon: 'git/git-original', category: 'tool' },
    { name: 'GitHub', icon: 'github/github-original', category: 'tool' },
    { name: 'Docker', icon: 'docker/docker-original', category: 'tool' },
    { name: 'Linux', icon: 'linux/linux-original', category: 'tool' },
    { name: 'VS Code', icon: 'vscode/vscode-original', category: 'tool' },
    { name: 'Figma', icon: 'figma/figma-original', category: 'tool' },
    { name: 'Vercel', icon: 'vercel/vercel-original', category: 'tool' },
    { name: 'Gradle', icon: 'gradle/gradle-original', category: 'tool' },
    { name: 'CMake', icon: 'cmake/cmake-original', category: 'tool' },
]

const iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/'

const categoryLabels = {
    lang: { label: 'Languages', icon: 'fa-solid fa-terminal' },
    fw: { label: 'Frameworks & Libraries', icon: 'fa-solid fa-cubes' },
    tool: { label: 'Tools & Platforms', icon: 'fa-solid fa-gear' },
}

export default function Skills() {
    const ref = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.skills .section__label, .skills .section__title', {
                scrollTrigger: { trigger: '.skills', start: 'top 80%' },
                y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out'
            })

            // Animate category headers
            gsap.from('.skills-row__label', {
                scrollTrigger: { trigger: '.skills-grid', start: 'top 82%' },
                x: -20, opacity: 0, duration: 0.5, stagger: 0.15, ease: 'power2.out'
            })

            // Animate each pill with a rolling stagger
            gsap.from('.skill-pill', {
                scrollTrigger: { trigger: '.skills-grid', start: 'top 80%' },
                y: 16, opacity: 0, duration: 0.35, stagger: 0.025, ease: 'back.out(1.3)',
                delay: 0.2
            })
        }, ref)

        return () => ctx.revert()
    }, [])

    const grouped = {
        lang: skills.filter(s => s.category === 'lang'),
        fw: skills.filter(s => s.category === 'fw'),
        tool: skills.filter(s => s.category === 'tool'),
    }

    return (
        <section id="skills" className="section skills" ref={ref}>
            <p className="section__label">04 / Skills</p>
            <h2 className="section__title">Tools &amp; Technologies</h2>

            <div className="skills-grid">
                {Object.entries(grouped).map(([key, items]) => (
                    <div className="skills-row" key={key}>
                        <div className="skills-row__label">
                            <i className={categoryLabels[key].icon} />
                            <span>{categoryLabels[key].label}</span>
                        </div>
                        <div className="skills-row__pills">
                            {items.map(item => (
                                <div className="skill-pill" key={item.name}>
                                    <img
                                        src={`${iconBase}${item.icon}.svg`}
                                        alt={item.name}
                                        loading="lazy"
                                    />
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
