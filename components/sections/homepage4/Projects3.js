import Project1Slider from "@/components/slider/Project1Slider";
import Link from "next/link";

export default function Projects3() {
    return (
        <>
            <section className="section pb-5 pt-110">
                <div className="container">
                    <div className="text-center">
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Our Services</p>
                        <h2 className="color-brand-2 text-capitalize mb-65 mt-15 wow animate__animated animate__fadeIn">
                            We Are Trusted For Our Services
                        </h2>
                    </div>
                    <div className="mt-35">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-4 pb-50">
                                <Project1Slider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
