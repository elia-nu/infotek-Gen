"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import useStore from "../../store/store";
import Swal from "sweetalert2";
import { API_BASE_URL } from "../../config/constants";

export default function Career() {
  const { career, setCareer } = useStore();
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [careerId, setCareerId] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    resume: null,
    coverLetter: null,
    appliedFor: "",
  });

  useEffect(() => {
    const fetchCareer = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/career`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCareer(data);
      } catch (error) {
        console.error("Error fetching career data:", error);
      }
    };

    fetchCareer();
  }, [setCareer]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("appliedFor", careerId);
    console.log(careerId, "careerId");
    for (const key in formData) {
      if (key !== "appliedFor") {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/career-applicant`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Application submitted successfully!",
          icon: "success",
          confirmButtonColor: "#ea8c06",
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          resume: null,
          coverLetter: null,
          appliedFor: "",
        });
        setSelectedPosition(null);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      Swal.fire({
        title: "Error!",
        text: "Error submitting application. Please try again.",
        icon: "error",
        confirmButtonColor: "#ea8c06",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Careers">
        <section className="offer-section fix bg-white section-padding">
          <div className="line-shape">
            <img src="/assets/img/team/line-shape.png" alt="shape-img" />
          </div>
          <div className="mask-shape">
            <img src="/assets/img/team/mask-shape.png" alt="shape-img" />
          </div>
          <div className="container">
            <div className="text-center mb-10">
              <span className="wow fadeInUp text-[#ea8c06]">
                Career Opportunities
              </span>
              <h2 className="wow fadeInUp text-[#000f30]" data-wow-delay=".3s">
                Join Our Team
              </h2>
              <p
                className="text-gray-500 mt-4 wow fadeInUp"
                data-wow-delay=".5s"
              >
                Be part of our mission to transform businesses through
                innovative technology solutions
              </p>
            </div>

            {!selectedPosition ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {career &&
                  career.map((careerItem) =>
                    careerItem.career.map((position, index) => (
                      <div
                        key={position._id}
                        className="wow fadeInUp"
                        data-wow-delay={`.${3 + index}s`}
                      >
                        <div className="bg-white p-3 h-full relative rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                          <span
                            className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold text-white rounded"
                            style={{ backgroundColor: "#000f30" }}
                          >
                            {position.location}
                          </span>
                          <h5 className="text-[#ea8c06] text-lg font-medium mb-2 pt-4">
                            {position.title}123
                          </h5>
                          <p className="text-gray-500 text-sm mb-1">
                            <i className="fas fa-building mr-1"></i>
                            {position.department}
                          </p>
                          <p className="text-sm mb-2 line-clamp-3">
                            {position.description.substring(0, 180)}...
                          </p>
                          <div className="mt-2">
                            <h6 className="text-[#ea8c06] text-base font-medium">
                              Requirements:
                            </h6>
                            <ul className="list-none text-sm">
                              {position.requirements
                                .slice(0, 3)
                                .map((req, idx) => (
                                  <li key={idx} className="mb-1">
                                    <i className="fas fa-check-circle text-green-500 mr-1"></i>
                                    {req.substring(0, 200)}...
                                  </li>
                                ))}
                            </ul>
                          </div>
                          <button
                            className="w-full py-1 mt-2 text-white rounded transition-colors duration-300"
                            onClick={() => {
                              setCareerId(careerItem._id);
                              setSelectedPosition(position);
                            }}
                            style={{ backgroundColor: "#ea8c06" }}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    ))
                  )}
              </div>
            ) : (
              <div className="bg-white p-5 rounded-lg shadow-lg wow fadeInUp">
                <button
                  className="text-[#ea8c06] mb-4 flex items-center"
                  onClick={() => setSelectedPosition(null)}
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Back to All Positions
                </button>

                <h2 className="text-[#ea8c06] mb-4 text-2xl font-bold">
                  {selectedPosition.title}
                </h2>
                <div className="flex gap-4 text-gray-500 mb-4">
                  <p>
                    <i className="fas fa-building mr-2"></i>
                    {selectedPosition.department}
                  </p>
                  <p>
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {selectedPosition.location}
                  </p>
                </div>

                <div className="mb-5">
                  <h4 className="text-[#ea8c06] mb-3 text-xl font-medium">
                    Description
                  </h4>
                  <p className="text-lg">{selectedPosition.description}</p>
                </div>

                <div className="mb-5">
                  <h4 className="text-[#ea8c06] mb-3 text-xl font-medium">
                    Requirements
                  </h4>
                  <ul className="space-y-2">
                    {selectedPosition.requirements.map((req, idx) => (
                      <li key={idx} className="border-b border-gray-100 pb-2">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-100 p-5 mt-5 rounded-lg">
                  <h3 className="text-center mb-4 text-[#ea8c06] text-xl font-bold">
                    Apply for {selectedPosition.title}
                  </h3>
                  <form onSubmit={handleSubmit} className="needs-validation">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1">First Name</label>
                        <input
                          type="text"
                          className="w-full p-3 border rounded-lg"
                          placeholder="Enter your first name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-1">Last Name</label>
                        <input
                          type="text"
                          className="w-full p-3 border rounded-lg"
                          placeholder="Enter your last name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-1">Email Address</label>
                        <input
                          type="email"
                          className="w-full p-3 border rounded-lg"
                          placeholder="Enter your email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-1">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full p-3 border rounded-lg"
                          placeholder="Enter your phone number"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-1">Resume</label>
                        <input
                          type="file"
                          className="w-full p-2 border rounded-lg"
                          name="resume"
                          onChange={handleChange}
                          accept=".pdf,.doc,.docx"
                          required
                        />
                        <span className="text-sm text-gray-500">
                          Upload Resume (PDF/DOC/DOCX)
                        </span>
                      </div>
                      <div>
                        <label className="block mb-1">Cover Letter</label>
                        <input
                          type="file"
                          className="w-full p-2 border rounded-lg"
                          name="coverLetter"
                          onChange={handleChange}
                          accept=".pdf,.doc,.docx"
                          required
                        />
                        <span className="text-sm text-gray-500">
                          Upload Cover Letter (PDF/DOC/DOCX)
                        </span>
                      </div>
                      <div className="col-span-1 md:col-span-2 text-center mt-5">
                        <button
                          type="submit"
                          className="px-5 py-2 text-white rounded-lg font-medium"
                          style={{ backgroundColor: "#ea8c06" }}
                        >
                          Submit Application
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
}
