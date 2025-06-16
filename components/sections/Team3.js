"use client";
import Link from "next/link";
import useStore from "../../store/store";
export default function Team3() {
  const { team } = useStore();
  const teamMembers = [
    {
      name: "Mekdelawit Mamushet",
      position: "Senior Backend Engineer",
      img: "/assets/img/team/905.jpg",
    },
    {
      name: "Kalab Tenadeg",
      position: "Senior Full Stack Engineer",
      img: "/assets/img/team/010.jpg",
    },
    {
      name: "Elias Nuru",
      position: "Senior Frontend Engineer",
      img: "/assets/img/team/904.jpg",
    },
    {
      name: "Abdi Aliko",
      position: "Senior Project Manager",
      img: "/assets/img/team/901.jpg",
    },
    {
      name: "Boni Birassa",
      position: "Senior Product Manager",
      img: "/assets/img/team/903.jpg",
    },
    {
      name: "Dawit Haile ",
      position: "Senior Business Analyst",
      img: "/assets/img/team/902.jpg",
    },
  ];
  return (
    <>
      <section
        className="team-section-3 fix section-padding section-bg"
        id="team"
      >
        <div className="line-shape">
          <img src="/assets/img/team/line-shape.png" alt="shape-img" />
        </div>
        <div className="mask-shape">
          <img src="/assets/img/team/mask-shape-2.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="wow fadeInUp">Team Members</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Our Dedicated Team <br /> Members
              </h2>
            </div>
            <Link
              href="/team"
              className="theme-btn wow fadeInUp"
              data-wow-delay=".5s"
            >
              All Member
              <i className="fa-solid fa-arrow-right-long" />
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            {team.slice(0, 4).map((member, index) => (
              <div
                className="wow fadeInUp"
                data-wow-delay={`${0.2 * (index + 3)}s`}
                key={index}
                style={{ flex: "0 1 350px" }}
              >
                <div className="single-team-items">
                  <div
                    className="team-image"
                    style={{
                      height: "400px",
                      width: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={`https://admin.z.genshifter.com/${member.image}`}
                      alt="team-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top", // This ensures any cropping happens at the bottom
                      }}
                    />
                    <div className="social-profile">
                      <ul>
                        <li>
                          <Link href="https://www.facebook.com">
                            <i className="fab fa-facebook-f" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="https://twitter.com">
                            <i className="fa-brands fa-twitter" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com">
                            <i className="fab fa-linkedin-in" />{" "}
                          </Link>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h3 style={{ color: "white" }}>{member.name}</h3>
                    <p>{member.jobTitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
