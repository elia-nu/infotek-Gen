'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import useStore from '../../store/store'
const brandImages = [
    "/assets/img/brand1.png",
    "/assets/img/brand2.png", 
    "/assets/img/brand3.png",
    "/assets/img/brand4.webp",
    "/assets/img/brand5.png",
    "/assets/img/brand6.png"
]

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1199: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function BrandSlider1() {
    const { partner } = useStore()
    return (
        <>
            <div className="swiper brand-slider">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    {[...Array(3)].map((_, i) => (
                        partner.map((item, index) => (
                            <SwiperSlide key={`${i}-${index}`}>
                                <div className="brand-image">
                                    <img src={`https://admin.z.genshifter.com/${item.image}`} alt="brand-img" />
                                </div>
                            </SwiperSlide>
                        ))
                    ))}
                </Swiper>
            </div>
        </>
    )
}
