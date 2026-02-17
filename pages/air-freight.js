import Layout from "@/components/layout/Layout"
import { useState } from "react"

export default function AirFreight() {
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
                headTitle="Air Freight | Specialised Supply Chain & Cold Chain Solutions"
                metaDescription="Transline Air Cargo offers secure air freight exports from India. While specializing in pharma cold chain, we provide expert supply chain solutions for dangerous goods, textiles, and machinery."
                metaKeywords="Air freight exports, pharma cold chain, dangerous goods logistics, textile exports, machinery air cargo, supply chain India, temperature controlled shipping"
                canonicalUrl="https://transline-logistics.com/air-freight"
            >
                {/* Hero Banner Section */}
                <section className="section">
                    <div className="box-pageheader-1 text-center" style={{ background: "url(assets/imgs/s1.jpg) no-repeat top/cover fixed" }}>
                        <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">Air Freight</h2>
                        <p className="color-grey-700 text-white font-lg wow animate__animated animate__fadeIn">
                            Import & Export Air Freight Services
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
                                    Transline Air Cargo Services Pvt. Ltd. is your partner for business growth. We know that the India import and export sector needs a Supply chain that is both fast and secure. By using our Cold chain and expert knowledge, you get a promise of quality, honesty, and global rules. While we started with sensitive medicine, we use the same high standards for industrial goods and general cargo. Our mission is clear: to provide a fast bridge that connects India to the world.
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
                            Why Choose Our Air Freight Services
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2 mb-15">Cold Chain & India Integrity</h6>
                                        <p className="font-md color-grey-700">
                                        Protect high-value cargo with strict Cold chain monitoring. We make sure sensitive medicines, machinery, and textiles arrive in perfect condition.
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2 mb-15">Global Supply Chain Speed</h6>
                                        <p className="font-md color-grey-700">
                                        Get your products to market faster with priority air freight. We handle customs for dangerous goods and general import and export tasks to keep your global schedules on time.
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2 mb-15">Risk Mitigation in India</h6>
                                        <p className="font-md color-grey-700">
                                        Get peace of mind with 24/7 monitoring. Our clear Supply chain and Cold chain solutions protect your brand’s reputation in India.

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
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Why Choose Us</p>
                            <h2 className="color-brand-2 text-capitalize mb-15 mt-15 wow animate__animated animate__fadeInUp">
                                Our Competitive Advantages
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="color-brand-2 mb-15">Market Leadership in India</h5>
                                        <p className="font-md color-grey-700">
                                            Our leaders focus on India, connecting labs to textile hubs with global import and export skills that many other freight companies miss.
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="color-brand-2 mb-15">Validated Cold Chain & Safety</h5>
                                        <p className="font-md color-grey-700">
                                            We offer proven security for the Cold chain. We plan every route carefully to stop safety risks before they happen.
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="color-brand-2 mb-15">Resilient Supply Chain Hubs</h5>
                                        <p className="font-md color-grey-700">
                                            Our strong Supply chain network works with top airlines. This ensures that machinery, clothes, and medicine from India never get delayed.
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="color-brand-2 mb-15">Data-Driven Global Insights</h5>
                                        <p className="font-md color-grey-700">
                                            Make smart business choices with our data reports. We turn India-based logistics into a competitive advantage for your business.
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
                                Answers to Common Air Freight Queries
                            </h2>
                        </div>
                        <div className="mt-35">
                            <div className="box-accordion">
                                <div className="accordion" id="accordionAirFreight">
                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={isActive.key === 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                What types of cargo do you handle in India?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 1 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                While we are experts in pharmaceutical import and export in India, we also handle dangerous goods, textiles, machinery, and general cargo through a secure Supply chain and Cold chain process.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={isActive.key === 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                How do you keep cargo safe during air freight import and export?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 2 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                We use temperature-controlled Cold chain tools for medicine. We also use special safety rules for machinery to keep all India cargo stable during travel.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={isActive.key === 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                Do you support end-to-end Supply chain management?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 3 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                Yes, we manage the full import and export Supply chain in India. This includes pickup, airport tasks, customs help, and global delivery.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                                            <button className={isActive.key === 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                Are your services compliant with global standards?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 4 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                Our work follows strict global rules to support a safe Supply chain and Cold chain for India pharmaceutical import and export. We also follow international safety laws for all other goods.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(5)}>
                                            <button className={isActive.key === 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                Why choose Transline Air Cargo for import and export in India?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 5 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                Transline Air Cargo offers deep knowledge of India, reliable Cold chain tools, and honest Supply chain steps. We ensure safe and on-time global delivery for every industry.
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

