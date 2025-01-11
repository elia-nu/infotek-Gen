"use client"
import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'
import CounterUp from '../elements/CounterUp'

import useStore  from '../../store/store'
import { useEffect } from 'react'
export default function About3() {
    const { about , info, contact } = useStore();
    const { setTeam, setTestimonials, setPartner, setAchievements, setAbout, setInfo, setContact, setWhyChooseUs, setCareer, setProject, setFaq, setService, setWhoWeAre, setOurGoal } = useStore()

    useEffect(() => {
        const fetchCareer = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setAbout(data);
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        };

        fetchCareer();

 

    }, [setAbout])
  

    const aboutData = {
        title: "ABOUT GenShifter",
        subtitle: "We empower clients with innovative solutions that address their unique challenges.",
        description1: "GenShifter Technologies. is a leading IT company based in Addis Ababa, Ethiopia, dedicated to providing innovative software solutions and services to both national and international clients. Since our inception, we have been committed to delivering high-quality, customized software solutions that meet the unique needs of our clients across various industries.",
        description2: "Our team of highly skilled professionals is passionate about technology and innovation. We specialize in a wide range of IT services, including software development, system integration, IT consulting, and project management. Our goal is to help businesses leverage technology to improve efficiency, drive growth, and achieve their objectives.",
        services: [
            "Software Development",
            "System Integration", 
            "CyberSecurity Services"
        ],
        stats: {
            clients: 25
        },
        contact: {
            phone: "+251 910 813 571"
        }
    }

    return (
        <>
            <section className="about-section section-padding fix bg-cover" id="about">
                <div className="container">
                    <div className="about-wrapper-2">
                        <div className="row">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="about-image">
                                    <div className="circle-shape">
                                        <img src="/assets/img/about/circle.png" alt="shape-img" />
                                    </div>
                                    <img src="/assets/img/about/00.png" style={{ borderRadius: '20px 580px 10px 230px' }} alt="about-img" />
                                    <div className="video-box">
                                        <VideoPopup style={1} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        <span className="wow fadeInUp" style={{ color: 'orange' }}>{aboutData.title}</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            {about[0]?.title}
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                        {about[0]?.description?.split('\n\n').map((paragraph, index) => (
                                          <span key={index}>
                                            {paragraph}
                                            <br /><br />
                                          </span>
                                        ))}
                                    </p>
                                    <div className="icon-area wow fadeInUp" data-wow-delay=".7s">
                                        <ul className="list">
                                            {about[0]?.service.map((service, index) => (
                                                <li key={index}>
                                                    <i className="fa-solid fa-check" />
                                                    {service}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="icon-items">
                                            <div className="icon">
                                                <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.2364 19.1127C10.2286 19.2824 10.1536 19.4421 10.028 19.5565C9.9024 19.671 9.73648 19.7308 9.56674 19.723C9.397 19.7151 9.23735 19.6401 9.12289 19.5145C9.00843 19.3889 8.94856 19.223 8.95643 19.0533C8.95977 18.9688 8.97978 18.8859 9.01531 18.8092C9.05084 18.7325 9.10119 18.6637 9.16345 18.6065C9.22572 18.5494 9.29867 18.5051 9.37811 18.4763C9.45755 18.4475 9.54191 18.4347 9.62632 18.4386C9.71074 18.4425 9.79354 18.4631 9.86997 18.4991C9.9464 18.5352 10.0149 18.586 10.0717 18.6487C10.1284 18.7113 10.1721 18.7846 10.2004 18.8642C10.2287 18.9438 10.2409 19.0283 10.2364 19.1127ZM36.7033 29.023C36.5341 29.4066 36.2265 29.7009 35.8373 29.8518L33.9147 30.5972C33.7347 30.6672 33.5433 30.7031 33.3502 30.7031C32.7221 30.7031 32.128 30.3227 31.8876 29.7027L31.7512 29.3509L30.3274 29.945C30.3881 30.3862 30.3092 30.8405 30.0908 31.2375C29.8218 31.7266 29.3784 32.0826 28.8406 32.2416C28.9882 32.7571 28.9417 33.3268 28.6656 33.8284C28.2531 34.5787 27.4466 34.9779 26.6434 34.9104C26.6502 35.2733 26.5616 35.6317 26.3864 35.9497C26.1153 36.4428 25.6665 36.8006 25.1228 36.9571C24.8237 37.044 24.5089 37.0631 24.2014 37.0131C24.195 37.3511 24.1064 37.6824 23.9432 37.9785C23.6719 38.4717 23.204 38.8422 22.6595 38.9948C22.4746 39.0469 22.2835 39.0734 22.0915 39.0737C21.7351 39.0738 21.385 38.9802 21.0763 38.8022L20.6117 38.5354C20.341 38.8891 19.967 39.1494 19.5305 39.2816C19.3268 39.3437 19.115 39.3753 18.9021 39.3755C18.5541 39.3755 18.2099 39.2901 17.8953 39.1219C17.4664 38.8931 17.1282 38.5253 16.936 38.0789C16.3714 38.293 15.7231 38.269 15.1594 37.9675C14.7765 37.7624 14.465 37.4457 14.2663 37.0595C13.6661 37.3534 12.9395 37.3654 12.3083 37.0278C11.804 36.758 11.4344 36.3066 11.2677 35.7565C11.1836 35.481 11.1556 35.1914 11.1856 34.9048C10.8501 34.8975 10.5211 34.8112 10.2253 34.653C9.72096 34.3833 9.35135 33.9318 9.18471 33.3816C9.01791 32.8315 9.07471 32.2508 9.3444 31.7465L9.84331 30.8136C9.73487 30.5418 9.67916 30.2503 9.62612 29.9651C9.53502 29.4757 9.46088 29.1493 9.26666 29.0739C9.17659 29.0389 8.9669 28.9518 8.2212 28.6198L8.0476 29.0126C7.78901 29.5973 7.21401 29.9459 6.61237 29.9459C6.40104 29.9459 6.18659 29.9029 5.98127 29.8122L4.09518 28.9786C3.71338 28.8098 3.41971 28.5016 3.26846 28.1106C3.11721 27.7196 3.12682 27.2941 3.29557 26.9123L7.62588 17.1149C7.79463 16.7331 8.10284 16.4395 8.49385 16.2882C8.88471 16.1369 9.31026 16.1465 9.69221 16.3153L11.5783 17.1489C12.3684 17.498 12.7271 18.425 12.3779 19.2152L12.0867 19.8739L13.2389 20.4054C13.254 20.4124 13.2689 20.4201 13.2835 20.4282C13.9295 20.7917 14.6198 20.6298 15.4937 20.425C16.6631 20.1509 18.0999 19.8145 19.7808 20.7831C22.1041 19.3686 23.8879 20.0958 25.2065 20.6348C26.1596 21.0243 26.7257 21.2305 27.2796 20.9425L28.2831 20.4053L28.0155 19.7151C27.7033 18.9095 28.1046 18.0002 28.9099 17.688L30.8326 16.9427C31.2218 16.7917 31.6474 16.802 32.0309 16.9711C32.4144 17.1404 32.7088 17.4479 32.8596 17.837L36.7315 27.8245C36.8827 28.2139 36.8726 28.6395 36.7033 29.023ZM6.90455 28.5073L11.2348 18.7099C11.2803 18.6068 11.2572 18.5141 11.2395 18.468C11.2216 18.4219 11.1763 18.3377 11.0732 18.2922L9.18706 17.4586C9.14771 17.4411 9.10512 17.432 9.06206 17.432C9.01245 17.432 8.97127 17.4438 8.94518 17.454C8.89909 17.4719 8.81495 17.5171 8.7694 17.6202L4.43916 27.4176C4.39354 27.5207 4.41666 27.6134 4.43448 27.6595C4.45229 27.7056 4.4976 27.7898 4.60073 27.8353L6.4869 28.6689C6.64377 28.7384 6.8351 28.6642 6.90455 28.5073ZM11.7775 33.4755L13.001 31.3583C13.1842 30.9319 13.0116 30.432 12.6009 30.2128C12.164 29.9796 11.6188 30.1445 11.3856 30.5807L10.4467 32.336C10.3344 32.5459 10.3111 32.7885 10.381 33.0191C10.4509 33.2498 10.6049 33.4386 10.8149 33.5509C11.1234 33.7158 11.4998 33.6833 11.7775 33.4755ZM14.1162 35.5512L15.4747 32.9202C15.5436 32.541 15.3581 32.1464 15.0173 31.9645C14.7061 31.7983 14.3269 31.8322 14.0486 32.0437L12.53 34.7108C12.4177 34.9208 12.3944 35.1633 12.4642 35.3939C12.5342 35.6245 12.6882 35.8134 12.8981 35.9256C13.3342 36.1589 13.8805 35.9909 14.1162 35.5512ZM16.8809 36.623L18.0824 34.314C18.1508 33.935 17.9653 33.5409 17.6247 33.3591C17.2854 33.178 16.8578 33.2399 16.581 33.5021L15.2773 36.027C15.2603 36.372 15.4421 36.7011 15.749 36.8653C16.1346 37.0715 16.6146 36.9663 16.8809 36.623ZM19.6998 37.6514L20.5999 35.9681C20.7618 35.6653 20.7336 35.289 20.528 35.0093C20.4498 34.9028 20.3486 34.8154 20.232 34.7535C19.8926 34.5722 19.4646 34.6345 19.1878 34.8975L18.0152 37.1512C17.987 37.5036 18.1719 37.8521 18.4849 38.0196C18.9214 38.253 19.4664 38.0877 19.6998 37.6514ZM22.5092 36.2114C22.4783 36.1941 21.9281 35.8723 21.9281 35.8723C21.8924 36.109 21.818 36.3411 21.7021 36.5577L21.2266 37.4469L21.6989 37.7182C21.8858 37.8255 22.1071 37.8514 22.3222 37.7912C22.5457 37.7285 22.7374 37.5772 22.848 37.3761C23.074 36.9652 22.9221 36.4428 22.5092 36.2114ZM21.1719 32.0485C21.1 32.0085 21.0367 31.9546 20.9856 31.89C20.9346 31.8255 20.8968 31.7515 20.8744 31.6722C20.8521 31.593 20.8456 31.5102 20.8553 31.4284C20.8651 31.3467 20.8909 31.2677 20.9312 31.196C20.9716 31.1242 21.0257 31.0612 21.0905 31.0104C21.1553 30.9597 21.2295 30.9222 21.3089 30.9002C21.3882 30.8782 21.4711 30.8721 21.5527 30.8822C21.6344 30.8923 21.7133 30.9185 21.7849 30.9591L26.4117 33.5626C26.8239 33.7892 27.3439 33.6382 27.5705 33.2259C27.7951 32.8177 27.6418 32.2963 27.2287 32.0637C26.144 31.4562 24.9147 30.7677 23.7053 30.0754C23.563 29.9922 23.4594 29.8563 23.4168 29.6971C23.3743 29.5378 23.3964 29.3683 23.4783 29.2252C23.5601 29.0822 23.6952 28.9773 23.854 28.9334C24.0128 28.8894 24.1826 28.91 24.3264 28.9906C25.5311 29.6804 26.7581 30.3676 27.8406 30.9739L27.8409 30.9741C28.0342 31.0822 28.2606 31.1074 28.4785 31.0452C28.7016 30.9813 28.8852 30.8357 28.9955 30.6352C29.1285 30.3933 29.1342 30.1091 29.011 29.8554C28.9326 29.6938 28.807 29.5599 28.6508 29.4712L23.5374 26.5567C22.7044 26.0821 21.6375 26.5141 20.4018 27.0143C18.5187 27.7766 16.1755 28.7252 14.1589 26.1302C14.0153 25.9455 13.9605 25.7171 14.0045 25.4872C14.0485 25.2568 14.1846 25.0645 14.3873 24.946C15.8233 24.1079 17.0353 23.1938 17.9901 22.2289C18.1999 22.0168 18.4179 21.813 18.6439 21.6181C17.6137 21.2129 16.7171 21.4223 15.7791 21.6422C14.7842 21.8754 13.7559 22.1166 12.6938 21.5305L11.5815 21.0174L8.72666 27.4766C9.39065 27.7721 9.63635 27.8766 9.71916 27.9087C10.4203 28.1809 10.6556 28.8077 10.7823 29.372C11.435 28.8159 12.3883 28.6825 13.1894 29.11C13.7903 29.4307 14.1794 30.0023 14.291 30.6312C14.7426 30.5662 15.2032 30.647 15.6057 30.8616C16.0918 31.1202 16.4594 31.5562 16.6322 32.079C17.1624 31.9331 17.7285 31.9965 18.2132 32.2562C18.6992 32.5148 19.0669 32.9508 19.2397 33.4734C19.7701 33.3275 20.3362 33.3911 20.821 33.6509C21.0649 33.7806 21.281 33.9567 21.4572 34.1694L24.1347 35.685C24.3301 35.7937 24.5583 35.8188 24.7771 35.7558C24.9989 35.692 25.1814 35.5468 25.2913 35.3471C25.516 34.9387 25.3626 34.4174 24.9496 34.185" fill="#3C72FC" />
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <h2>
                                                    <CounterUp count={about[0]?.clientNo}/>+
                                                </h2>
                                                <span>Satisfied Clients</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-author">
                                        <div className="about-button wow fadeInUp" data-wow-delay=".8s">
                                            <Link href="/about" className="theme-btn">
                                                Explore More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                        <div className="author-icon wow fadeInUp" data-wow-delay=".9s">
                                            <div className="icon">
                                                <i className="fa-solid fa-phone" />
                                            </div>
                                            <div className="content">
                                                <span>Call Us Now</span>
                                                <h5>
                                                    <Link href="/tel:+2085550112">{contact[0]?.phoneNumber
                                                    } </Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
