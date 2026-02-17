import Layout from "@/components/layout/Layout"
import Faqs3 from "@/components/sections/homepage1/Faqs3"

export default function Service() {

    return (
        <>
            <Layout
                headTitle="Pharmaceutical Logistics Services | Transline Air Cargo"
                metaDescription="Transline Air Cargo offers end-to-end pharma logistics including air freight, sea freight, customs clearance and cold chain solutions with proven reliability."
                metaKeywords="Pharma logistics services, air freight services India, sea freight forwarding, customs clearance pharma, cold chain logistics, integrated logistics India"
                canonicalUrl="https://transline-logistics.com/services"
            >
                <section className="section">
                    <div className="box-pageheader-1 text-center" style={{ background: "url(assets/imgs/ServiceBanner.jpg) no-repeat top/cover" }}>
                        <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">Our Services</h2>
                        <p className="color-grey-700 text-white font-lg wow animate__animated animate__fadeIn">
                            Comprehensive air, sea and customs solutions for temperature‑sensitive pharmaceutical cargo
                        </p>
                    </div>
                </section>
                <section className="section pt-100">
                    <div className="container">
                        <div className="mt-35">
                            {/* Service 1: Air Freight */}
                            <div className="row align-items-center service-row flex-column flex-md-row mb-50">
                                <div className="col-xl-6 mb-4 mb-xl-0">
                                    {/* Image Hover Zoom + Fade In */}
                                    <div className="service-img-wrapper wow animate__animated animate__zoomIn">
                                        <img
                                            src="/assets/imgs/img.png"
                                            alt="Air Freight Exports"
                                            className="img-fluid rounded shadow-sm w-100 service-img-effect"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="wow animate__animated animate__fadeInRight">
                                        <h5 className="color-brand-2 mb-3">Air Freight (Exports)</h5>
                                        <p className="color-grey-900 mb-3 animate__animated animate__fadeIn" style={{ animationDelay: "0.3s" }}>
                                            As the flagship service of Transline Air Cargo Services Pvt. Ltd., we specialise in time-sensitive pharmaceutical air freight—guaranteeing the speed, security, and precision required to move critical healthcare products globally. We provide a reliable logistics bridge between Indian manufacturers and the world.
                                        </p>
                                        <h6 className="fw-bold mt-4 mb-2 color-brand-2">Key Features and Benefits</h6>
                                        <ul className="color-grey-900 ps-3 font-md mb-0 animate__animated animate__fadeIn" style={{ animationDelay: "0.4s", listStyle: "disc" }}>
                                            <li className="mb-2">
                                                <strong>Global Carrier Partnerships:</strong> Strong, established partnerships with leading global carriers ensure consistent space and priority handling for your Air Freight.
                                            </li>
                                            <li className="mb-2">
                                                <strong>Dedicated Pharma Handling:</strong> Our team is specialised in pharmaceutical cargo, ensuring every shipment adheres to strict international temperature and safety protocols.
                                            </li>
                                            <li className="mb-2">
                                                <strong>Competitive &amp; Predictable Transit:</strong> We offer competitive pricing combined with fast, predictable transit times, making your supply chain more reliable.
                                            </li>
                                            <li>
                                                <strong>Full Compliance:</strong> Processes are fully compliant with global pharma logistics standards, ensuring product safety and temperature integrity throughout the entire journey.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Service 2: Sea Freight */}
                            <div className="row align-items-center service-row flex-column flex-md-row mb-50 flex-md-row-reverse">
                                <div className="col-xl-6 mb-4 mb-xl-0">
                                    <div className="service-img-wrapper wow animate__animated animate__zoomIn" style={{ animationDelay: "0.15s" }}>
                                        <img
                                            src="/assets/imgs/img2.png"
                                            alt="Sea Freight Exports"
                                            className="img-fluid rounded shadow-sm w-100 service-img-effect"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="wow animate__animated animate__fadeInLeft" style={{ animationDelay: "0.3s" }}>
                                        <h5 className="color-brand-2 mb-3">Sea Freight (Exports)</h5>
                                        <p className="color-grey-900 mb-3 animate__animated animate__fadeIn" style={{ animationDelay: "0.45s" }}>
                                            Transline Cargo Services manages your overseas shipments with cost-effective, robust Global solutions. We deliver organized logistics for pharmaceutical exports, large-scale Textiles, and Heavy Machinery. Our expertise in Sea Freight ensures that your large-volume shipments move across international waters with maximum security and efficiency, providing a truly Global reach for every cargo type.
                                        </p>
                                        <h6 className="fw-bold mt-4 mb-2 color-brand-2">Key Offerings</h6>
                                        <ul className="color-grey-900 ps-3 font-md mb-0 animate__animated animate__fadeIn" style={{ animationDelay: "0.5s", listStyle: "disc" }}>
                                            <li className="mb-2">
                                                <strong>Flexible Capacity:</strong> Expert handling of FCL, LCL, and non-containerized industrial Freight across all major shipping lanes.
                                            </li>
                                            <li className="mb-2">
                                                <strong>Global Network:</strong> Seamless connectivity to every major Global port for General Goods, Textiles, and Pharmaceutical shipments.
                                            </li>
                                            <li className="mb-2">
                                                <strong>Specialised Equipment:</strong> From reefer containers for temperature-sensitive goods to flat-racks for Global Machinery transport and heavy-lift Freight.
                                            </li>
                                            <li>
                                                <strong>Cost-Efficient Routing:</strong> Strategic Sea Freight planning to optimize transit times and reduce landed costs for your international exports.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Service 3: Customs Clearance */}
                            <div className="row align-items-center service-row flex-column flex-md-row">
                                <div className="col-xl-6 mb-4 mb-xl-0">
                                    <div className="service-img-wrapper wow animate__animated animate__zoomIn" style={{ animationDelay: "0.3s" }}>
                                        <img
                                            src="/assets/imgs/img3.png"
                                            alt="Customs Clearance"
                                            className="img-fluid rounded shadow-sm w-100 service-img-effect"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="wow animate__animated animate__fadeInRight" style={{ animationDelay: "0.5s" }}>
                                        <h5 className="color-brand-2 mb-3">Customs Clearance (Air &amp; Sea)</h5>
                                        <p className="color-grey-900 mb-3 animate__animated animate__fadeIn" style={{ animationDelay: "0.65s" }}>
                                            Navigating international Customs is a critical stage in the Global supply chain. At Transline, we provide rapid coordination for time-sensitive Pharma, complex Dangerous Goods (DG), and Industrial Machinery moving via Air or Sea Freight. Our Global expertise ensures your cargo clears hurdles quickly and efficiently.
                                        </p>
                                        <h6 className="fw-bold mt-4 mb-2 color-brand-2">Service Highlights</h6>
                                        <ul className="color-grey-900 ps-3 font-md mb-0 animate__animated animate__fadeIn" style={{ animationDelay: "0.7s", listStyle: "disc" }}>
                                            <li className="mb-2">
                                                <strong>Expert Documentation:</strong> Managing regulatory compliance for Global Import/Export across all Freight sectors.
                                            </li>
                                            <li className="mb-2">
                                                <strong>Rapid Coordination:</strong> Minimal delays at Global ports and airports for General Merchandise and Medicine.
                                            </li>
                                            <li className="mb-2">
                                                <strong>Integrity-Led:</strong> Ethical practices ensuring your Global Industrial and Pharma trade remains compliant with every Air and Sea Freight regulation.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <style jsx>{`
                        .service-img-wrapper {
                            overflow: hidden;
                            border-radius: 16px;
                            box-shadow: 0 6px 24px rgba(0,0,0,0.05);
                        }
                        .service-img-effect {
                            transition: transform 0.6s cubic-bezier(0.19,1,0.22,1), box-shadow 0.3s;
                            will-change: transform, box-shadow;
                        }
                        .service-img-wrapper:hover .service-img-effect, 
                        .service-img-effect:hover {
                            transform: scale(1.08) rotateZ(-1deg);
                            box-shadow: 0 12px 32px 4px rgba(44,92,150,0.12);
                        }
                    `}</style>
                </section>
                <Faqs3 />
            </Layout>
        </>
    )
}
