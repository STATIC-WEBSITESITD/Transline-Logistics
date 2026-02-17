import Layout from "@/components/layout/Layout";
import { useState } from "react";

const box = [
    { src: "/assets/imgs/awards/aw1.svg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.13 (1).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.14 (1).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.14 (2).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.14.jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.15 (1).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.15 (2).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.16 (1).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.16 (2).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.16.jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.17 (1).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.17 (2).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.17.jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.18.jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.19 (2).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.20 (1).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.20.jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.21 (1).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.21 (2).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.21.jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.22 (1).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.22.jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.23 (1).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.23.jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.24 (1).jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.24.jpeg" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.25.jpeg" },
];

const cardStyle = {
    transition: "box-shadow 0.3s, transform 0.3s",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    borderRadius: "8px",
    cursor: "pointer",
    border: "1px solid #eee",
};
const cardHoverStyle = {
    boxShadow: "0 6px 24px 0 rgba(0,0,0,0.20)",
    transform: "translateY(-4px) scale(1.03)",
    border: "1px solid #a3d6ff",
};

function Card({ children }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="card h-100 shadow-sm text-center"
            style={{
                ...cardStyle,
                ...(hovered ? cardHoverStyle : {})
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </div>
    );
}

export default function About() {
    return (
        <>
            <Layout
                headTitle="Awards & Certifications | Trusted Pharma Logistics Company"
                metaDescription="Transline Air Cargo is recognized for excellence in pharma logistics, backed by industry certifications, compliance standards and trusted global partnerships."
                metaKeywords="Pharma logistics awards, logistics certifications India, trusted cargo company, compliant pharma logistics, Transline recognitions"
            >
                <section className="section">
                    <div className="box-pageheader-1 text-center" style={{ background: "url(assets/imgs/awards.jpg) no-repeat center/cover fixed" }}>
                        <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">Awards</h2>
                        <p className="color-grey-700 text-white font-lg wow animate__animated animate__fadeIn">
                            Honours and recognitions for our commitment to safe, compliant pharma logistics
                        </p>
                    </div>
                </section>
                <section className="section pt-100 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            {box.map((item, idx) => (
                                <div className="col-md-4 col-sm-6 mb-4" key={idx}>
                                    <Card>
                                        <div
                                            className="card-body d-flex flex-column align-items-center justify-content-center p-3"
                                            style={{ height: 300 }}
                                        >
                                            <img
                                                src={item.src}
                                                alt="Award"
                                                style={{ height: "100%", width: "100%", objectFit: "contain", flexShrink: 0 }}
                                            />
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}