import Link from "next/link";

export default function Footer1({ }) {
    return (
        <>
            <footer className="footer">
                <div className="footer-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mb-30">
                                <div className="mb-20">
                                    <img src="/assets/imgs/logo.svg" alt="transp" style={{width: "100px"}} />
                                </div>
                                <p className="font-xs mb-20 color-white">Transline Air Cargo is India’s trusted partner in pharmaceutical logistics, specializing in reliable air, sea, and cold chain cargo solutions. Since 1989, we have ensured safe, fast, and compliant delivery of temperature-sensitive shipments, supporting healthcare providers and life-saving products across the globe.</p>
                                {/* <h6 className="color-brand-1">Follow Us</h6>
                                <div className="mt-15"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /><Link className="icon-socials icon-youtube" href="#" /><Link className="icon-socials icon-skype" href="#" /></div> */}
                            </div>
                            <div className="col-lg-2 mb-30">
                                <h5 className="mb-10 color-brand-1">Quick Links</h5>
                                <ul className="menu-footer">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/awards">Awards</Link></li>
                                    <li><Link href="/blogs">Blogs</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 mb-30">
                                <h5 className="mb-10 color-brand-1">Our Services</h5>
                                <ul className="menu-footer">
                                    <li><Link href="/air-freight">Air Freight</Link></li>
                                    <li><Link href="/sea-freight">Sea Freight</Link></li>
                                    <li><Link href="/customs-clearance">Customs Clearance</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 mb-30">
                                <h5 className="mb-10 color-brand-1">Contact Us</h5>
                                <ul className="list-unstyled footer-contact-info">
                                    <li className="d-flex align-items-start mb-2">
                                        <span className="me-2 d-flex align-items-center" style={{width: "22px"}}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="7" width="18" height="13" rx="2" fill="none"/>
                                                <path d="M9 7V5a3 3 0 0 1 6 0v2" />
                                                <path d="M9 12h.01" />
                                                <path d="M15 12h.01" />
                                                <path d="M9 16h.01" />
                                                <path d="M15 16h.01" />
                                            </svg>
                                        </span>
                                        <span className="font-xs color-white">
                                            <strong>TRANSLINE AIR CARGO SERVICES PVT. LTD.</strong>
                                        </span>
                                    </li>
                                    <li className="d-flex align-items-start mb-2">
                                        <span className="me-2 d-flex align-items-center" style={{width: "22px"}}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 21s8-6.58 8-11A8 8 0 1 0 4 10c0 4.42 8 11 8 11z" fill="none"/>
                                                <circle cx="12" cy="10" r="3" fill="none"/>
                                            </svg>
                                        </span>
                                        <span className="font-xs color-white">
                                            <strong>Head Office (Mumbai)</strong><br/>
                                            <a href="https://maps.app.goo.gl/M9ijtgBueTaxsCBE9" target="_blank" rel="noopener noreferrer" className="color-white">
                                                116/117, Sahar Cargo Estate,<br/>
                                                J B Nagar, Andheri East,<br/>
                                                Mumbai 400099, India
                                            </a>
                                        </span>
                                    </li>
                                    <li className="d-flex align-items-start mb-2">
                                        <span className="me-2 d-flex align-items-center" style={{width: "22px"}}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.12.81-.18 1.65-.7 2.17l-1.1 1.1a16 16 0 0 0 6.86 6.86l1.1-1.1c.52-.52 1.36-.82 2.17-.7A2 2 0 0 1 22 16.92z" fill="none"/>
                                            </svg>
                                        </span>
                                        <span className="font-xs color-white">
                                            <a href="tel:+912223511318" className="color-white">+91 98196 69926</a>
                                        </span>
                                    </li>
                                    <li className="d-flex align-items-start mb-2">
                                        <span className="me-2 d-flex align-items-center" style={{width: "22px"}}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="5" width="18" height="14" rx="2" fill="none"/>
                                                <polyline points="3 7 12 13 21 7" />
                                            </svg>
                                        </span>
                                        <span className="font-xs color-white">
                                            <a href="mailto:pricing@translinelogistics.com" className="color-white">pricing@translinelogistics.com</a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-2 border-top border-white">
                    <div className="container">
                        <div className="footer-bottom">
                            <div className="row align-items-center">
                                <div className="col-lg-12 col-md-12 text-center text-lg-center">
                                    <span className="color-white font-md">
                                    © {new Date().getFullYear()} Transline Developed by <a href="https://www.itdgrowthlabs.com/" target="_blank" className="color-white">ITD Growthlabs Pvt. Ltd.</a>
                                    </span>
                                </div>
                                {/* <div className="col-lg-6 col-md-12 text-center text-lg-end">
                                    <ul className="menu-bottom">
                                        <li><Link className="font-sm color-grey-300" href="/term-conditions">Privacy policy</Link>
                                        </li>
                                        <li><Link className="font-sm color-grey-300" href="/term-conditions">Cookies</Link></li>
                                        <li><Link className="font-sm color-grey-300" href="/term-conditions">Terms of service</Link>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
