"use client"
import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'
import useStore  from '../../store/store';

const heroData = {
  title: {
    subtitle: "Best it SOULTION Provider",
    heading: "Delivering Superior Services",
    span: "IT Solutions."
  },
  description: "GenShifter Technologies. is a leading IT company based in Addis Ababa, Ethiopia, dedicated to providing innovative software solutions and services to both national and international clients. Since our inception, we have been committed to delivering high-quality software and IT solutions.",
  buttons: {
    primary: {
      text: "Explore More",
      link: "/about"
    }
  },
  images: {
    background: "assets/img/hero/hero-bg.jpg",
    hero: "/assets/img/hero/hero-1.png",
    shapes: {
      line: "/assets/img/hero/line-shape.png",
      dot: "/assets/img/hero/dot-shape.png", 
      frame: "/assets/img/hero/frame.png",
      mask: "/assets/img/hero/mask-shape.png"
    }
  }
}

export default function Hero1() {
    const { info } = useStore()
    console.log(info, "info")

    return (
        <>
            <section className="hero-section fix hero-1 bg-cover" style={{ backgroundImage: `url("${heroData.images.background}")` }}>
                <div className="text-transparent">
                    <h2>Technology</h2>
                </div>
                <div className="line-shape">
                    <img src={heroData.images.shapes.line} alt="shape-img" />
                </div>
                <div className="dot-shape">
                    <img src={heroData.images.shapes.dot} alt="shape-img" />
                </div>
                <div className="frame-shape">
                    <img src={heroData.images.shapes.frame} alt="shape-img" />
                </div>
                <div className="mask-shape wow fadeInRight" data-wow-delay=".7s">
                    <img src={heroData.images.shapes.mask} alt="shape-img" />
                </div>
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-8">
                            <div className="hero-content">
                                <h6 className="wow fadeInUp" data-wow-delay=".2s">{heroData.title.subtitle}</h6>
                                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                                    {heroData.title.heading} <span className="itSol">{heroData.title.span}</span>
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay=".6s" style={{ maxWidth: '870px' }}>
                                    {info[0]?.howWeWork}
                                </p>
                                <div className="hero-button">
                                    <Link href={heroData.buttons.primary.link} className="theme-btn wow fadeInUp" data-wow-delay=".8s">
                                        {heroData.buttons.primary.text}
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                    <VideoPopup style={3} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="hero-image wow fadeInUp" data-wow-delay=".4s">
                                <img src={heroData.images.hero} style={{ width: 'auto', height: '70vh' }} alt="hero-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
