"use client";

import Layout from "@/components/layout/Layout";
import { useState } from "react";
import Swal from "sweetalert2";
import { API_BASE_URL } from "../../config/constants";

export default function Consultation() {
  const [showCalendlyPopup, setShowCalendlyPopup] = useState(false);
  const [showInPersonPopup, setShowInPersonPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    description: "",
    preferredDate: "",
    preferredTime: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Special handling for phone number to allow only valid characters
    if (name === "phoneNumber") {
      // Allow only numbers, spaces, parentheses, hyphens, and plus sign
      const phoneValue = value.replace(/[^0-9+\-\s\(\)]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: phoneValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnlineConsultation = () => {
    setShowCalendlyPopup(true);
  };

  const closeCalendlyPopup = () => {
    setShowCalendlyPopup(false);
  };

  const handleInPersonConsultation = () => {
    setShowInPersonPopup(true);
  };

  const closeInPersonPopup = () => {
    setShowInPersonPopup(false);
  };

  const handleInPersonSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name ||
      !formData.companyName ||
      !formData.description ||
      !formData.preferredDate ||
      !formData.preferredTime ||
      !formData.email ||
      !formData.phoneNumber
    ) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all required fields.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        title: "Invalid Email!",
        text: "Please enter a valid email address.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Validate phone number format
    const phoneRegex = /^[0-9+\-\s\(\)]{10,15}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      Swal.fire({
        title: "Invalid Phone Number!",
        text: "Please enter a valid phone number (10-15 digits).",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/consultation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Your consultation request has been submitted successfully. We'll contact you soon!",
          icon: "success",
          confirmButtonText: "OK",
        });

        // Reset form
        setFormData({
          name: "",
          companyName: "",
          description: "",
          preferredDate: "",
          preferredTime: "",
          email: "",
          phoneNumber: "",
        });
        setShowInPersonPopup(false);
      } else {
        throw new Error("Failed to submit consultation request");
      }
    } catch (error) {
      console.error("Error submitting consultation:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an error submitting your request. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Consultation">
        <section
          className="contact-section section-padding fix"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="container">
            <div className="contact-wrapper">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="contact-content">
                    <div className="section-title">
                      <span
                        className="wow fadeInUp"
                        style={{ color: "orange" }}
                      >
                        GET IN TOUCH
                      </span>
                      <h4
                        className="wow fadeInUp text-white"
                        data-wow-delay=".3s"
                      >
                        Schedule Your Consultation
                      </h4>
                      <p
                        className="wow fadeInUp text-white"
                        data-wow-delay=".5s"
                      >
                        Choose how you'd like to meet with our experts. We offer
                        both online and in-person consultations to discuss your
                        project needs.
                      </p>
                    </div>
                    <div
                      className="consultation-options wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div
                            className="consultation-card"
                            onClick={handleOnlineConsultation}
                            style={{
                              cursor: "pointer",
                              padding: "40px 30px",
                              border: "2px solid #e1e1e1",
                              borderRadius: "10px",
                              textAlign: "center",
                              transition: "all 0.3s ease",
                              background: "#fff",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.borderColor = "#3C72FC";
                              e.target.style.transform = "translateY(-5px)";
                              e.target.style.boxShadow =
                                "0 10px 30px rgba(60, 114, 252, 0.1)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.borderColor = "#e1e1e1";
                              e.target.style.transform = "translateY(0)";
                              e.target.style.boxShadow = "none";
                            }}
                          >
                            <div
                              style={{
                                fontSize: "48px",
                                color: "#3C72FC",
                                marginBottom: "20px",
                              }}
                            >
                              💻
                            </div>
                            <h4 style={{ marginBottom: "15px", color: "#333" }}>
                              Online Consultation
                            </h4>
                            <p style={{ color: "#666", marginBottom: "20px" }}>
                              Schedule a virtual meeting through our online
                              calendar system
                            </p>
                            <div
                              className="theme-btn"
                              style={{ display: "inline-block" }}
                            >
                              Book Online
                              <i
                                className="fa-solid fa-arrow-right-long"
                                style={{ marginLeft: "8px" }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div
                            className="consultation-card"
                            onClick={handleInPersonConsultation}
                            style={{
                              cursor: "pointer",
                              padding: "40px 30px",
                              border: "2px solid #e1e1e1",
                              borderRadius: "10px",
                              textAlign: "center",
                              transition: "all 0.3s ease",
                              background: "#fff",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.borderColor = "#3C72FC";
                              e.target.style.transform = "translateY(-5px)";
                              e.target.style.boxShadow =
                                "0 10px 30px rgba(60, 114, 252, 0.1)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.borderColor = "#e1e1e1";
                              e.target.style.transform = "translateY(0)";
                              e.target.style.boxShadow = "none";
                            }}
                          >
                            <div
                              style={{
                                fontSize: "48px",
                                color: "#3C72FC",
                                marginBottom: "20px",
                              }}
                            >
                              🏢
                            </div>
                            <h4 style={{ marginBottom: "15px", color: "#333" }}>
                              In-Person Consultation
                            </h4>
                            <p style={{ color: "#666", marginBottom: "20px" }}>
                              Meet with our team at our office for a detailed
                              discussion
                            </p>
                            <div
                              className="theme-btn"
                              style={{ display: "inline-block" }}
                            >
                              Schedule Visit
                              <i
                                className="fa-solid fa-arrow-right-long"
                                style={{ marginLeft: "8px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>

      {/* Calendly Popup */}
      {showCalendlyPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
          onClick={closeCalendlyPopup}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "800px",
              height: "80%",
              backgroundColor: "white",
              borderRadius: "10px",
              position: "relative",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeCalendlyPopup}
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                zIndex: 10000,
                color: "#666",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
            <iframe
              src="https://calendly.com/genshifter8/30min"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule Online Consultation"
            />
          </div>
        </div>
      )}

      {/* In-Person Consultation Popup */}
      {showInPersonPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
          onClick={closeInPersonPopup}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "600px",
              maxHeight: "90%",
              backgroundColor: "white",
              borderRadius: "15px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeInPersonPopup}
              style={{
                position: "absolute",
                top: "15px",
                right: "20px",
                background: "none",
                border: "none",
                fontSize: "28px",
                cursor: "pointer",
                zIndex: 10000,
                color: "#666",
                width: "35px",
                height: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#f8f9fa";
                e.target.style.color = "#333";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#666";
              }}
            >
              ×
            </button>

            <div
              style={{
                maxHeight: "90vh",
                overflowY: "auto",
                padding: "40px 30px 30px 30px",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <div style={{ fontSize: "48px", marginBottom: "15px" }}>🏢</div>
                <h3
                  style={{
                    color: "#333",
                    marginBottom: "10px",
                    fontSize: "24px",
                  }}
                >
                  In-Person Consultation
                </h3>
                <p style={{ color: "#666", fontSize: "16px", margin: 0 }}>
                  Schedule a visit to our office for detailed discussion
                </p>
              </div>

              <form onSubmit={handleInPersonSubmit}>
                <div className="row g-3">
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: "100%",
                          padding: "15px 20px",
                          border: "2px solid #e1e5e9",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "#333",
                          backgroundColor: "#fff",
                          transition: "all 0.3s ease",
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#3C72FC";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(60, 114, 252, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e1e5e9";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name *"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: "100%",
                          padding: "15px 20px",
                          border: "2px solid #e1e5e9",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "#333",
                          backgroundColor: "#fff",
                          transition: "all 0.3s ease",
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#3C72FC";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(60, 114, 252, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e1e5e9";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: "100%",
                          padding: "15px 20px",
                          border: "2px solid #e1e5e9",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "#333",
                          backgroundColor: "#fff",
                          transition: "all 0.3s ease",
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#3C72FC";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(60, 114, 252, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e1e5e9";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number *"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        pattern="[0-9+\-\s\(\)]{10,15}"
                        title="Please enter a valid phone number (10-15 digits)"
                        required
                        style={{
                          width: "100%",
                          padding: "15px 20px",
                          border: "2px solid #e1e5e9",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "#333",
                          backgroundColor: "#fff",
                          transition: "all 0.3s ease",
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#3C72FC";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(60, 114, 252, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e1e5e9";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                        style={{
                          width: "100%",
                          padding: "15px 20px",
                          border: "2px solid #e1e5e9",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "#333",
                          backgroundColor: "#fff",
                          transition: "all 0.3s ease",
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#3C72FC";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(60, 114, 252, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e1e5e9";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: "100%",
                          padding: "15px 20px",
                          border: "2px solid #e1e5e9",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "#333",
                          backgroundColor: "#fff",
                          transition: "all 0.3s ease",
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#3C72FC";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(60, 114, 252, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e1e5e9";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        <option value="" style={{ color: "#999" }}>
                          Select Preferred Time *
                        </option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <textarea
                        name="description"
                        placeholder="Project Description / What would you like to discuss? *"
                        rows="4"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: "100%",
                          padding: "15px 20px",
                          border: "2px solid #e1e5e9",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "#333",
                          backgroundColor: "#fff",
                          transition: "all 0.3s ease",
                          outline: "none",
                          resize: "vertical",
                          minHeight: "100px",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#3C72FC";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(60, 114, 252, 0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e1e5e9";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div
                      style={{
                        textAlign: "center",
                        marginTop: "30px",
                        paddingBottom: "40px",
                        display: "flex",
                        gap: "15px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <button
                        type="submit"
                        className="theme-btn"
                        style={{
                          borderRadius: "8px",
                          minWidth: "100%",
                          height: "54px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Submit Request
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
