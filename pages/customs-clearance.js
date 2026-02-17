import Layout from "@/components/layout/Layout"
import { useState } from "react"

export default function CustomsClearance() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false });
        } else {
            setIsActive({ status: true, key });
        }
    };

    return (
        <>
            <Layout
                headTitle="Global Customs Clearance | Pharma Documentations Experts"
                metaDescription="Transline offers global customs clearance with expert documentations support ensuring smooth pharma imports and exports by air and sea without delays."
                metaKeywords="Customs clearance, pharma customs, export documentation, import clearance, global trade compliance, pharmaceutical logistics, customs documentation"
                canonicalUrl="https://transline-logistics.com/customs-clearance"
            >
                {/* Hero Banner Section */}
                <section className="section">
                    <div className="box-pageheader-1 text-center" style={{ background: "url(assets/imgs/s3.jpg) no-repeat center/cover fixed" }}>
                        <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">Custom Clearance</h2>
                        <p className="color-grey-700 text-white font-lg wow animate__animated animate__fadeIn">
                            Navigating Global Customs seamlessly for Pharma, Dangerous Goods, Textiles, and Machinery.
                        </p>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="section pt-100 pb-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="content-detail wow animate__animated animate__fadeIn">
                                    <p className="font-md color-grey-900 mb-30" style={{ fontSize: "16px", lineHeight: "1.8" }}>
                                    Moving goods through Global Customs is easy with Transline. We provide expert services for all business sectors, ensuring your cargo moves quickly regardless of the industry. Our team handles the difficult Documentations required for any type of shipment. We work as your partner to make sure your Global goods move across borders without any delays or problems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="section pt-50 pb-100 bg-1">
                    <div className="container">
                        <div className="text-center mb-65">
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Our Benefits</p>
                            <h2 className="color-brand-2 text-capitalize mb-15 mt-15 wow animate__animated animate__fadeInUp">
                                Why Choose Our Customs Clearance Services
                            </h2>
                        </div>
                        <div className="row mt-35">
                            <div className="col-xl-4 col-lg-6 mb-30">
                                <div className="cardGrid wow animate__animated animate__fadeIn">
                                    <div className="cardImage">
                                        <div style={{ 
                                            height: "200px", 
                                            background: "linear-gradient(135deg, #2C7DA1 0%, #1C6180 100%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg width="64" height="64" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2 mb-15">Fast Global Coordination</h6>
                                        <p className="font-md color-grey-700">
                                            We speed up your shipping by talking to Customs early. This ensures that Global deliveries for every sector do not get stuck at the port.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 mb-30">
                                <div className="cardGrid wow animate__animated animate__fadeIn" style={{ animationDelay: "0.2s" }}>
                                    <div className="cardImage">
                                        <div style={{ 
                                            height: "200px", 
                                            background: "linear-gradient(135deg, #2C7DA1 0%, #1C6180 100%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg width="64" height="64" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2 mb-15">Expert Documentations</h6>
                                        <p className="font-md color-grey-700">
                                            Avoid risks with perfect paperwork. Our experts manage Global Customs to prevent extra costs or seized goods for any type of cargo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 mb-30">
                                <div className="cardGrid wow animate__animated animate__fadeIn" style={{ animationDelay: "0.4s" }}>
                                    <div className="cardImage">
                                        <div style={{ 
                                            height: "200px", 
                                            background: "linear-gradient(135deg, #2C7DA1 0%, #1C6180 100%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg width="64" height="64" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2 mb-15">Global Trade Support</h6>
                                        <p className="font-md color-grey-700">
                                            We handle all Customs and Documentations for you. We take care of the hard work for all industries so you can grow your Global business.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="section pt-100 pb-0">
                    <div className="container">
                        <div className="text-center mb-65">
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Why choose Us</p>
                            <h2 className="color-brand-2 text-capitalize mb-15 mt-15 wow animate__animated animate__fadeInUp">
                                Why choose Us
                            </h2>
                        </div>
                        <div className="row mt-35">
                            <div className="col-lg-6 col-md-6 mb-40">
                                <div className="d-flex align-items-start wow animate__animated animate__fadeIn" style={{gap: "20px"}}>
                                    <div className="flex-shrink-0">
                                        <div className="cardLeadingCompany" style={{
                                            width: "80px",
                                            height: "80px",
                                            padding: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg width="40" height="40" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="color-brand-2 mb-15">Honest Global Service</h5>
                                        <p className="font-md color-grey-700">
                                            We believe in being honest. We make sure every Global shipment follows Customs laws, giving you a clear and legal process for any sector.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-40">
                                <div className="d-flex align-items-start wow animate__animated animate__fadeIn" style={{gap: "20px", animationDelay: "0.2s"}}>
                                    <div className="flex-shrink-0">
                                        <div className="cardLeadingCompany" style={{
                                            width: "80px",
                                            height: "80px",
                                            padding: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg width="40" height="40" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="color-brand-2 mb-15">Quick Customs Knowledge</h5>
                                        <p className="font-md color-grey-700">
                                            We are experts at clearing Global cargo fast. Our team makes your Documentations a priority so your goods leave the port quickly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-40">
                                <div className="d-flex align-items-start wow animate__animated animate__fadeIn" style={{gap: "20px", animationDelay: "0.4s"}}>
                                    <div className="flex-shrink-0">
                                        <div className="cardLeadingCompany" style={{
                                            width: "80px",
                                            height: "80px",
                                            padding: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg width="40" height="40" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="color-brand-2 mb-15">Active Global Contact</h5>
                                        <p className="font-md color-grey-700">
                                            We fix problems before they happen. Our experts talk directly to Customs to keep your Global exports moving without inspections.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-40">
                                <div className="d-flex align-items-start wow animate__animated animate__fadeIn" style={{gap: "20px", animationDelay: "0.6s"}}>
                                    <div className="flex-shrink-0">
                                        <div className="cardLeadingCompany" style={{
                                            width: "80px",
                                            height: "80px",
                                            padding: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg width="40" height="40" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={2} />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 8h8M8 12h8M8 16h4" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="color-brand-2 mb-15">Accurate Documentations</h5>
                                        <p className="font-md color-grey-700">
                                            We check all Customs Documentations very carefully. This keeps your Global exports safe from any holds or questions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section bg-transparent pt-100 pb-100 bg-faqs">
                    <div className="container">
                        <div className="text-center">
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Frequently Asked Questions</p>
                            <h2 className="color-brand-2 text-capitalize mb-65 mt-15 wow animate__animated animate__fadeIn">
                                Answers to Common Customs Clearance Queries
                            </h2>
                        </div>
                        <div className="mt-35">
                            <div className="box-accordion">
                                <div className="accordion" id="accordionCustomsClearance">

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={isActive.key === 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                What is Global Customs?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 1 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                It is the process of managing the rules and Documentations needed to move goods from all sectors across Global borders.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={isActive.key === 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                How do you handle paperwork?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 2 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                Transline manages all Customs Documentations correctly. We check everything for your specific industry to make sure there are no delays.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={isActive.key === 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                Do you handle all types of goods?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 3 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                Yes. We provide Global Customs services for every sector, handling all types of cargo with professional Documentations.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                                            <button className={isActive.key === 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                How are delays reduced?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 4 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                We stop delays by working closely with Customs officers and watching your Global Documentations in real-time.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

