import { useEffect, useState } from "react"

export default function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    })

    const onScroll = () => {
        if (window.scrollY > 100 && !hasScrolled) {
            setHasScrolled(true)
        } else if (window.scrollY < 100 && hasScrolled) {
            setHasScrolled(false)
        }
    }

    const scrollToTop = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {hasScrolled && (
                <a 
                    id="scrollUp" 
                    href="#top" 
                    onClick={scrollToTop}
                    style={{ 
                        position: 'fixed', 
                        zIndex: 2147483647,
                        bottom: '30px',
                        right: '30px',
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#ffe799',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#ffd966'
                        e.target.style.transform = 'translateY(-3px)'
                        e.target.style.boxShadow = '0px 6px 16px rgba(0, 0, 0, 0.2)'
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#ffe799'
                        e.target.style.transform = 'translateY(0)'
                        e.target.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.15)'
                    }}
                >
                    <svg 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg" 
                        aria-hidden="true"
                        style={{ width: '24px', height: '24px', color: '#000' }}
                    >
                        <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                    </svg>
                </a>
            )}
        </>
    )
}