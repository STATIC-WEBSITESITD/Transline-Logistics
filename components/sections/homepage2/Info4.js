import Link from "next/link";

export default function Info4() {
    return (
        <>
            <section className="section pt-110 bg-info-4">
                <div className="container">
                    {/* <div className="text-center">
                        <h2 className="color-brand-2 mb-20 wow animate__animated animate__fadeIn">
                            Group Companies
                        </h2>
                    </div> */}
                    <div className="box-why-choose-us-2">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-7 mb-30">
                                <div className="box-info-pround">
                                    {/* <span className="btn btn-tag color-grey-900 wow animate__animated animate__fadeIn">
                                        The Transline Group
                                    </span> */}
                                    <h2 className="color-brand-2 mb-15 mt-20 wow animate__animated animate__fadeIn">
                                        Group Companies
                                    </h2>
                                    <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                                        The Transline Group consists of two main entities, allowing us to offer holistic solutions:
                                    </p>
                                    <div className="mt-30">
                                        <ul className="list-ticks list-ticks-3" style={{ paddingLeft: 0, listStyle: "none" }}>
                                            <li className="d-flex align-items-start w-100 mb-25 wow animate__animated animate__fadeIn">
                                                <span style={{ marginRight: "16px", marginTop: "4px", flexShrink: 0 }}>
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </span>
                                                <div>
                                                    <h6 className="color-brand-2 mb-3" style={{ fontWeight: 600, fontSize: "1.08rem", marginBottom: 2 }}>Transline Air Cargo Services Pvt. Ltd.</h6>
                                                    <span className="color-grey-900 font-md" style={{ display: "block", lineHeight: 1.5 }}>
                                                        Flagship company and pharmaceutical air freight specialist, ensuring fast delivery of critical cargo.
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-start w-100 mb-25 wow animate__animated animate__fadeIn">
                                                <span style={{ marginRight: "16px", marginTop: "4px", flexShrink: 0 }}>
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </span>
                                                <div>
                                                    <h6 className="color-brand-2 mb-3" style={{ fontWeight: 600, fontSize: "1.08rem", marginBottom: 2 }}>Transline Cargo Services</h6>
                                                    <span className="color-grey-900 font-md" style={{ display: "block", lineHeight: 1.5 }}>
                                                        Focuses on pharma ocean freight forwarding and global shipping support for containerized cargo.
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="mt-30 text-start">
                                        <Link className="btn btn-brand-2 mr-20 wow animate__animated animate__fadeIn" href="/contact">
                                            Contact Us
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 mb-30">
                                <div className="box-images-info-4">
                                    <div className="box-images-inner">
                                        <img className="img-main" src="/assets/imgs/page/homepage2/img-info-4.png" alt="transp" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
