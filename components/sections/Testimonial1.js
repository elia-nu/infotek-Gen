'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import useStore from '../../store/store'
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-2",
        clickable: true,
    },
}

const testimonialsq = [
    {
        content: "GenShifter Technologies. has been a phenomenal partner in our software development journey. Their team took the time to understand our vision and translated it into a robust solution that exceeded our expectations. Their commitment to quality and innovation has been a key driver of our success.",
        author: "Biniyam Kabtamu"
    },
    {
        content: "The consultancy services from GenShifter have transformed how we approach our IT strategy. Their insights into best practices and effective solutions have helped us streamline operations and improve efficiency. We appreciate their professionalism and genuine interest in our growth.",
        author: "Mulugeta Awoke"
    },
    {
        content: "GenShifter Technologies. has been a crucial ally in our mission. Their team provided expert guidance and support in optimizing our IT infrastructure, allowing us to focus on our community initiatives. Their dedication to our success is evident in every interaction.",
        author: "Alemu Gudeta"
    }
]

export default function Testimonial1() {
    const { testimonials } = useStore()
    console.log(testimonials)
    return (
        <>
            <section className="testimonial-section section-padding fix">
                <div className="container">
                    <div className="testimonial-wrapper">
                        <div className="swiper testimonial-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="testimonial-items">
                                            <div className="testimonial-content">
                                                <div className="section-title">
                                                    <span>Testimonials</span>
                                                    <h2>What's Clients Say </h2>
                                                </div>
                                                <p className="mt-3 mt-md-0">
                                                    {testimonial.description}
                                                </p>
                                                <div className="author-details">
                                                    <h5>{testimonial.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="swiper-dot-2">
                            <div className="dot-2" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
