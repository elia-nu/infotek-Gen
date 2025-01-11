'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import useStore from '../../store/store';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },
    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

const services22 = [
    {
        icon: "/assets/img/service/icon/s-icon-1.svg",
        title: "Software Development",
        description: "Our Software Development services encompass Custom Software",
    },
    {
        icon: "/assets/img/service/icon/s-icon-2.svg", 
        title: "Managed Services",
        description: "Our Managed Services offering includes comprehensive IT Support and"
    },
    {
        icon: "/assets/img/service/icon/s-icon-3.svg",
        title: "Infrastructure Services", 
        description: "We offer comprehensive Infrastructure Services, including Network"
    },
    {
        icon: "/assets/img/service/icon/s-icon-4.svg",
        title: "System Integration",
        description: "Our System Integration services provide seamless connectivity through"
    },
    {
        icon: "/assets/img/service/icon/s-icon-1.svg",
        title: "Training and Development",
        description: "Our Training and Development services encompass Technical Training,"
    },
    {
        icon: "/assets/img/service/icon/s-icon-2.svg",
        title: "Cybersecurity Services",
        description: "Our Cybersecurity Services provide a robust defense against threats"
    }
]

export default function Service1() {
    const { service } = useStore();
    console.log(service, 'service')
    return (
        <>
            <section className="service-section fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }} id="service">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">IT services</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                We Solve IT Problems <br /> With Technology
                            </h2>
                        </div>
                        <div className="array-button">
                            <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                            <button className="array-next"><i className="fal fa-arrow-left" /></button>
                        </div>
                    </div>
                    <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                {service.map((services, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="service-box-items">
                                            <div className="icon">
                                                <img src={`/assets/img/service/icon/s-icon-${Math.floor(Math.random() * 4) + 1}.svg`} alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href={`/service-details?title=${encodeURIComponent(services._id)}`}>
                                                        {services.title}
                                                    </Link>
                                                </h4>
                                                <p>{services.description.length > 105 ? services.description.substring(0, 105) + '...' : services.description}</p>
                                                <Link href={`/service-details?title=${encodeURIComponent(services._id)}`} className="theme-btn-2 mt-3">
                                                    read More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="service-text wow fadeInUp" data-wow-delay=".4s">
                            <h6>
                                Need Any Kind Of IT Solution For Your Business. <Link href={`/service-details?title=${encodeURIComponent("Cybersecurity Services")}`}>View Services </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
