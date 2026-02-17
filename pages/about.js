import Layout from "@/components/layout/Layout";
import Faqs2 from "@/components/sections/homepage1/Faqs2"
import Info4 from "@/components/sections/homepage2/Info4"

export default function About() {
    return (
        <>
            <Layout
                headTitle="About Transline | Fast & Reliable Pharma Logistics and Cargo"
                metaDescription="Transline is a trusted logistics partner since 1989, offering fast and reliable Cargo solutions across Pharma Logistics, Dangerous Goods, Textiles, Machinery, and General Cargo."
                metaKeywords="About Transline, fast pharma logistics, reliable cargo, dangerous goods, textiles logistics, machinery shipping, general cargo solutions, trusted logistics partner"
                canonicalUrl="https://transline-logistics.com/about"
            >
                <section className="section">
                    <div className="box-pageheader-1 text-center" style={{ background: "url(assets/imgs/AboutBanner.jpg) no-repeat top/cover fixed" }}>
                        <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">About Us</h2>
                        <p className="color-grey-700 text-white font-lg wow animate__animated animate__fadeIn">
                            Trusted Pharma Logistics Partner Since 1989
                        </p>
                    </div>
                </section>
                <section className="section pt-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">About Us</p>
                                <h2 className="color-brand-2 text-capitalize mb-65 mt-15 wow animate__animated animate__fadeIn">
                                    Your Dedicated Logistics Partner
                                </h2>
                                <p className="font-md color-grey-900 mb-0 wow animate__animated animate__fadeIn">
                                    The Transline Group was founded in 1989 by Mr Dinesh Kirodian. Over the years we have grown into a trusted name in Pharma Logistics by delivering fast and reliable Cargo solutions across multiple industries. Our expertise covers pharmaceuticals, Dangerous Goods, Textiles, Machinery, and General Cargo with consistent care and precision.
                                </p>
                                <p className="font-md color-grey-900 mb-0 wow animate__animated animate__fadeIn">
                                    We believe reliable logistics means moving Cargo fast while maintaining compliance, quality, and timely delivery. From temperature sensitive medicines to large industrial equipment, we apply the same high standards to every Cargo movement.
                                </p>
                            </div>
                            <div className="col-lg-6 position-relative">
                                {/* <div className="certified-icon wow animate__animated animate__fadeIn">
                                    <img src="/assets/imgs/page/homepage3/certified.png" alt="transp" />
                                </div> */}
                                <div className="row">
                                    <div className="col-md-12 wow animate__animated animate__fadeIn">
                                        <img className="" src="/assets/imgs/dinesh-kirodian.jpg" alt="transp" />
                                    </div>
                                    {/* <div className="col-md-6 wow animate__animated animate__fadeIn">
                                        <img className="mt-90" src="/assets/imgs/page/homepage3/img-info-5.png" alt="transp" />
                                    </div>
                                    <div className="col-md-6 wow animate__animated animate__fadeIn">
                                        <img src="/assets/imgs/page/homepage3/img-info-5-2.png" alt="transp" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            {/* Vision */}
                            <div className="col-12 col-md-6 mb-30">
                                <div className="card d-flex flex-column p-4 h-100 shadow-sm border-0 w-100" style={{ boxShadow: "0 4px 24px rgba(30,34,40,0.12)", minHeight: "160px" }}>
                                    <div className="d-flex align-items-center mb-2">
                                        <span style={{ fontSize: "2.5rem", color: "#2B6CB0", marginRight: "18px" }} role="img" aria-label="Vision">
                                            💡
                                        </span>
                                        <div>
                                            <h4 className="color-brand-2 mb-10 mb-lg-2" style={{ marginBottom: 0 }}>Our Vision</h4>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="mb-3">
                                            <h6 className="color-grey-900 mb-5" style={{ fontWeight: 600 }}>Inspire Excellence</h6>
                                            <p className="font-md color-grey-700 mb-0">
                                                To be among India’s leading integrated logistics solution providers, delivering excellence and innovation in pharmaceutical and cold chain logistics.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Mission */}
                            <div className="col-12 col-md-6 mb-30">
                                <div className="card d-flex flex-column p-4 h-100 shadow-sm border-0 w-100" style={{ boxShadow: "0 4px 24px rgba(30,34,40,0.12)", minHeight: "160px" }}>
                                    <div className="d-flex align-items-center mb-2">
                                        <span style={{ fontSize: "2.5rem", color: "#2B6CB0", marginRight: "18px" }} role="img" aria-label="Mission">
                                            🎯
                                        </span>
                                        <div>
                                            <h4 className="color-brand-2 mb-10 mb-lg-2" style={{ marginBottom: 0 }}>Our Mission</h4>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="mb-3">
                                            <h6 className="color-grey-900 mb-5" style={{ fontWeight: 600 }}>Deliver with Purpose</h6>
                                            <p className="font-md color-grey-700 mb-0">
                                                To provide safe, efficient, and compliant logistics services tailored to the pharmaceutical industry's special cargo requirements, ensuring life-saving medicines reach those in need—on time, every time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Core Values */}
                            <div className="col-12 mb-30">
                                <div className="card d-flex flex-column p-4 h-100 shadow-sm border-0 w-100" style={{ boxShadow: "0 4px 24px rgba(30,34,40,0.12)", minHeight: "160px" }}>
                                    <div className="d-flex align-items-center mb-2">
                                        <span style={{ fontSize: "2.5rem", color: "#2B6CB0", marginRight: "18px" }} role="img" aria-label="Values">
                                            ❤️
                                        </span>
                                        <div>
                                            <h4 className="color-brand-2 mb-10 mb-lg-2" style={{ marginBottom: 0 }}>Our Core Values</h4>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="mb-3">
                                            <h6 className="color-grey-900 mb-5" style={{ fontWeight: 600 }}>Client-Centric Approach</h6>
                                            <p className="font-md color-grey-700 mb-0">
                                                We build long-term partnerships based on mutual trust and transparency, prioritizing the client's needs in every process.
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="color-grey-900 mb-5" style={{ fontWeight: 600 }}>Integrity</h6>
                                            <p className="font-md color-grey-700 mb-0">
                                                We are committed to ethical and fair business practices, ensuring integrity and transparency are maintained across all our operations, especially in high-value cargo handling.
                                            </p>
                                        </div>
                                        <div>
                                            <h6 className="color-grey-900 mb-5" style={{ fontWeight: 600 }}>Commitment</h6>
                                            <p className="font-md color-grey-700 mb-0">
                                                We are focused on uncompromising quality, safety, and fast, on-time delivery always to protect the efficacy of your sensitive pharmaceutical cargo. Our service is reliable.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Info4 />
                <Faqs2 />
            </Layout>
        </>
    )
}