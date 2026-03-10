import { useEffect, useRef } from 'react'

export default function Cursor() {
    const cursorRef = useRef(null)

    useEffect(() => {
        const cursor = cursorRef.current
        if (!cursor || window.innerWidth <= 768) {
            if (cursor) cursor.style.display = 'none'
            return
        }

        let mouseX = -100, mouseY = -100
        let cursorX = -100, cursorY = -100

        const onMouseMove = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY
        }

        const animate = () => {
            cursorX += (mouseX - cursorX) * 0.15
            cursorY += (mouseY - cursorY) * 0.15
            cursor.style.left = cursorX + 'px'
            cursor.style.top = cursorY + 'px'
            requestAnimationFrame(animate)
        }

        const addHover = () => cursor.classList.add('hovered')
        const removeHover = () => cursor.classList.remove('hovered')

        document.addEventListener('mousemove', onMouseMove)
        animate()

        // Add hover class for interactive elements
        const setupHovers = () => {
            const targets = document.querySelectorAll('a, button, .project, .stat, .skill-chip')
            targets.forEach(el => {
                el.addEventListener('mouseenter', addHover)
                el.addEventListener('mouseleave', removeHover)
            })
        }

        // Run after a short delay so all components have mounted
        const timeout = setTimeout(setupHovers, 500)

        // Re-setup on DOM changes
        const observer = new MutationObserver(setupHovers)
        observer.observe(document.body, { childList: true, subtree: true })

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            clearTimeout(timeout)
            observer.disconnect()
        }
    }, [])

    return <div className="custom-cursor" ref={cursorRef} />
}
