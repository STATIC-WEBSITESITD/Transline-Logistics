import Brand2Slider from "@/components/slider/Brand2Slider";

export default function Brands2() {
    return (
        <>
            <div className="section bg-transparent pt-100 pb-0">
                <div className="container">
                    <div className="text-center">
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Certifications</p>
                        <h2 className="color-brand-2 text-capitalize mb-65 mt-15 wow animate__animated animate__fadeIn">
                            Certified & Trusted Worldwide
                        </h2>
                    </div>
                    <div className="mt-35">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-6 pb-0">
                                <Brand2Slider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
