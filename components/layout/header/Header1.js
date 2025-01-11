import Link from "next/link"
import Menu from "../Menu"
import OnePageNav from "../OnePageNav"
import useStore from "../../../store/store"
export default function Header1({
    scroll,
    isOffCanvas,
    handleOffCanvas,
    isSearch,
    handleSearch,
    onePageNav
}) {
    const { contact  } = useStore()
       return (
        <>

            <header>
                <div className="header-top-section fix">
                    <div className="container-fluid">
                        <div className="header-top-wrapper">
                            <ul className="contact-list">
                                <li>
                                    <i className="far fa-envelope" />
                                    <Link href="/mailto:info@genshifter.com" className="link">{`${contact[0]?.email}`}</Link>
                                </li>
                                <li>
                                    <i className="fa-solid fa-phone-volume" />
                                    <Link href="/tel:2086660112">{`${contact[0]?.phone1}`}</Link>
                                </li>
                                <li>
                                    <i className="fa-solid fa-phone-volume" />
                                    <Link href="/tel:+251910813571">{`${contact[0]?.phone2}`}</Link>
                                </li>
                            </ul>
                            <div className="top-right">
                                <div className="social-icon d-flex align-items-center">
                                    <span>Follow Us:</span>
                                    <Link href={`${contact[0]?.facebook}`} target="_blank"><i className="fab fa-facebook-f" /></Link>
                                    <Link href={`${contact[0]?.twitter}`} target="_blank"><i className="fab fa-twitter" /></Link>
                                    <Link href={`${contact[0]?.telegram}`} target="_blank"><i className="fab fa-telegram" /></Link>
                                    <Link href={`${contact[0]?.linkedin}`} target="_blank"><i className="fab fa-linkedin-in" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-sticky" className={`header-1 ${scroll ? "sticky" : ""}`}>
                    <div className="container-fluid bg-red-700">
                        <div className="mega-menu-wrapper">
                            <div className="header-main style-2">
                                <div className="header-left">
                                    <div className="logo">
                                        <Link href="/" className="header-logo bg-red-900 px-10" style={{ width: '00px' }}>
                                            <img src="/assets/img/header/logo.png" style={{ width: '150px', }} alt="logo-img" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="header-right d-flex justify-content-end align-items-center">
                                    <div className="mean__menu-wrapper">
                                        <div className="main-menu">
                                            <nav id="mobile-menu">
                                                {onePageNav ?
                                                    <OnePageNav />
                                                    :
                                                    <Menu />
                                                }
                                            </nav>
                                        </div>
                                    </div>
                                    <a onClick={handleSearch} className="search-trigger search-icon"><i className="fal fa-search" /></a>
                                    <div className="header-button">
                                        <Link href="/contact" className="theme-btn">
                                            <span>
                                                Contact Us
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="header__hamburger d-xl-block my-auto">
                                        <div className="sidebar__toggle" onClick={handleOffCanvas}>
                                            <i className="fas fa-bars" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
