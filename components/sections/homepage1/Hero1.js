import Hero1Slider from "@/components/slider/Hero1Slider";
// import Hero4Slider from "@/components/slider/Hero4Slider";
export default function Hero1() {
    return (
        <>
            <section className="section d-block" style={{ padding: 0, margin: 0 }}>
                <div className="box-swiper" style={{ height: '100vh', minHeight: '100vh' }}>
                    <div className="swiper-container swiper-group-1 swiper-banner-1" style={{ height: '100%' }}>
                        <Hero1Slider/>
                    </div>
                </div>
                {/* <div className="box-slider-homepage2 box-slider-homepage-4">
                    <div className="container">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-4 swiper-group-3-style-2">
                                <Hero4Slider />
                            </div>
                            <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-style-2 swiper-button-prev-group-4">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                            </div>
                            <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-style-2 swiper-button-next-group-4">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    )
}
