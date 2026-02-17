import Layout from "@/components/layout/Layout";
import Brands1 from "@/components/sections/homepage1/Brands1";
import Brands2 from "@/components/sections/homepage1/Brands2";
import Hero1 from "@/components/sections/homepage1/Hero1";
import Info5 from "@/components/sections/homepage3/Info5";
import Projects3 from "@/components/sections/homepage4/Projects3";
import Requestquote3 from "@/components/sections/homepage3/Requestquote3";
import Faqs1 from "@/components/sections/homepage1/Faqs1";
export default function Home() {
  return (
    <>
      <Layout
        headTitle="Integrated Logistics & Specialised Cargo Solutions | Transline"
        metaDescription="Transline is a trusted logistics partner offering Pharma Logistics Cold Chain air and sea freight customs clearance and reliable Cargo solutions across India."
        metaKeywords="Pharmaceutical logistics India, pharma cargo services, cold chain logistics, air freight pharma, sea freight pharma, reliable logistics company, Transline Air Cargo"
        canonicalUrl="https://transline-logistics.com/"
      >
        <Hero1 />
        <Info5 />
        <Brands1 />
        <Projects3 />
        <Brands2 />
        <div className="section bg-transparent pt-100 pb-0">
          <div className="container">
            <div className="text-center">
              <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                We Are Proud Members of
              </p>
              <h2 className="color-brand-2 mb-65 mt-15 wow animate__animated animate__fadeIn">Memberships & Affiliations</h2>
            </div>
            <div className="mt-35">
            <div className="row justify-content-center">
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex align-items-center justify-content-center">
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: 140, padding: "20px", border: "1px solid #eee", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", background: "#fff", width: "100%"}}>
                  <img src="/assets/imgs/certifications/jc trans.png" alt="JC Trans Certification Logo" style={{maxHeight: 80, maxWidth: 140, objectFit: "contain"}} />
                  <span style={{marginTop: "10px", fontSize: "14px", color: "#666"}}>ID: 159356</span>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex align-items-center justify-content-center">
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: 140, padding: "20px", border: "1px solid #eee", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", background: "#fff", width: "100%"}}>
                  <img src="/assets/imgs/certifications/wca.png" alt="WCA Certification Logo" style={{maxHeight: 80, maxWidth: 140, objectFit: "contain"}} />
                  <span style={{marginTop: "10px", fontSize: "14px", color: "#666"}}>ID: 14422</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <Requestquote3 />
        <Faqs1 />
      </Layout>
    </>
  );
}
