'use client'
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import useStore from "@/store/store"


export default function Offcanvas({
    isOffCanvas,
    handleOffCanvas,
}) {
    const { contact ,info ,service } = useStore()
    return (
        <>
            <div className="fix-area">
                <div className={`offcanvas__info ${isOffCanvas ? "info-open" : ""}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link href="/">
                                        <img src="/assets/img/header/logo.png" alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="offcanvas__close" onClick={handleOffCanvas}>
                                    <button>
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <p className="text d-none d-lg-block">
                            "Ready to get started with GenShifter Technologies.? Empower your business with our cutting-edge technology solutions, expert software development, and tailored IT services. Let us help you innovate and achieve your goals. Get started today!"                 </p>
                            <div className="d-none d-md-block d-lg-none">
                               
                            </div>
                            <div className="mobile-menu">
                                <MobileMenu />
                            </div>
                            <div className="offcanvas__contact">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fal fa-map-marker-alt" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link target="_blank" href="#">{contact[0]?.address}</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-envelope" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link href={`mailto:${contact[0]?.email}`}><span className="mailto:info@genshifter.com">{contact[0]?.email}</span></Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-clock" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link target="_blank" href="#">Mod-friday, 09am -05pm</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone" />
                                        </div>
                                        <div className="offcanvas__contact-text ">
                                            <Link href={`tel:${contact[0]?.phone1}`}>{contact[0]?.phone1}</Link>
                                    
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone" />
                                        </div>
                                        <div className="offcanvas__contact-text ">
                                         
                                            <Link href={`tel:${contact[0]?.phone2}`}>{contact[0]?.phone2}</Link>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">
                                    <Link href="/contact" className="theme-btn text-center">
                                        <span>Contact Us<i className="fa-solid fa-arrow-right-long" /></span>
                                    </Link>
                                </div>
                                <div className="social-icon d-flex align-items-center">
                                <Link href={`${contact[0]?.facebook}`} target="_blank"><i className="fab fa-facebook-f" /></Link>
                                    <Link href={`${contact[0]?.twitter}`} target="_blank"><i className="fab fa-twitter" /></Link>
                                    <Link href={`${contact[0]?.telegram}`} target="_blank"><i className="fab fa-telegram" /></Link>
                                    <Link href={`${contact[0]?.linkedin}`} target="_blank"><i className="fab fa-linkedin-in" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`offcanvas__overlay ${isOffCanvas ? "overlay-open" : ""}`} onClick={handleOffCanvas} />
        </>

    )
}
