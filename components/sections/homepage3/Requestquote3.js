import Link from "next/link";

export default function Requestquote3() {
    return (
        <>
            <section id="request-a-quote" className="section mt-100 pt-100 pb-100 bg-2 bg-request-quote-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="box-form-request-quote-2 box-form-request-quote-3">
                                <div className="box-form-contact-leading">
                                    <div className="text-center">
                                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Request a Quote</p>
                                        <h2 className="color-brand-2 text-capitalize mb-30 mt-15 wow animate__animated animate__fadeIn">
                                            Get a Quote
                                        </h2>
                                    </div>
                                    <form>
                                        <div className="row align-items-center wow animate__animated animate__fadeIn">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Company Name *" name="company_name" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Name *" name="name" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="email" placeholder="Email *" name="email" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Mobile Number *" name="mobile" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <select className="form-control" name="commodities" required>
                                                        <option value="">Commodities *</option>
                                                        <option value="GENERAL CARGO">GENERAL CARGO</option>
                                                        <option value="AGRICULTURAL SEEDS/PRODUCTS">AGRICULTURAL SEEDS/PRODUCTS</option>
                                                        <option value="AIRCRAFT PARTS">AIRCRAFT PARTS</option>
                                                        {/* <option value="AIRLINE STORES">AIRLINE STORES</option> */}
                                                        {/* <option value="AIRLINE TICKETS">AIRLINE TICKETS</option> */}
                                                        <option value="AUTO PARTS">AUTO PARTS</option>
                                                        <option value="BEAUTY PRODUCTS">BEAUTY PRODUCTS</option>
                                                        {/* <option value="BEVERAGES">BEVERAGES</option> */}
                                                        <option value="BIOLOGICAL SUBSTANCE">BIOLOGICAL SUBSTANCE</option>
                                                        {/* <option value="BUILDING MATLS/ STONES&CERAMICS PROD">BUILDING MATLS/ STONES&CERAMICS PROD</option> */}
                                                        <option value="CARPET">CARPET</option>
                                                        <option value="CHEMICALS (WHICH ARE NOT HAZARDOUS)">CHEMICALS (WHICH ARE NOT HAZARDOUS)</option>
                                                        <option value="COMPUTER PARTS">COMPUTER PARTS</option>
                                                        <option value="CONSOL CARGO">CONSOL CARGO</option>
                                                        {/* <option value="CURRENCY NOTES/SECURITIES/TRAV CHEQUES">CURRENCY NOTES/SECURITIES/TRAV CHEQUES</option> */}
                                                        <option value="DANGEROUS GOODS/HAZARDOUS GOODS">DANGEROUS GOODS/HAZARDOUS GOODS</option>
                                                        {/* <option value="DIAGNOSTIC RE-AGENTS">DIAGNOSTIC RE-AGENTS</option> */}
                                                        {/* <option value="DIPLOMATIC MAIL/GOODS">DIPLOMATIC MAIL/GOODS</option> */}
                                                        <option value="DUMMY COMMODITY">DUMMY COMMODITY</option>
                                                        {/* <option value="EATABLES / FOOD STUFFS/FOOD PRODUCTS">EATABLES / FOOD STUFFS/FOOD PRODUCTS</option> */}
                                                        <option value="ELECTRICAL EQUIPMENT">ELECTRICAL EQUIPMENT</option>
                                                        <option value="ELECTRONICS ITEMS">ELECTRONICS ITEMS</option>
                                                        <option value="ENGINEERING GOODS">ENGINEERING GOODS</option>
                                                        <option value="FABRICS GARMENT ACCESORIES">FABRICS GARMENT ACCESORIES</option>
                                                        <option value="GEMS & STONES (ARTIFICIAL)">GEMS & STONES (ARTIFICIAL)</option>
                                                        <option value="GIFT ITEMS">GIFT ITEMS</option>
                                                        <option value="GLASSWARE PRODUCTS">GLASSWARE PRODUCTS</option>
                                                        {/* <option value="GOAT">GOAT</option> */}
                                                        {/* <option value="GOLD/DIAMONDS/BULLION">GOLD/DIAMONDS/BULLION</option> */}
                                                        <option value="HANDICRAFT ITEMS">HANDICRAFT ITEMS</option>
                                                        {/* <option value="HUMAN REMAINS/DECEASED BAGGAGE/COFFIN">HUMAN REMAINS/DECEASED BAGGAGE/COFFIN</option> */}
                                                        <option value="IMMITATION JEWELLERY">IMMITATION JEWELLERY</option>
                                                        <option value="LEATHER/LEATHER PRODUCTS">LEATHER/LEATHER PRODUCTS</option>
                                                        {/* <option value="LIVE ANIMAL/LIVESTOCK">LIVE ANIMAL/LIVESTOCK</option> */}
                                                        {/* <option value="LOTTERY TICKETS">LOTTERY TICKETS</option> */}
                                                        <option value="MACHINARY PARTS">MACHINARY PARTS</option>
                                                        <option value="MEDICAL AND LAB EQUIPMENTS">MEDICAL AND LAB EQUIPMENTS</option>
                                                        <option value="MEDICINES/PHARMA - GENERAL">MEDICINES/PHARMA - GENERAL</option>
                                                        <option value="MEDICINES/PHARMA - TEMPERATURE">MEDICINES/PHARMA - TEMPERATURE</option>
                                                        <option value="METAL PRODUCTS">METAL PRODUCTS</option>
                                                        {/* <option value="MIAL STORES (ITEMS IMPORTED BY MIAL)">MIAL STORES (ITEMS IMPORTED BY MIAL)</option> */}
                                                        <option value="MMTC CARGO">MMTC CARGO</option>
                                                        <option value="NEWS PAPER/TV NEWS CASSETTES">NEWS PAPER/TV NEWS CASSETTES</option>
                                                        <option value="PACKAGING MATERIALS">PACKAGING MATERIALS</option>
                                                        <option value="PERISHABLE-EXPORTS">PERISHABLE-EXPORTS</option>
                                                        {/* <option value="PERISHABLE-IMPORTS (CARGO STORED IN COLD STORAGE)">PERISHABLE-IMPORTS (CARGO STORED IN COLD STORAGE)</option> */}
                                                        <option value="PLASTIC PRODUCTS">PLASTIC PRODUCTS</option>
                                                        <option value="PRINTED MATTER/ADVTG. MATL/FILM PRINTS/STATIONERY">PRINTED MATTER/ADVTG. MATL/FILM PRINTS/STATIONERY</option>
                                                        {/* <option value="RE-EXPORT CARGO">RE-EXPORT CARGO</option> */}
                                                        <option value="READYMADE GOODS">READYMADE GOODS</option>
                                                        {/* <option value="SHB CARGO">SHB CARGO</option> */}
                                                        {/* <option value="SILVER">SILVER</option> */}
                                                        <option value="SPARE PARTS">SPARE PARTS</option>
                                                        <option value="SPECIAL HANDLING EQUIPMENT / CARGO">SPECIAL HANDLING EQUIPMENT / CARGO</option>
                                                        <option value="SPECIAL HANDLING/HEAVY CARGO">SPECIAL HANDLING/HEAVY CARGO</option>
                                                        <option value="SPECIAL HANDLING/PROJECT CARGO">SPECIAL HANDLING/PROJECT CARGO</option>
                                                        {/* <option value="SPICES">SPICES</option> */}
                                                        <option value="SPORTS WEAPONS">SPORTS WEAPONS</option>
                                                        <option value="TEA/COFFEE">TEA/COFFEE</option>
                                                        <option value="TEXTILES (HOUSEHOLD)">TEXTILES (HOUSEHOLD)</option>
                                                        {/* <option value="TOBACCO">TOBACCO</option> */}
                                                        {/* <option value="UNACCOMPANIED BAGGAGE/PERSONNEL EFFECTS">UNACCOMPANIED BAGGAGE/PERSONNEL EFFECTS</option> */}
                                                        <option value="VACCINES">VACCINES</option>
                                                        {/* <option value="WATCHES MADE OF SILVER/GOLD/PLATINUM">WATCHES MADE OF SILVER/GOLD/PLATINUM</option> */}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Weight *" name="weight" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Number Of Pieces *" name="pieces" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Dimensions *" name="dimensions" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Destination *" name="destination" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="additional_info" rows={1} placeholder="Additional Information *" defaultValue={""} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-brand-1-big w-100">
                                                    Submit Now
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="why-choose-transline">
                                <div className="text-left">
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Why Choose Us</p>
                                    <h2 className="color-brand-2 text-capitalize mb-30 mt-15 wow animate__animated animate__fadeIn">
                                        Why Choose Transline
                                    </h2>
                                </div>
                                <ul className="list-why-choose">
                                    <li className="wow animate__animated animate__fadeIn mb-25">
                                        <h5 className="color-brand-2">Pharma-Grade Precision</h5>
                                        <p className="font-md color-grey-700">
                                            We apply the world’s strictest handling standards to all shipments, from medicine to textiles.
                                        </p>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn mb-25">
                                        <h5 className="color-brand-2">Coverage</h5>
                                        <p className="font-md color-grey-700">
                                            Full-spectrum services including Air, Sea, Customs Clearance, and Cold Chain.
                                        </p>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn mb-25">
                                        <h5 className="color-brand-2">Reliability</h5>
                                        <p className="font-md color-grey-700">
                                            A proven track record of reliability and compliance, with long-standing client partnerships built on trust.
                                        </p>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn mb-25">
                                        <h5 className="color-brand-2">National Network</h5>
                                        <p className="font-md color-grey-700">
                                            Head office in Mumbai, with strategic branches across major hubs like Bangalore, Chennai, Delhi, Ahmedabad, Goa and Hyderabad.
                                        </p>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn mb-25">
                                        <h5 className="color-brand-2">Team &amp; Expertise</h5>
                                        <p className="font-md color-grey-700">
                                            Supported by a team of 80+ trained professionals committed to efficiency and customer satisfaction.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
