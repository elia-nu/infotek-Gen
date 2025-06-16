"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import useStore from "../../store/store";

export default function Team() {
  const { team } = useStore();

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Team">
        <section className="team-section-4 section-padding">
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              {team.map((member, index) => (
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
                          objectPosition: "top",
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
      </Layout>
    </>
  );
}
