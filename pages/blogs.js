import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Blogs() {

    return (
        <>
            <Layout
                headTitle="Blogs | Pharma Logistics Insights & News | Transline Group"
                metaDescription="Explore the latest blogs and insights on pharma logistics, air & sea freight, cold chain solutions, customs clearance, global shipment, cost optimization, and more from Transline Group."
                metaKeywords="Pharma logistics blog, air freight blog, sea freight blog, cold chain logistics, customs clearance, international shipping, logistics partner, cost optimization, SME logistics"
                canonicalUrl="https://transline-logistics.com/blogs"
            >
                <section className="section">
                    <div className="box-pageheader-1 text-center" style={{ background: "url('assets/imgs/blog.webp') no-repeat top/cover fixed" }}>
                        <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">Our Blogs</h2>
                        <p className="color-grey-700 text-white font-lg wow animate__animated animate__fadeIn">
                            Latest articles & insights related to pharma logistics, compliance, and global shipping.
                        </p>
                    </div>
                </section>
                <section className="section pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            {/* Air Freight */}
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/air-freight-services-in-india-exporters-importers">
                                            <img src="assets/imgs/b1.jpg" alt="Air Freight" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/air-freight-services-in-india-exporters-importers">Air Freight</Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/air-freight-services-in-india-exporters-importers">
                                            <h5 className="color-brand-2">Air Freight Services in India: A Complete Guide for Exporters & Importers</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">Discover top air freight services in India for exporters & importers, benefits, documentation, and how to choose reliable cargo freight international solutions for global trade.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0">
                                            <Link className="btn btn-link font-sm color-brand-2" href="/air-freight-services-in-india-exporters-importers">View Details<span>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                            </Link>
                                            <span className="date-post font-sm color-grey-700">26 Dec 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Sea Freight */}
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/sea-freight-shipping-fcl-vs-lcl-guide">
                                            <img src="assets/imgs/b2.jpg" alt="Sea Freight" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/sea-freight-shipping-fcl-vs-lcl-guide">Sea Freight</Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/sea-freight-shipping-fcl-vs-lcl-guide">
                                            <h5 className="color-brand-2">Sea Freight Shipping Explained: FCL vs LCL & How to Choose the Best Option</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">Understand sea freight, FCL vs LCL, ocean freight cargo options, and full container load shipping to choose the best solution for global trade and logistics.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0">
                                            <Link className="btn btn-link font-sm color-brand-2" href="/sea-freight-shipping-fcl-vs-lcl-guide">View Details<span>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span></Link>
                                            <span className="date-post font-sm color-grey-700">26 Dec 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Customs Clearance */}
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/customs-clearance-guide-avoid-delays-compliance">
                                            <img src="assets/imgs/b3.jpg" alt="Customs Clearance" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/customs-clearance-guide-avoid-delays-compliance">Customs</Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/customs-clearance-guide-avoid-delays-compliance">
                                            <h5 className="color-brand-2">Customs Clearance Demystified: How to Avoid Delays & Compliance Issues</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">Learn how customs clearance works, avoid delays, and improve import export efficiency with proper documentation and strong customs compliance practices.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0">
                                            <Link className="btn btn-link font-sm color-brand-2" href="/customs-clearance-guide-avoid-delays-compliance">View Details<span>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span></Link>
                                            <span className="date-post font-sm color-grey-700">26 Dec 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Cold Chain Logistics */}
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/cold-chain-logistics-temperature-controlled-cargo">
                                            <img src="assets/imgs/b4.jpg" alt="Cold Chain Logistics" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/cold-chain-logistics-temperature-controlled-cargo">Cold Chain</Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/cold-chain-logistics-temperature-controlled-cargo">
                                            <h5 className="color-brand-2">Cold Chain Logistics: Ensuring Temperature-Controlled Cargo Integrity</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">Learn cold chain logistics essentials, how temperature controlled transport preserves sensitive cargo integrity, reduces spoilage, and enhances global supply chain quality.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0">
                                            <Link className="btn btn-link font-sm color-brand-2" href="/cold-chain-logistics-temperature-controlled-cargo">View Details<span>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span></Link>
                                            <span className="date-post font-sm color-grey-700">26 Dec 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Logistics Partner */}
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/choosing-right-logistics-partner-global-shipments">
                                            <img src="assets/imgs/b5.jpg" alt="Logistics Partner" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/choosing-right-logistics-partner-global-shipments">Logistics</Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/choosing-right-logistics-partner-global-shipments">
                                            <h5 className="color-brand-2">How to Choose the Right Logistics Partner for International Trade</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">Find the best logistic solution provider for global shipment and supply chain management. Learn key factors to choose a reliable partner for international trade success.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0">
                                            <Link className="btn btn-link font-sm color-brand-2" href="/choosing-right-logistics-partner-global-shipments">View Details<span>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span></Link>
                                            <span className="date-post font-sm color-grey-700">26 Dec 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Shipping Routes */}
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/top-air-sea-freight-routes-from-india">
                                            <img src="assets/imgs/b6.jpg" alt="Shipping Routes" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/top-air-sea-freight-routes-from-india">Shipping</Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/top-air-sea-freight-routes-from-india">
                                            <h5 className="color-brand-2">Top Air & Sea Freight Routes from India</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">Explore top air freight & sea freight routes from India, transit times, trends & expert tips for efficient global shipping success for shippers and exporters.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0">
                                            <Link className="btn btn-link font-sm color-brand-2" href="/top-air-sea-freight-routes-from-india">View Details<span>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span></Link>
                                            <span className="date-post font-sm color-grey-700">26 Dec 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Cold Chain Technology */}
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/cold-chain-technology-innovations-temperature-controlled-logistics">
                                            <img src="assets/imgs/b7.jpg" alt="Cold Chain Technology" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/cold-chain-technology-innovations-temperature-controlled-logistics">Technology</Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/cold-chain-technology-innovations-temperature-controlled-logistics">
                                            <h5 className="color-brand-2">Cold Chain Tech: Innovations Driving Temperature-Controlled Logistics</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">Explore cold chain solutions and refrigerated reefer truck innovations enhancing temperature-controlled logistics, ensuring cargo safety and efficiency globally.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0">
                                            <Link className="btn btn-link font-sm color-brand-2" href="/cold-chain-technology-innovations-temperature-controlled-logistics">View Details<span>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span></Link>
                                            <span className="date-post font-sm color-grey-700">26 Dec 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Cost Optimization */}
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/logistics-cost-optimization-tips-for-smes">
                                            <img src="assets/imgs/b8.jpg" alt="Cost Optimization" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/logistics-cost-optimization-tips-for-smes">SME Tips</Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/logistics-cost-optimization-tips-for-smes">
                                            <h5 className="color-brand-2">Logistics Cost Optimization: Tips for SMEs</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">Discover actionable strategies for SMEs to reduce logistics costs and optimize supply chain efficiency. Boost profitability with smart freight management.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0">
                                            <Link className="btn btn-link font-sm color-brand-2" href="/logistics-cost-optimization-tips-for-smes">View Details<span>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span></Link>
                                            <span className="date-post font-sm color-grey-700">26 Dec 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Freight Forwarding */}
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/international-freight-forwarding-business-guide-2026">
                                            <img src="assets/imgs/b9.jpg" alt="Freight Forwarding" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/international-freight-forwarding-business-guide-2026">Freight</Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/international-freight-forwarding-business-guide-2026">
                                            <h5 className="color-brand-2">International Freight Forwarding: What Businesses Should Know in 2026</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">Discover key trends in international freight, logistics, and global shipping for 2026. Learn how businesses can optimize supply chains and reduce shipment risks.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0">
                                            <Link className="btn btn-link font-sm color-brand-2" href="/international-freight-forwarding-business-guide-2026">View Details
                                                <span>
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <span className="date-post font-sm color-grey-700">26 Dec 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Import Guide */}
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/step-by-step-guide-importing-into-india">
                                            <img src="assets/imgs/b10.jpg" alt="Import Guide" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/step-by-step-guide-importing-into-india">Import</Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/step-by-step-guide-importing-into-india">
                                            <h5 className="color-brand-2">Step-by-Step Guide to Importing Into India: From Shipment to Delivery</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">Learn how to manage import logistics efficiently from overseas shipment to final delivery in India. Simplify cargo shipping with expert tips for smooth imports.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0">
                                            <Link className="btn btn-link font-sm color-brand-2" href="/step-by-step-guide-importing-into-india">
                                                View Details
                                                <span>
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <span className="date-post font-sm color-grey-700">26 Dec 2025</span>
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

