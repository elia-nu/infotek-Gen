"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import useStore from "../../store/store";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { API_BASE_URL } from "../../config/constants";

export default function Team() {
  const { team } = useStore();
  const [activeTab, setActiveTab] = useState("all");

  // Function to copy email to clipboard
  const copyEmailToClipboard = (email) => {
    // Extract email from mailto: link
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success("Email copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy email");
        console.error("Copy failed: ", err);
      });
  };

  // USA team members data (hardcoded as JSON)
  const usaTeamData = [
    {
      name: "Muaz Abdula ( Msc)",
      jobTitle: "Senior Software Engineer",
      location: "USA",
      image: "/assets/img/team/team58.jpg",
      facebook: "https://facebook.com",
      instagram: "muazabdulla@genshifter.com",
      linkedin:
        "https://www.linkedin.com/in/muazabdulla?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Leul Demelie",
      jobTitle: "Data Engineer",
      location: "USA",
      image: "/assets/img/team/team57.jpg",
      facebook: "https://facebook.com",
      instagram: "leuldemelie@genshifter.com",
      linkedin: "https://www.linkedin.com/in/leuld",
    },
    {
      name: "Michael Bekele Shiferaw ",
      jobTitle: "Full Stack Develope",
      location: "USA",
      image: "/assets/img/team/team56.jpg",
      facebook: "https://facebook.com",
      instagram: "michaelbekele@genshifter.com",
      linkedin: "https://www.linkedin.com/in/michael-shiferaw",
    },
    {
      name: "Eyouel Berhe (MBA)",
      jobTitle: "Project Portfolio Manager",
      location: "USA",
      image: "/assets/img/team/team55.jpg",
      facebook: "https://facebook.com",
      instagram: "eyouelberhe@genshifter.com",
      linkedin:
        "https://www.linkedin.com/in/eyouelberhe?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      name: "Yosef Birri",
      jobTitle: "GIS Analyst Intern",
      location: "USA",
      image: "/assets/img/team/team59.jpg",
      facebook: "https://facebook.com",
      instagram: "yosefbirri@genshifter.com",
      linkedin:
        "https://www.linkedin.com/in/yosef-birri-4486b2183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  ];

  // Filter team members by location
  // Ethiopia team comes from API
  const ethiopiaTeam = team.filter(
    (member) => member.name !== "Boni Aliko" && member.name !== "Dawit Haile"
  );
  const ethiopiaTeams = team;
  // USA team is hardcoded
  const ethiopiaFilteredTeam = team.filter(
    (member) => member.name === "Boni Aliko" || member.name === "Dawit Haile"
  );
  const usaTeam = [...ethiopiaFilteredTeam, ...usaTeamData];

  // Combine both teams for "all" view
  const allTeam = [...ethiopiaTeams, ...usaTeamData];

  // Function to determine which team to display based on active tab
  const getDisplayTeam = () => {
    switch (activeTab) {
      case "usa":
        return usaTeam;
      case "ethiopia":
        return ethiopiaTeam;
      default:
        return allTeam;
    }
  };

  const displayTeam = getDisplayTeam();

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Our Team">
        <section className="team-section-4 section-padding">
          <div className="container">
            <div className="section-title text-center pb-50">
              <span className="wow fadeInUp">Meet Our Experts</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Our Professional Team Members
              </h2>
            </div>

            {/* Team Location Tabs */}
            <div className="team-filter-tabs mb-50 text-center">
              <ul className="nav nav-tabs justify-content-center border-0 mb-4">
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "all" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("all")}
                  >
                    All Team
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link flex align-items-center ${
                      activeTab === "usa" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("usa")}
                  >
                    USA Team{" "}
                    <img
                      src="/assets/img/header/usa.png"
                      alt="USA"
                      style={{ width: "20px", marginLeft: "8px" }}
                    />
                  </button>
                </li>
                <li className="nav-item ">
                  <button
                    className={`nav-link flex align-items-center ${
                      activeTab === "ethiopia" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("ethiopia")}
                  >
                    Ethiopia Team
                    <img
                      src="/assets/img/header/eth.png"
                      alt="USA"
                      style={{ width: "20px", marginLeft: "8px" }}
                    />
                  </button>
                </li>
              </ul>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {displayTeam.length > 0 ? (
                  displayTeam.map((member, index) => (
                    <div
                      className="wow fadeInUp"
                      data-wow-delay={`${0.2 * (index + 3)}s`}
                      key={index}
                    >
                      <div className="single-team-items bg-black shadow-lg rounded-lg">
                        <div
                          className="team-image max-w-[350px] max-h-[350px]"
                          style={{
                            height: "350px",
                            width: "100%",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={
                              member.location === "USA"
                                ? `/assets/img/team/${member.image
                                    .split("/")
                                    .pop()}`
                                : `${API_BASE_URL}/${member.image}`
                            }
                            alt={member.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "top",
                            }}
                            className="bg-black rounded-lg"
                          />
                          <div className="absolute top-2 right-2 w-fit h-fit bg-black/0 rounded-lg">
                            <div className="flex justify-end">
                              <span className="   text-white text-xs flex items-center pt-1  px-2 pb-1">
                                <img
                                  src={
                                    member.location === "USA" ||
                                    member.name === "Boni Aliko" ||
                                    member.name === "Dawit Haile"
                                      ? "/assets/img/header/usa.png"
                                      : "/assets/img/header/eth.png"
                                  }
                                  alt="USA"
                                  className="mr-1 "
                                  style={{ width: "24px", height: "24px" }}
                                />{" "}
                              </span>
                            </div>
                          </div>
                          <div className="social-profile">
                            <ul>
                              {member.facebook && (
                                <li>
                                  <Link
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      copyEmailToClipboard(member.instagram);
                                    }}
                                  >
                                    <i className="fa-solid fa-envelope" />
                                  </Link>
                                </li>
                              )}
                              {member.linkedin && (
                                <li>
                                  <Link href={member.linkedin} target="_blank">
                                    <i className="fab fa-linkedin-in" />
                                  </Link>
                                </li>
                              )}
                            </ul>
                            <span className="plus-btn">
                              <i className="fas fa-share-alt" />
                            </span>
                          </div>
                        </div>
                        <div className="team-content text-center text-xs">
                          <h4 style={{ color: "white" }}>{member.name}</h4>
                          <p>{member.jobTitle}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center">
                    <p>No team members found for this location.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
