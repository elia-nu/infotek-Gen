"use client";

import Layout from "@/components/layout/Layout"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import VideoPopup from '@/components/elements/VideoPopup'
import Link from "next/link"
import Preloader from "@/components/elements/Preloader";
import useStore from "../../store/store";

export default function ServiceDetails() {
    const searchParams = useSearchParams();
    const [serviceDetails, setServiceDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { service } = useStore();

    useEffect(() => {
        const serviceId = searchParams.get('title');
        if (serviceId && service) {
            const services = service.find(s => s._id === serviceId);
            setServiceDetails(services);
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    }, [searchParams, service]);

    if (isLoading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <Preloader />
            </div>
        );
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Service Details">
                <section className="service-details-section fix section-padding">
                    <div className="container">
                        {serviceDetails ? (
                            <div className="service-details-wrapper">
                                <div className="row g-4">
                                    <div className="col-12 col-lg-4 order-2 order-md-1">
                                        <div className="main-sidebar">
                                            <div className="single-sidebar-widget">
                                                <div className="wid-title">
                                                    <h3>All Services</h3>
                                                </div>
                                                <div className="widget-categories">
                                                    <ul>
                                                        {service.map((item, index) => (
                                                            <li key={index}>
                                                                <a href={`/service-details?title=${encodeURIComponent(item._id)}`}>
                                                                    {item.title}
                                                                </a>
                                                                <i className="fa-solid fa-arrow-right-long" />
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-sidebar-widget">
                                                <div className="wid-title">
                                                    <h3>Opening Hours</h3>
                                                </div>
                                                <div className="opening-category">
                                                    <ul>
                                                        <li><i className="fa-regular fa-clock" />Mon - Fri: 9.00 AM - 5.00 PM</li>
                                                        <li><i className="fa-regular fa-clock" />Sat:  9.00 AM - 12.00 PM</li>
                                                        <li><i className="fa-regular fa-clock" />Sun:  Closed</li>
                                                        <li><i className="fa-regular fa-clock" />Support: 24 hours</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-sidebar-image bg-cover" style={{ backgroundImage: 'url("assets/img/service/post.jpg")' }}>
                                                <div className="contact-text">
                                                    <div className="icon">
                                                        <i className="fa-solid fa-phone" />
                                                    </div>
                                                    <h4>Need Help? Call Here</h4>
                                                    <h5>
                                                        <Link href="/tel:+2085550112">+251 91 081 3571</Link>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8 order-1 order-md-2">
                                        <div className="service-details-items">
                                            <div className="details-image">
                                                <img src={`${process.env.NEXT_PUBLIC_API_URL}/${serviceDetails.img}`} alt={serviceDetails.title} />
                                            </div>
                                            <div className="details-content">
                                                <h2>{serviceDetails.title}</h2>
                                                <p className="mt-3">{serviceDetails.description}</p>
                                                <div className="details-video-items">
                                                    <div className="video-thumb">
                                                        <img src="/assets/img/service/details-video.jpg" alt="img" />
                                                        <VideoPopup style={1} />
                                                    </div>
                                                    <div className="content">
                                                        <ul className="list">
                                                            {serviceDetails.subservice.map((item, index) => (
                                                                <li key={index}>
                                                                    <h4 style={{ listStyleType: 'none', padding: '10px 0px', color:'#3838ff'}}>{item.title}</h4>
                                                                    <p>{item.description}</p>
                                                                    <h5 style={{paddingTop:'10px', paddingLeft:'20px', paddingBottom:'10px'}}>Key Features</h5>
                                                                    {item.keyFeatures.map((feature, idx) => (
                                                                        <li key={idx} style={{ listStyleType: 'none', paddingLeft: '40px' }}>
                                                                            <i className="fa-regular fa-circle-check" />
                                                                            {feature}
                                                                        </li>
                                                                    ))}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div style={{
                                textAlign: 'center',
                                padding: '50px'
                            }}>
                                <h3>Loading...</h3>
                            </div>
                        )}
                    </div>
                </section>
            </Layout>
        </>
    )
}