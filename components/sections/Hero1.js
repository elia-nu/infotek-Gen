"use client";
import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import VideoPopup from "../elements/VideoPopup";
import useStore from "../../store/store";

const heroData = {
  title: {
    subtitle: "Best it SOULTION Provider",
    heading: "Delivering Superior Services",
    span: "IT Solutions.",
  },
  description:
    "GenShifter Technologies. is a U.S.-based IT company headquartered in Seattle, Washington, with a growing branch in Addis Ababa, Ethiopia. As a product- and service-based company, we specialize in driving digital transformation for both public and private sector clients. Our clients range from startups and small businesses to global enterprises. Since our inception, we have been committed to delivering high-quality software and IT solutions.",
  buttons: {
    primary: {
      text: "Explore More",
      link: "/about",
    },
  },
  images: {
    background: "assets/img/hero/hero-bg.jpg",
    hero: "/assets/img/hero/hero-1.png",
    shapes: {
      line: "/assets/img/hero/line-shape.png",
      dot: "/assets/img/hero/dot-shape.png",
      frame: "/assets/img/hero/frame.png",
      mask: "/assets/img/hero/mask-shape.png",
    },
  },
};

const Hero1 = memo(function Hero1() {
  const { info } = useStore();

  return (
    <section
      className="hero-section fix hero-1 bg-cover h-fit sm:h-[80hv]  pb-10 "
      style={{
        backgroundImage: `url("${heroData.images.background}")`,
      }}
    >
      <div className="text-transparent">
        <h2>Technology</h2>
      </div>
      <div className="line-shape">
        <Image
          src={heroData.images.shapes.line}
          alt="shape"
          width={200}
          height={200}
          loading="eager"
          priority
        />
      </div>
      <div className="dot-shape">
        <Image
          src={heroData.images.shapes.dot}
          alt="shape"
          width={200}
          height={200}
          loading="eager"
        />
      </div>
      <div className="frame-shape md:block hidden">
        <Image
          src={heroData.images.shapes.frame}
          alt="shape"
          width={100}
          height={100}
          loading="eager"
        />
      </div>
      <div className="mask-shape wow fadeInRight" data-wow-delay=".7s z-1">
        <Image
          src={heroData.images.shapes.mask}
          alt="shape"
          width={200}
          height={200}
          loading="eager"
        />
      </div>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-8">
            <div className="hero-content">
              <h6 className="wow fadeInUp" data-wow-delay=".2s">
                {heroData.title.subtitle}
              </h6>
              <h1 className="wow fadeInUp" data-wow-delay=".4s">
                {heroData.title.heading}{" "}
                <span className="itSol">{heroData.title.span}</span>
              </h1>
              <p
                className="wow fadeInUp"
                data-wow-delay=".6s"
                style={{ maxWidth: "870px" }}
              >
                {heroData.description}
              </p>
              <div className="hero-button">
                <Link
                  href={heroData.buttons.primary.link}
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  {heroData.buttons.primary.text}
                  <i className="fa-solid fa-arrow-right-long" />
                </Link>
                <VideoPopup style={3} />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="hero-image wow fadeInUp d-none d-lg-block"
              data-wow-delay=".4s"
            >
              <Image
                src={heroData.images.hero}
                alt="hero"
                width={400}
                height={600}
                style={{ height: "70vh", width: "auto" }}
                loading="eager"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero1;
