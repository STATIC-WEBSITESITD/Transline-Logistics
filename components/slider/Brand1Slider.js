import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

const slideBoxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 110,
    padding: "20px",
    border: "1px solid #eee",
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    background: "#fff",
};

const imgStyle = {
    maxHeight: 80,
    maxWidth: 140,
    objectFit: "contain"
};

const slides = [
    { src: "/assets/imgs/clients/alkem.png", alt: "Alkem" },
    { src: "/assets/imgs/clients/emcure.png", alt: "Emcure" },
    { src: "/assets/imgs/clients/lupin.png", alt: "Lupin" },
    { src: "/assets/imgs/clients/medreich.jpg", alt: "Medreich" },
    { src: "/assets/imgs/clients/mega.jpg", alt: "Mega" },
    { src: "/assets/imgs/clients/micro-lab.jpg", alt: "Micro Lab" },
    { src: "/assets/imgs/clients/ngl.png", alt: "NGL" },
    { src: "/assets/imgs/clients/serum.png", alt: "Serum" },
    { src: "/assets/imgs/clients/strides.png", alt: "Strides" },
    { src: "/assets/imgs/clients/torrent.png", alt: "Torrent" },
    { src: "/assets/imgs/clients/zydus.jpg", alt: "Zydus" },
];

export default function Brand1Slider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={6}
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
                navigation={{
                    prevEl: ".swiper-button-prev-customers",
                    nextEl: ".swiper-button-next-customers",
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
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper wow animate__animated animate__fadeIn"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div style={slideBoxStyle}>
                            <img src={slide.src} alt={slide.alt} style={imgStyle} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
