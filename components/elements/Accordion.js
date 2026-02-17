import { useState } from "react";

export default function Accordion() {
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
            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            What type of Cargo does Transline handle?
                        </button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            Transline manages a wide range of Cargo including Pharma Logistics, Dangerous Goods, Textiles, Machinery and General Cargo using reliable and compliant logistics processes.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            How do you ensure reliable Cargo movement?
                        </button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            We follow strict planning, documentation and monitoring systems to ensure every Cargo shipment moves safely, on time and with complete reliability.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            Do you provide Cold Chain support only for pharmaceuticals?
                        </button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            Our Cold Chain infrastructure supports Pharma Logistics and can also be used for any temperature sensitive Cargo that requires controlled and reliable handling.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                        <button className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            Which logistics services do you offer?
                        </button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            We provide integrated logistics solutions including air freight, sea freight, customs clearance and Cold Chain support for Pharma and general Cargo.
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
                            With decades of experience, a strong national network and expertise in Pharma Logistics, we deliver reliable Cargo solutions built on trust, compliance and consistency.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
