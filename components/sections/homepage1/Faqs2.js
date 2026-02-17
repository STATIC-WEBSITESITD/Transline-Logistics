import Accordion2 from "@/components/elements/Accordion2";
import Link from "next/link";

export default function Faqs1() {
    return (
        <>
            <div className="section bg-transparent pt-100 pb-100 bg-faqs">
                <div className="container">
                    <div className="text-center">
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Frequently Asked Questions</p>
                        <h2 className="color-brand-2 text-capitalize mb-65 mt-15 wow animate__animated animate__fadeIn">
                            Answers to Common Pharma Logistics Queries
                        </h2>
                    </div>
                    <div className="mt-35">
                        <div className="box-accordion">
                            <Accordion2 />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
