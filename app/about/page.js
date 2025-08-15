"use client";

import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import BrandSlider1 from "@/components/slider/BrandSlider1";
import ProjectSlider2 from "@/components/slider/ProjectSlider2";
import Link from "next/link";
import useStore from "../../store/store";
import { useEffect } from "react";
import { API_BASE_URL } from "../../config/constants";
export default function About() {
  const { about, why_choose_us, who_we_are, our_goal } = useStore();
  const { setAbout, setWhyChooseUs, setWhoWeAre, setOurGoal } = useStore();
  console.log(why_choose_us, "dad");

  console.log(`${API_BASE_URL}/${about[0]?.aboutImg2}`, "dad");
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/about`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAbout(data);
      } catch (error) {
        console.error("Error fetching career data:", error);
      }
    };
    const fetchWhyChooseUs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/why-choose-us`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWhyChooseUs(data);
      } catch (error) {
        console.error("Error fetching career data:", error);
      }
    };

    const fetchWhoWeAre = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/who-we-are`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWhoWeAre(data);
      } catch (error) {
        console.error("Error fetching career data:", error);
      }
    };

    const fetchOurGoal = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/our-goal`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOurGoal(data);
      } catch (error) {
        console.error("Error fetching career data:", error);
      }
    };

    fetchOurGoal();
    fetchWhyChooseUs();
    fetchWhoWeAre();
    fetchAbout();
  }, [setOurGoal, setWhyChooseUs, setWhoWeAre, setAbout]);

  const data = [
    {
      id: 1,
      icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-1.svg",
      title: "Experience",
      subtitle: "Lorem ipsum dolor sit amet.",
      description:
        " Our team boasts extensive industry experience, bringing deep technical expertise and a successful track record in delivering complex projects across various sectors. We understand the unique challenges businesses face and leverage our experience to provide solutions that work.",
    },
    {
      id: 2,
      icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-2.svg",
      title: "Products",
      subtitle: "Lorem ipsum dolor sit amet.",
      description:
        "We offer a robust portfolio of innovative, scalable, and customizable software solutions. Whether you need a tailored application or an integrated system, our products are designed to enhance your business operations and drive growth.",
    },

    {
      id: 3,
      icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-4.svg",
      title: "Pricing",
      subtitle: "Lorem ipsum dolor sit amet.",
      description:
        "Our pricing models are designed to offer maximum value. We combine high-quality service with cost-effective solutions, ensuring that you receive exceptional outcomes within your budget.",
    },
    {
      id: 4,
      icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-3.svg",
      title: "Approach",
      subtitle: "Lorem ipsum dolor sit amet.",
      description:
        "We believe in a client-first approach, partnering with you to fully understand your business objectives and challenges. Our collaborative process ensures that the solutions we deliver are perfectly aligned with your strategic goals.",
    },
    {
      id: 5,
      icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-5.svg",
      title: "Delivery",
      subtitle: "Lorem ipsum dolor sit amet.",
      description:
        "We are committed to delivering projects on time, without compromising on quality. Our streamlined processes and meticulous project management ensure that you receive your solutions when you need them, fully operational and ready to perform.",
    },
    {
      id: 6,
      icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-6.svg",
      title: "Support",
      subtitle: "Lorem ipsum dolor sit amet.",
      description:
        "Our commitment to you doesn't end with delivery. We provide continuous, reliable support to keep your systems running smoothly. Our dedicated support team is always ready to assist, ensuring that you have the help you need when you need it.",
    },
  ];

  const goals = [
    {
      icon: "🎯",
      title: "Client Satisfaction",
      description:
        "Consistently exceed client expectations by delivering high-quality, customized software solutions.",
    },
    {
      icon: "💡",
      title: "Innovation",
      description:
        "Continuously explore and adopt cutting-edge technologies and methodologies.",
    },
    {
      icon: "🌍",
      title: "Growth and Expansion",
      description:
        "Expand our reach and impact by entering new markets, both nationally and internationally.",
    },
    {
      icon: "👥",
      title: "Employee Development",
      description:
        "Invest in the growth and development of our team, fostering a culture of learning and collaboration.",
    },
    {
      icon: "⚙️",
      title: "Operational Excellence",
      description:
        "Maintain the highest standards of operational efficiency and effectiveness.",
    },
    {
      icon: "🤝",
      title: "Strategic Partnerships",
      description:
        "Forge strong alliances with technology leaders and industry experts to enhance our capabilities and offer cutting-edge solutions to our clients.",
    },
  ];

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="About Us">
        <div>
          <section
            className="about-section section-padding fix bg-cover"
            style={{
              backgroundImage: 'url("assets/img/service/service-bg-2.jpg")',
            }}
          >
            <div className="container">
              <div className="about-wrapper style-2">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="about-image-items">
                      <div className="circle-shape">
                        <img
                          src="/assets/img/about/circle.png"
                          alt="shape-img"
                        />
                      </div>
                      <div className="counter-shape float-bob-y">
                        <div className="icon">
                          <img
                            src="/assets/img/about/icon-1.svg"
                            alt="icon-img"
                          />
                        </div>
                        <div className="content">
                          <h3>{about[0]?.clientNo} Years</h3>
                          <p>Of Experience</p>
                        </div>
                      </div>
                      <div
                        className="about-image-1 bg-cover wow fadeInLeft"
                        data-wow-delay=".3s"
                        style={{
                          backgroundImage: `url("/assets/img/about/ab2.jpg")`,
                        }}
                      >
                        <div
                          className="about-image-2 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <img
                            src={`${API_BASE_URL}/${about[0]?.aboutImg2}`}
                            alt="about-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-4 mt-lg-0">
                    <div className="about-content">
                      <div className="section-title">
                        <span
                          className="wow fadeInUp"
                          style={{ color: "#ea8c06" }}
                        >
                          ABOUT GenShifter
                        </span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          {about[0]?.title ||
                            "We Are Increasing Business Success With Technology"}
                        </h2>
                      </div>
                      <p
                        className="mt-3 mt-md-0 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        {about[0]?.description
                          ?.split("\n\n")
                          .map((paragraph, index) => (
                            <span key={index}>
                              {paragraph}
                              <br />
                              <br />
                            </span>
                          ))}
                      </p>
                      <div className="about-icon-items">
                        {about[0]?.mission?.map((item, index) => (
                          <div
                            key={index}
                            className="icon-items wow fadeInUp"
                            data-wow-delay={`.${7 + index}s`}
                          >
                            <div
                              className="icon text-center"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={`${API_BASE_URL}/${item.icon}`}
                                alt="icon-img"
                                className="mx-auto"
                              />
                            </div>
                            <div className="content">
                              <h4>{item.title}</h4>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="bg-white about-section wow fadeInUp"
            data-wow-delay=".5s"
            id="About"
            style={{
              overflow: "hidden",
              backgroundColor: "white",
              paddingBottom: "3rem",
              paddingTop: "5rem",
            }}
          >
            <div className="container">
              <div className="row mb-5">
                <div className="col-12 text-center">
                  <h1
                    className="display-5 fw-semibold"
                    style={{ color: "#ea8c06", margin: "4rem 2rem" }}
                  >
                    Why Choose Us
                  </h1>
                  <h4 className="text-muted">Our Unique Advantages</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 d-flex flex-column gap-5">
                  {data.slice(0, 3).map((item) => (
                    <div
                      key={item._id}
                      className="d-flex flex-row gap-2 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="d-flex flex-column align-items-end justify-content-end">
                        <h2
                          className="mb-2 fw-semibold"
                          style={{ color: "#ea8c06" }}
                        >
                          {item.title}
                        </h2>
                        <p className="text-end text-gray-500">
                          {item.description}
                        </p>
                      </div>
                      <div className="d-flex flex-column align-items-start justify-content-start">
                        {/*   <img
                          src={`${API_BASE_URL}/${item.icon}`}
                          alt="Icon"
                          style={{
                            height: "4rem",
                            width: "20rem",
                            filter: "hue-rotate(30deg) saturate(100%)",
                          }}
                        />
                      */}
                        <img
                          src={item.icon}
                          alt="Icon"
                          style={{
                            height: "4rem",
                            width: "20rem",
                            filter: "hue-rotate(30deg) saturate(100%)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="col-lg-4 d-flex flex-column align-items-center justify-content-center wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img
                    src={`${API_BASE_URL}/${why_choose_us[0]?.img}`}
                    alt="Why Choose Us"
                    style={{
                      height: "400px",
                      width: "800px",
                      borderRadius: "1rem",
                    }}
                  />
                </div>

                <div className="col-lg-4 d-flex flex-column gap-5">
                  {data.slice(3, 6).map((item) => (
                    <div
                      key={item._id}
                      className="d-flex flex-row gap-2 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="d-flex flex-column align-items-start justify-content-start">
                        {/*   <img
                          src={`${API_BASE_URL}/${item.icon}`}
                          alt="Icon"
                          style={{
                            height: "4rem",
                            width: "20rem",
                            filter: "hue-rotate(30deg) saturate(100%)",
                          }}
                        />
                      */}
                        <img
                          src={item.icon}
                          alt="Icon"
                          style={{
                            height: "4rem",
                            width: "20rem",
                            filter: "hue-rotate(30deg) saturate(100%)",
                          }}
                        />
                      </div>
                      <div>
                        <h2
                          className="mb-2 fw-semibold"
                          style={{ color: "#ea8c06" }}
                        >
                          {item.title}
                        </h2>
                        <p className="text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            className="about-section section-padding fix bg-cover fade-out"
            id="About"
            style={{
              background: "linear-gradient(to bottom, #ffffff, #f3f4f6)",
              padding: "5rem 0",
              backgroundImage: 'url("assets/img/service/service-bg-2.jpg")',
            }}
          >
            <div className="container">
              <h1
                className="mb-5 text-center"
                style={{
                  color: "#ea8c06",
                  fontSize: "2.25rem",
                  fontWeight: "bold",
                  color: "#333",
                }}
              ></h1>

              <div className="row mb-5 align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <div
                    className="row wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{ height: "600px" }}
                  >
                    <div className="col-8 h-100 pe-2">
                      <img
                        src={`${API_BASE_URL}/${who_we_are[0]?.img[0]}`}
                        alt="GenShifter team"
                        className="img-fluid h-100 w-100 rounded shadow"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-4 h-100 d-flex flex-column">
                      <img
                        src={`${API_BASE_URL}/${who_we_are[0]?.img[1]}`}
                        alt="Office space"
                        className="img-fluid mb-2 rounded shadow"
                        style={{ objectFit: "cover", height: "50%" }}
                      />
                      <img
                        src={`${API_BASE_URL}/${who_we_are[0]?.img[2]}`}
                        alt="Project meeting"
                        className="img-fluid rounded shadow"
                        style={{ objectFit: "cover", height: "50%" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mb-4">
                    <h2
                      className="mb-3"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#ea8c06",
                      }}
                    >
                      Who We Are
                    </h2>
                    <p className="text-muted wow fadeInUp" data-wow-delay=".5s">
                      {who_we_are[0]?.whoWeAre.description1}
                    </p>
                    <p
                      className="mt-3 text-muted wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      {who_we_are[0]?.whoWeAre.description2}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h2
                      className="mb-3"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#ea8c06",
                      }}
                    >
                      Our Mission
                    </h2>
                    <p className="text-muted wow fadeInUp" data-wow-delay=".5s">
                      {who_we_are[0]?.ourMission.description}
                    </p>
                  </div>

                  <div>
                    <h2
                      className="mb-3"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#ea8c06",
                      }}
                    >
                      Our Vision
                    </h2>
                    <p className="text-muted wow fadeInUp" data-wow-delay=".5s">
                      {who_we_are[0]?.ourVision.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded p-4 shadow">
                <h2
                  className="mb-4 text-center"
                  style={{
                    fontSize: "1.875rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  Our Goals
                </h2>
                <div className="row">
                  {our_goal[0]?.goals.map((goal, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                      <div className="bg-light rounded p-3 h-100 shadow-sm">
                        <div
                          className="mb-3"
                          style={{ fontSize: "1.875rem", color: "#ea8c06" }}
                        >
                          🎯
                        </div>
                        <h3
                          className="mb-2"
                          style={{
                            fontSize: "1.25rem",
                            fontWeight: "600",
                            color: "#333",
                          }}
                        >
                          {goal.title}
                        </h3>
                        <p
                          className="text-muted wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
