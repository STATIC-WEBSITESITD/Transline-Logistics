import Link from "next/link";
import { useState, useEffect } from "react";
import ModalVideo from 'react-modal-video';
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero1Slider() {
    const [isOpen, setOpen] = useState(false)
    const [displayedText, setDisplayedText] = useState("")
    const fullText = "Integrated Logistics and Specialised Cargo"
    
    useEffect(() => {
        let currentIndex = 0
        let timeoutId = null
        const typingSpeed = 100 // milliseconds per character
        const pauseAfterComplete = 2000 // pause for 2 seconds after typing is complete
        
        const typeWriter = () => {
            if (currentIndex < fullText.length) {
                setDisplayedText(fullText.substring(0, currentIndex + 1))
                currentIndex++
                timeoutId = setTimeout(typeWriter, typingSpeed)
            } else {
                // After typing is complete, wait and then restart
                timeoutId = setTimeout(() => {
                    currentIndex = 0
                    setDisplayedText("")
                    // Start typing again after a brief pause
                    setTimeout(() => {
                        typeWriter()
                    }, 300)
                }, pauseAfterComplete)
            }
        }
        
        // Start typing after a small delay to ensure page is loaded
        const initialTimer = setTimeout(() => {
            typeWriter()
        }, 500)
        
        return () => {
            clearTimeout(initialTimer)
            if (timeoutId) clearTimeout(timeoutId)
        }
    }, [])
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={800} // Smooth transition between slides (in ms)
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-banner'
                }}
                effect="slide"
                className="swiper-wrapper"
                allowTouchMove={false}
                style={{ height: '100%', width: '100%' }}
            >
                <SwiperSlide style={{ height: '100%' }}>
                    <div className="banner-1 video-banner-wrapper" style={{ 
                        position: 'relative', 
                        overflow: 'hidden',
                        height: '100vh',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 0
                    }}>
                        {/* Video Banner Replace Image */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 1,
                                minHeight: "100%",
                                minWidth: "100%"
                            }}
                        >
                            <source src="/assets/videos/banner.mp4" type="video/mp4" />
                            {/* fallback text */}
                            Your browser does not support the video tag.
                        </video>
                        {/* Overlay for darken video so text is readable */}
                        <div 
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
                                zIndex: 2
                            }}
                        />
                        <div className="container" style={{ 
                            position: "relative", 
                            zIndex: 3,
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: '80px',
                            paddingBottom: '80px'
                        }}>
                            <div className="row align-items-center justify-content-center" style={{ width: '100%' }}>
                                <div className="col-lg-10 col-xl-9 text-center">
                                    <p className="font-lg color-white mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s" style={{ 
                                        fontSize: '18px',
                                        fontWeight: '400',
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase',
                                        opacity: 0.9
                                    }}>
                                        Logistics &amp; Transportation
                                    </p>
                                    <h1 className="color-white mb-30 wow animate__animated animate__fadeInUp" data-wow-delay=".2s" style={{ 
                                        textTransform: 'uppercase',
                                        fontSize: 'clamp(32px, 5vw, 64px)',
                                        fontWeight: '700',
                                        lineHeight: '1.2',
                                        letterSpacing: '1px',
                                        marginBottom: '30px',
                                        textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
                                    }}>
                                        {displayedText ? (
                                            <>
                                                {displayedText.toUpperCase()}
                                                <span className="typewriter-cursor" style={{ 
                                                    animation: "blink 1s infinite",
                                                    marginLeft: '5px',
                                                    color: '#ffe799'
                                                }}>|</span>
                                            </>
                                        ) : (
                                            <span className="typewriter-cursor" style={{ 
                                                animation: "blink 1s infinite",
                                                color: '#ffe799'
                                            }}>|</span>
                                        )}
                                    </h1>
                                    <div className="row justify-content-center mb-40">
                                        <div className="col-lg-9 col-md-10">
                                            <p className="font-lg color-white wow animate__animated animate__fadeInUp" data-wow-delay=".3s" style={{
                                                fontSize: '18px',
                                                lineHeight: '1.8',
                                                fontWeight: '300',
                                                opacity: 0.95,
                                                textShadow: '1px 1px 4px rgba(0,0,0,0.3)'
                                            }}>
                                                India's trusted partner for high precision supply chains. We specialise in Pharma Logistics with Cold Chain strength delivering reliable Cargo solutions across Textiles, Machinery and General Cargo.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="box-button mt-40 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                                        <Link 
                                            className="btn btn-brand-1-big hover-up" 
                                            href="/about"
                                            style={{
                                                padding: '16px 40px',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                letterSpacing: '0.5px',
                                                textTransform: 'uppercase',
                                                boxShadow: '0px 8px 24px rgba(255, 231, 153, 0.3)',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            Explore More
                                        </Link>
                                    </div>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="banner-1" style={{ backgroundImage: 'url(assets/imgs/banner4.jpg)' }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <p className="font-md color-white mb-15 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">Logistics &amp; Transportation</p>
                                    <h1 className="color-white mb-25 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                                        Pioneering Pharma<br className="d-none d-lg-block" />Logistics in India
                                    </h1>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p className="font-md color-white mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                                                India's Trusted Integrated Logistics Solution Provider, Specializing in Cold Chain and Reliable Air & Sea Pharma Cargo Movement.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="box-button mt-30">
                                        <Link className="btn btn-brand-1-big hover-up mr-40 wow animate__animated animate__fadeInUp" href="/about">Explore More</Link>
                                        {<a className="btn btn-play popup-youtube hover-up wow animate__animated animate__fadeInUp" onClick={() => setOpen(true)}>
                                            <img className="wow animate__animated animate__fadeInUp" src="/assets/imgs/template/icons/play.svg" alt="" />How it work?
                                        </a>}
                                    </div>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
            <div className="swiper-pagination swiper-pagination-banner" />
        </>
    )
}
