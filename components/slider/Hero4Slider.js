// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";

const slidesData = [
    {
        img: "/assets/imgs/page/homepage1/plane.png",
        alt: "Air Freight (Exports)",
        title: "Air Freight (Exports)",
        desc: "Fast, predictable, and dedicated pharma-handling expertise with strong partnerships with global carriers. We deliver reliable pharmaceutical logistics solutions via air.",
    },
    {
        img: "/assets/imgs/page/homepage1/cargo-ship.png",
        alt: "Sea Freight (Exports)",
        title: "Sea Freight (Exports)",
        desc: "Reliable ocean freight forwarding and global shipping support for LCL, FCL, and non-containerized cargo.",
    },
    {
        img: "/assets/imgs/page/homepage1/delivery.png",
        alt: "Customs Clearance",
        title: "Customs Clearance",
        desc: "Efficient and fast customs management for time-sensitive pharma cargo for both air and sea shipments. We are known for our reliable regulatory compliance.",
    },
    {
        img: "/assets/imgs/page/homepage1/plane.png",
        alt: "Air Freight (Exports)",
        title: "Air Freight (Exports)",
        desc: "Fast, predictable, and dedicated pharma-handling expertise with strong partnerships with global carriers. We deliver reliable pharmaceutical logistics solutions via air.",
    },
    {
        img: "/assets/imgs/page/homepage1/cargo-ship.png",
        alt: "Sea Freight (Exports)",
        title: "Sea Freight (Exports)",
        desc: "Reliable ocean freight forwarding and global shipping support for LCL, FCL, and non-containerized cargo.",
    },
    {
        img: "/assets/imgs/page/homepage1/delivery.png",
        alt: "Customs Clearance",
        title: "Customs Clearance",
        desc: "Efficient and fast customs management for time-sensitive pharma cargo for both air and sea shipments. We are known for our reliable regulatory compliance.",
    },
]

export default function Hero4Slider() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-banner'
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                {slidesData.map((slide, idx) => (
                    <SwiperSlide className="wow animate__animated animate__fadeIn" key={idx}>
                        <div 
                            className="card-offer hover-up" 
                            style={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'stretch',
                                minHeight: 300,
                            }}
                        >
                            <div className="card-image" style={{ flex: '0 0 auto' }}>
                                <img src={slide.img} alt={slide.alt} />
                            </div>
                            <div 
                                className="card-info"
                                style={{
                                    flex: '1 1 auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <h5 className="color-brand-2 mb-15">{slide.title}</h5>
                                <p className="font-sm color-grey-900 mb-35" style={{flex: '1 0 auto'}}>
                                    {slide.desc}
                                </p>
                                <div className="box-button-offer mb-30" style={{marginTop: 'auto'}}>
                                    <a className="btn btn-link font-sm color-brand-2">
                                        View Details
                                        <span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination swiper-pagination-banner swiper-pagination-style-2 swiper-pagination-group-4">
            </div>
        </>
    )
}
