import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Project1Slider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={3}
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
                {/*
                    Add linking using Next.js <Link>
                    Import Link from "next/link" is required for this to work at the top of this file.
                */}
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="cardGrid">
                        <div className="cardImage">
                            <a href="/air-freight">
                                <img src="/assets/imgs/img.png" alt="Air Freight (Exports)" />
                            </a>
                        </div>
                        <div className="cardInfo">
                            <h5 className="color-brand-2 mb-10">
                                <a href="/air-freight" style={{color: "inherit", textDecoration: "none"}}>Air Freight (Exports)</a>
                            </h5>
                            <p className="font-xs color-grey-500">
                                We provide fast and reliable air freight services with a strong focus on Pharma Logistics. Our team also handles urgent Cargo such as Textiles, Electronics and critical Machinery parts with the same level of precision.
                            </p>
                            <div className="box-button mt-30">
                                <a href="/air-freight" className="btn btn-link font-sm color-brand-2">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="cardGrid">
                        <div className="cardImage">
                            <a href="/sea-freight">
                                <img src="/assets/imgs/img2.png" alt="Sea Freight (Exports)" />
                            </a>
                        </div>
                        <div className="cardInfo">
                            <h5 className="color-brand-2 mb-10">
                                <a href="/sea-freight" style={{color: "inherit", textDecoration: "none"}}>Sea Freight (Exports)</a>
                            </h5>
                            <p className="font-xs color-grey-500">
                                Reliable ocean freight forwarding and global shipping support for LCL, FCL, and non-containerized cargo.
                            </p>
                            <div className="box-button mt-30">
                                <a href="/sea-freight" className="btn btn-link font-sm color-brand-2">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="cardGrid">
                        <div className="cardImage">
                            <a href="/customs-clearance">
                                <img src="/assets/imgs/img3.png" alt="Customs Clearance" />
                            </a>
                        </div>
                        <div className="cardInfo">
                            <h5 className="color-brand-2 mb-10">
                                <a href="/customs-clearance" style={{color: "inherit", textDecoration: "none"}}>Customs Clearance</a>
                            </h5>
                            <p className="font-xs color-grey-500">
                                Complete customs clearance support for Pharma, Dangerous Goods and Machinery imports. Our documentation and compliance processes ensure smooth and reliable Cargo movement.
                            </p>
                            <div className="box-button mt-30">
                                <a href="/customs-clearance" className="btn btn-link font-sm color-brand-2">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Repeat slides for looping visual, but keep unique linking where possible */}
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="cardGrid">
                        <div className="cardImage">
                            <a href="/air-freight">
                                <img src="/assets/imgs/img.png" alt="Air Freight (Exports)" />
                            </a>
                        </div>
                        <div className="cardInfo">
                            <h5 className="color-brand-2 mb-10">
                                <a href="/air-freight" style={{color: "inherit", textDecoration: "none"}}>Air Freight (Exports)</a>
                            </h5>
                            <p className="font-xs color-grey-500">
                                We provide fast and reliable air freight services with a strong focus on Pharma Logistics. Our team also handles urgent Cargo such as Textiles, Electronics and critical Machinery parts with the same level of precision.
                            </p>
                            <div className="box-button mt-30">
                                <a href="/air-freight" className="btn btn-link font-sm color-brand-2">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="cardGrid">
                        <div className="cardImage">
                            <a href="/sea-freight">
                                <img src="/assets/imgs/img2.png" alt="Sea Freight (Exports)" />
                            </a>
                        </div>
                        <div className="cardInfo">
                            <h5 className="color-brand-2 mb-10">
                                <a href="/sea-freight" style={{color: "inherit", textDecoration: "none"}}>Sea Freight (Exports)</a>
                            </h5>
                            <p className="font-xs color-grey-500">
                                Reliable ocean freight forwarding and global shipping support for LCL, FCL, and non-containerized cargo.
                            </p>
                            <div className="box-button mt-30">
                                <a href="/sea-freight" className="btn btn-link font-sm color-brand-2">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="cardGrid">
                        <div className="cardImage">
                            <a href="/customs-clearance">
                                <img src="/assets/imgs/img3.png" alt="Customs Clearance" />
                            </a>
                        </div>
                        <div className="cardInfo">
                            <h5 className="color-brand-2 mb-10">
                                <a href="/customs-clearance" style={{color: "inherit", textDecoration: "none"}}>Customs Clearance</a>
                            </h5>
                            <p className="font-xs color-grey-500">
                                Complete customs clearance support for Pharma, Dangerous Goods and Machinery imports. Our documentation and compliance processes ensure smooth and reliable Cargo movement.
                            </p>
                            <div className="box-button mt-30">
                                <a href="/customs-clearance" className="btn btn-link font-sm color-brand-2">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* <div className="box-pagination-customers text-center wow animate__animated animate__fadeIn">
                <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-group-4">
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </div>
                <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-group-4">
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div> */}
        </>
    )
}
