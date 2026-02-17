import { useState } from "react";

export default function Accordion3() {
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
            <div className="accordion" id="accordionFAQ3">
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key === 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            1. Do you handle Air Freight for pharmaceutical cargo
                        </button>
                    </h5>
                    <div className={isActive.key === 1 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            Yes, we specialise in fast and reliable Air Freight services for pharmaceutical cargo with global reach and priority handling.
                        </div>
                    </div>
                </div>

                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key === 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            2. Do you offer Global Sea Freight solutions for pharma shipments
                        </button>
                    </h5>
                    <div className={isActive.key === 2 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            Yes, we manage global Sea Freight for pharmaceutical cargo, handling shipments efficiently from port to port with proper planning and documentation.
                        </div>
                    </div>
                </div>

                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key === 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            3. Can you manage pharmaceutical cargo at every port
                        </button>
                    </h5>
                    <div className={isActive.key === 3 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            Yes, our global network and port level coordination ensure smooth handling of pharmaceutical cargo at origin and destination ports.
                        </div>
                    </div>
                </div>

                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                        <button className={isActive.key === 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            4. Do you provide Customs clearance for Import and Export shipments
                        </button>
                    </h5>
                    <div className={isActive.key === 4 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            Yes, we offer complete Customs clearance services for both Import and Export pharmaceutical shipments across Air Freight and Sea Freight.
                        </div>
                    </div>
                </div>

                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(5)}>
                        <button className={isActive.key === 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            5. How do you ensure fast Customs processing for Import and Export cargo
                        </button>
                    </h5>
                    <div className={isActive.key === 5 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            Our experienced team ensures fast Customs coordination, accurate documentation, and compliance to avoid delays at the port or airport.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
