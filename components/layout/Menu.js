import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu() {
    const router = useRouter();
    const { pathname } = router;

    const isActive = (href) => {
        if (href === "/") {
            // Treat homepage variants as "Home" too: /, /index-2, /index-3, /index-4, etc.
            return pathname === "/" || /^\/index-\d+$/.test(pathname);
        }
        if (href === "/services") {
            // Highlight services on service detail page too
            return pathname === "/services" || pathname === "/service-detail";
        }
        return pathname === href;
    };

    return (
        <>
            <ul className="main-menu">
                <li><Link className={isActive("/") ? "active" : ""} href="/">Home</Link></li>
                <li><Link className={isActive("/about") ? "active" : ""} href="/about">About Us</Link></li>
                <li className="has-children">
                    <Link className={isActive("/services") ? "active" : ""} href="/services">Services</Link>
                    <ul className="sub-menu">
                        <li><Link href="/air-freight">Air Freight</Link></li>
                        <li><Link href="/sea-freight">Sea Freight</Link></li>
                        <li><Link href="/customs-clearance">Customs Clearance</Link></li>
                    </ul>
                </li>
                <li><Link className={isActive("/awards") ? "active" : ""} href="/awards">Awards</Link></li>
                <li><Link className={isActive("/blogs") ? "active" : ""} href="/blogs">Blogs</Link></li>
                <li><Link className={isActive("/contact") ? "active" : ""} href="/contact">Contact Us</Link></li>
            </ul>
        </>
    );
}
