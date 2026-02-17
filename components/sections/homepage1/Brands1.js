import Brand1Slider from "@/components/slider/Brand1Slider";

export default function Brands1() {
    return (
        <>
            <div className="section bg-transparent pt-0 pb-0">
                <div className="container">
                    <div className="text-center">
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Our Clients</p>
                        <h2 className="color-brand-2 text-capitalize mb-65 mt-15 wow animate__animated animate__fadeIn">
                            Trusted by brands worldwide
                        </h2>
                    </div>
                    <div className="mt-35">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-6 pb-0">
                                <Brand1Slider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
