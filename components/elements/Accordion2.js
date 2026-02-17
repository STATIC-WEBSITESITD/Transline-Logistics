import { useState } from "react";

export default function Accordion2() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className="accordion" id="accordionFAQ2">
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            What type of Cargo does Transline handle?
                        </button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            Transline manages a wide range of Cargo including pharmaceuticals, Dangerous Goods, Textiles, Machinery, and General Cargo with reliable and precise handling.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            How fast is your logistics service?
                        </button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            We ensure fast and efficient movement of Cargo through our integrated Pharma Logistics network, maintaining high standards and timely delivery.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            Do you specialise only in Pharma Logistics?
                        </button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            While Pharma Logistics is a core strength, we also provide reliable Cargo solutions for Dangerous Goods, Textiles, Machinery, and general shipments.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                        <button className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            Which services do you offer for Cargo management?
                        </button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            Our services include air freight, sea freight, Cold Chain logistics, warehousing, and end-to-end supply chain solutions for fast and reliable Cargo movement.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(5)}>
                        <button className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            Why choose Transline as a logistics partner?
                        </button>
                    </h5>
                    <div className={isActive.key == 5 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            With decades of experience, a strong national network, and expertise in Pharma Logistics, we deliver fast, reliable Cargo solutions built on trust, compliance, and precision.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
