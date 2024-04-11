import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <div >
                        <NavLink to='/'><h1 className='text-[#2a9d8f] font-extrabold text-3xl font-bungee text-left'>Utopia</h1></NavLink>
                    </div>
                    <p className="font-mont font-medium">Utopia Real Estate Ltd.<br />Providing various properties since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Categories</h6>
                    <a className="link link-hover font-mont font-medium">Recent Property</a>
                    <a className="link link-hover font-mont font-medium">to Sell</a>
                    <a className="link link-hover font-mont font-medium">to Rent</a>
                    <a className="link link-hover font-mont font-medium">to Buy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a className="link link-hover font-mont font-medium">Mirpur 10 No. Road, Dhaka</a>
                    <a className="link link-hover font-mont font-medium">+111 222 369 45</a>
                    <a className="link link-hover font-mont font-medium">+123 456 789 11</a>
                    <a className="link link-hover font-mont font-medium">utopia@realestate.com</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover font-mont font-medium">Terms of use</a>
                    <a className="link link-hover font-mont font-medium">Privacy policy</a>
                    <a className="link link-hover font-mont font-medium">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;