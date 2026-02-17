import Layout from "@/components/layout/Layout"

export default function Contact() {

    return (
        <>
            <Layout
                headTitle="Contact Transline Air Cargo | Pharma Logistics Experts"
                metaDescription="Get in touch with Transline Air Cargo for reliable pharmaceutical logistics, cold chain solutions, air & sea freight services across India and global markets."
                metaKeywords="Contact pharma logistics company, Transline Air Cargo contact, pharma cargo support India, logistics company Mumbai, cold chain logistics contact"
                canonicalUrl="https://transline-logistics.com/contact"
            >
                <section className="section">
                    <div className="box-pageheader-1 text-center" style={{ background: "url(assets/imgs/contact.jpg) no-repeat top/cover fixed" }}>
                        <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">Contact Us</h2>
                        <p className="color-grey-700 text-white font-lg wow animate__animated animate__fadeIn">
                            Speak with our pharmaceutical logistics experts for enquiries, quotes and support
                        </p>
                    </div>
                </section>
                <section className="section pt-100 pb-100">
                    <div className="container">
                        <div className="text-center">
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">We would love to hear from you</p>
                            <h2 className="color-brand-2 text-capitalize mb-65 mt-15 wow animate__animated animate__fadeIn">
                                Reach out to our team
                            </h2>
                        </div>
                        <div className="mt-35">
                            <div className="row align-items-start">
                                <div className="col-lg-6">
                                    <form style={{
                                        background: '#ffffff',
                                        padding: '50px 40px',
                                        borderRadius: '8px',
                                        boxShadow: '0px 10px 42px rgba(1, 9, 20, 0.06)',
                                        height: '100%'
                                    }}>
                                        <div className="row align-items-center wow animate__animated animate__fadeIn">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input 
                                                        className="form-control" 
                                                        type="text" 
                                                        placeholder="Your name *" 
                                                        name="name"
                                                        style={{
                                                            border: '1px solid #e0e0e0',
                                                            borderRadius: '4px',
                                                            padding: '14px 18px',
                                                            fontSize: '14px',
                                                            transition: 'all 0.3s ease',
                                                            width: '100%'
                                                        }}
                                                        onFocus={(e) => {
                                                            e.target.style.borderColor = '#ffe799';
                                                            e.target.style.boxShadow = '0 0 0 3px rgba(255, 231, 153, 0.1)';
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.borderColor = '#e0e0e0';
                                                            e.target.style.boxShadow = 'none';
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input 
                                                        className="form-control" 
                                                        type="email" 
                                                        placeholder="Your email *" 
                                                        name="email"
                                                        style={{
                                                            border: '1px solid #e0e0e0',
                                                            borderRadius: '4px',
                                                            padding: '14px 18px',
                                                            fontSize: '14px',
                                                            transition: 'all 0.3s ease',
                                                            width: '100%'
                                                        }}
                                                        onFocus={(e) => {
                                                            e.target.style.borderColor = '#ffe799';
                                                            e.target.style.boxShadow = '0 0 0 3px rgba(255, 231, 153, 0.1)';
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.borderColor = '#e0e0e0';
                                                            e.target.style.boxShadow = 'none';
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input 
                                                        className="form-control" 
                                                        type="text" 
                                                        placeholder="Mobile *" 
                                                        name="mobile"
                                                        style={{
                                                            border: '1px solid #e0e0e0',
                                                            borderRadius: '4px',
                                                            padding: '14px 18px',
                                                            fontSize: '14px',
                                                            transition: 'all 0.3s ease',
                                                            width: '100%'
                                                        }}
                                                        onFocus={(e) => {
                                                            e.target.style.borderColor = '#ffe799';
                                                            e.target.style.boxShadow = '0 0 0 3px rgba(255, 231, 153, 0.1)';
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.borderColor = '#e0e0e0';
                                                            e.target.style.boxShadow = 'none';
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input 
                                                        className="form-control" 
                                                        type="text" 
                                                        placeholder="Subject *" 
                                                        name="subject"
                                                        style={{
                                                            border: '1px solid #e0e0e0',
                                                            borderRadius: '4px',
                                                            padding: '14px 18px',
                                                            fontSize: '14px',
                                                            transition: 'all 0.3s ease',
                                                            width: '100%'
                                                        }}
                                                        onFocus={(e) => {
                                                            e.target.style.borderColor = '#ffe799';
                                                            e.target.style.boxShadow = '0 0 0 3px rgba(255, 231, 153, 0.1)';
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.borderColor = '#e0e0e0';
                                                            e.target.style.boxShadow = 'none';
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea 
                                                        className="form-control" 
                                                        name="message" 
                                                        rows={8} 
                                                        placeholder="Message *" 
                                                        defaultValue={""}
                                                        style={{
                                                            border: '1px solid #e0e0e0',
                                                            borderRadius: '4px',
                                                            padding: '14px 18px',
                                                            fontSize: '14px',
                                                            transition: 'all 0.3s ease',
                                                            width: '100%',
                                                            resize: 'vertical',
                                                            fontFamily: 'inherit'
                                                        }}
                                                        onFocus={(e) => {
                                                            e.target.style.borderColor = '#ffe799';
                                                            e.target.style.boxShadow = '0 0 0 3px rgba(255, 231, 153, 0.1)';
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.borderColor = '#e0e0e0';
                                                            e.target.style.boxShadow = 'none';
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-brand-1-big" style={{ marginTop: '10px' }}>
                                                    Submit Now
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box-contact-info wow animate__animated animate__fadeIn" style={{
                                        background: '#ffffff',
                                        padding: '50px 40px',
                                        borderRadius: '8px',
                                        boxShadow: '0px 10px 42px rgba(1, 9, 20, 0.06)',
                                        height: '100%'
                                    }}>
                                        <h3 className="color-brand-2 mb-30" style={{ fontSize: '28px', fontWeight: '700' }}>Head Office</h3>
                                        <div className="mb-30">
                                            <h5 className="color-brand-2 mb-20" style={{ fontSize: '20px', fontWeight: '600' }}>Mumbai (Head Office)</h5>
                                            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px', color: '#ffe799', marginRight: '15px', marginTop: '4px', flexShrink: 0 }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                </svg>
                                                <p className="font-md color-grey-700 mb-0" style={{ whiteSpace: "pre-line", lineHeight: "1.8", margin: 0 }}>
                                                    116/117, Sahar Cargo Estate,<br />
                                                    J. B. Nagar, Andheri East,<br />
                                                    Mumbai – 400099
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-30">
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px', color: '#ffe799', marginRight: '15px', flexShrink: 0 }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>
                                                <p className="font-md color-grey-700 mb-0">
                                                    <a href="mailto:pricing@translinelogistics.com" className="color-grey-700" style={{ textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ffe799'} onMouseLeave={(e) => e.target.style.color = '#5B647C'}>
                                                        pricing@translinelogistics.com
                                                    </a>
                                                </p>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px', color: '#ffe799', marginRight: '15px', flexShrink: 0 }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                                <p className="font-md color-grey-700 mb-0">
                                                    <a href="tel:+919819669926" className="color-grey-700" style={{ textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ffe799'} onMouseLeave={(e) => e.target.style.color = '#5B647C'}>
                                                        +91 98196 69926
                                                    </a>
                                                </p>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px', color: '#ffe799', marginRight: '15px', flexShrink: 0 }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <p className="font-md color-grey-700 mb-0">
                                                    Working hours: Monday–Saturday, 9:30 AM – 5:30 PM
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section pb-100">
                    <div className="container">
                        <div className="text-center">
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                                Connect with our regional offices across India
                            </p>
                            <h2 className="color-brand-2 text-capitalize mb-65 mt-15 wow animate__animated animate__fadeIn">
                                Our Branch Offices
                            </h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch wow animate__animated animate__fadeIn">
                                <div className="card branch-card w-100 h-100 d-flex flex-column" style={{
                                    background: '#ffffff',
                                    borderRadius: '12px',
                                    boxShadow: '0px 4px 20px rgba(1, 9, 20, 0.08)',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid #f0f0f0',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0px 8px 30px rgba(1, 9, 20, 0.12)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0px 4px 20px rgba(1, 9, 20, 0.08)';
                                }}>
                                    <div className="card-body d-flex flex-column" style={{ padding: '35px 30px' }}>
                                        <h5 className="color-brand-2 mb-3" style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px' }}>Bengaluru</h5>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '18px', height: '18px', color: '#ffe799', marginRight: '12px', marginTop: '4px', flexShrink: 0 }}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            <p className="font-sm color-grey-700 mb-0" style={{ whiteSpace: "pre-line", lineHeight: "1.8", fontSize: '14px' }}>
                                                No. 209, Prestige Terminus – 1,<br />
                                                2nd Floor, Airport Exit Road,<br />
                                                Bengaluru – 580017
                                            </p>
                                        </div>
                                        <div className="mt-auto" style={{ paddingTop: '20px', borderTop: '1px solid #f0f0f0' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px', color: '#ffe799', marginRight: '10px', flexShrink: 0 }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                                <a href="tel:9845794536" className="color-grey-700" style={{ textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ffe799'} onMouseLeave={(e) => e.target.style.color = '#5B647C'}>9845794536</a>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px', color: '#ffe799', marginRight: '10px', flexShrink: 0 }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>
                                                <a href="mailto:pricing@translinelogistics.com" className="color-grey-700" style={{ textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ffe799'} onMouseLeave={(e) => e.target.style.color = '#5B647C'}>pricing@translinelogistics.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch wow animate__animated animate__fadeIn">
                                <div className="card branch-card w-100 h-100 d-flex flex-column" style={{
                                    background: '#ffffff',
                                    borderRadius: '12px',
                                    boxShadow: '0px 4px 20px rgba(1, 9, 20, 0.08)',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid #f0f0f0',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0px 8px 30px rgba(1, 9, 20, 0.12)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0px 4px 20px rgba(1, 9, 20, 0.08)';
                                }}>
                                    <div className="card-body d-flex flex-column" style={{ padding: '35px 30px' }}>
                                        <h5 className="color-brand-2 mb-3" style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px' }}>Chennai</h5>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '18px', height: '18px', color: '#ffe799', marginRight: '12px', marginTop: '4px', flexShrink: 0 }}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            <p className="font-sm color-grey-700 mb-0" style={{ whiteSpace: "pre-line", lineHeight: "1.8", fontSize: '14px' }}>
                                                No. 5, Thiru-Vi-Ka Street,<br />
                                                Meenambakkam,<br />
                                                Chennai – 600027
                                            </p>
                                        </div>
                                        <div className="mt-auto" style={{ paddingTop: '20px', borderTop: '1px solid #f0f0f0' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px', color: '#ffe799', marginRight: '10px', flexShrink: 0 }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                                <a href="tel:9444443007" className="color-grey-700" style={{ textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ffe799'} onMouseLeave={(e) => e.target.style.color = '#5B647C'}>9444443007</a>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px', color: '#ffe799', marginRight: '10px', flexShrink: 0 }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>
                                                <a href="mailto:pricing@translinelogistics.com" className="color-grey-700" style={{ textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ffe799'} onMouseLeave={(e) => e.target.style.color = '#5B647C'}>pricing@translinelogistics.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch wow animate__animated animate__fadeIn">
                                <div className="card branch-card w-100 h-100 d-flex flex-column" style={{
                                    background: '#ffffff',
                                    borderRadius: '12px',
                                    boxShadow: '0px 4px 20px rgba(1, 9, 20, 0.08)',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid #f0f0f0',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0px 8px 30px rgba(1, 9, 20, 0.12)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0px 4px 20px rgba(1, 9, 20, 0.08)';
                                }}>
                                    <div className="card-body d-flex flex-column" style={{ padding: '35px 30px' }}>
                                        <h5 className="color-brand-2 mb-3" style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px' }}>Delhi (Gurgaon)</h5>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '18px', height: '18px', color: '#ffe799', marginRight: '12px', marginTop: '4px', flexShrink: 0 }}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            <p className="font-sm color-grey-700 mb-0" style={{ whiteSpace: "pre-line", lineHeight: "1.8", fontSize: '14px' }}>
                                                1416, 14th Floor, Galleria Tower,<br />
                                                DLF Phase 4,<br />
                                                Gurgaon, Haryana – 122009
                                            </p>
                                        </div>
                                        <div className="mt-auto" style={{ paddingTop: '20px', borderTop: '1px solid #f0f0f0' }}>
                                            {/* <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px', color: '#ffe799', marginRight: '10px', flexShrink: 0 }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                                <span className="color-grey-700" style={{ fontSize: '14px' }}>Contact for details</span>
                                            </div> */}
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px', color: '#ffe799', marginRight: '10px', flexShrink: 0 }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>
                                                <a href="mailto:pricing@translinelogistics.com" className="color-grey-700" style={{ textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ffe799'} onMouseLeave={(e) => e.target.style.color = '#5B647C'}>pricing@translinelogistics.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch wow animate__animated animate__fadeIn">
                                <div className="card branch-card w-100 h-100 d-flex flex-column" style={{
                                    background: '#ffffff',
                                    borderRadius: '12px',
                                    boxShadow: '0px 4px 20px rgba(1, 9, 20, 0.08)',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid #f0f0f0',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0px 8px 30px rgba(1, 9, 20, 0.12)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0px 4px 20px rgba(1, 9, 20, 0.08)';
                                }}>
                                    <div className="card-body d-flex flex-column" style={{ padding: '35px 30px' }}>
                                        <h5 className="color-brand-2 mb-3" style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px' }}>Ahmedabad</h5>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '18px', height: '18px', color: '#ffe799', marginRight: '12px', marginTop: '4px', flexShrink: 0 }}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            <p className="font-sm color-grey-700 mb-0" style={{ whiteSpace: "pre-line", lineHeight: "1.8", fontSize: '14px' }}>
                                                Office No. 317, Sunrise Mall,<br />
                                                Nyay Marg,<br />
                                                Ahmedabad, Gujarat – 380015
                                            </p>
                                        </div>
                                        <div className="mt-auto" style={{ paddingTop: '20px', borderTop: '1px solid #f0f0f0' }}>
                                            {/* <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px', color: '#ffe799', marginRight: '10px', flexShrink: 0 }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                                <span className="color-grey-700" style={{ fontSize: '14px' }}>Contact for details</span>
                                            </div> */}
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px', color: '#ffe799', marginRight: '10px', flexShrink: 0 }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>
                                                <a href="mailto:pricing@translinelogistics.com" className="color-grey-700" style={{ textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ffe799'} onMouseLeave={(e) => e.target.style.color = '#5B647C'}>pricing@translinelogistics.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="section d-block">
                    <div className="box-map-contact wow animate__animated animate__fadeIn">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0276435154933!2d72.86090877497823!3d19.106443182104424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c84844b1b5b7%3A0xa83cacd6feb6cadc!2sTransline%20Air%20Cargo%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1765982506015!5m2!1sen!2sin" height={570} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>

            </Layout>
        </>
    )
}