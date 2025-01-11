"use client";

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from "react";
import useStore from "../../store/store";
import Swal from 'sweetalert2';

export default function Career() {
    const {career, setCareer} = useStore();
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [careerId, setCareerId] = useState(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "", 
        email: "",
        phoneNumber: "",
        resume: null,
        coverLetter: null,
        appliedFor: ""
    });

    useEffect(() => {
        const fetchCareer = async () => {
            try {
                const response = await fetch(`https://admin.z.genshifter.com/api/career`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCareer(data);
            } catch (error) {
                console.error('Error fetching career data:', error);
            }
        };

        fetchCareer();
    }, [setCareer]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = new FormData();
        data.append('appliedFor', careerId);
        console.log(careerId,"careerId");
        for (const key in formData) {
            if (key !== 'appliedFor') {
                data.append(key, formData[key]);
            }
        }

        try {
            const response = await fetch(`https://admin.z.genshifter.com/api/career-applicant`, {
                method: 'POST',
                body: data
            });
            
            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Application submitted successfully!',
                    icon: 'success',
                    confirmButtonColor: '#ea8c06'
                });
                
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    resume: null,
                    coverLetter: null,
                    appliedFor: ""
                });
                setSelectedPosition(null);
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Error submitting application. Please try again.',
                icon: 'error',
                confirmButtonColor: '#ea8c06'
            });
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
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
                        <div className="section-title text-center mb-5">
                            <span className="wow fadeInUp" style={{color: "#ea8c06"}}>Career Opportunities</span>
                            <h2 className=" wow fadeInUp"  style={{color: "#000f30"}} data-wow-delay=".3s">
                                Join Our Team
                            </h2>
                            <p className="text-muted mt-4 wow fadeInUp" data-wow-delay=".5s">
                                Be part of our mission to transform businesses through innovative technology solutions
                            </p>
                        </div>

                        {!selectedPosition ? (
                            <div className="row g-4">
                                {career && career.map((careerItem) => (
                                    careerItem.career.map((position, index) => (
                                        <div key={position._id} className="col-lg-6 wow fadeInUp" data-wow-delay={`.${3 + index}s`}>
                                            <div className="card h-100 bg-white p-4 position-relative hover-shadow transition-300">
                                                <span className="badge" style={{backgroundColor: "#000f30", position: "absolute", top: "0", right: "0", margin: "1rem"}}>
                                                    {position.location}
                                                </span>
                                                <h3 style={{color: "#ea8c06"}} className="mb-3">{position.title}</h3>
                                                <p className="text-muted mb-2">
                                                    <i className="fas fa-building me-2"></i>
                                                    Department: {position.department}
                                                </p>
                                                <p className="mb-4">{position.description}</p>
                                                <div className="mt-3">
                                                    <h5 style={{color: "#ea8c06"}}>Key Requirements:</h5>
                                                    <ul className="list-unstyled">
                                                        {position.requirements.slice(0, 2).map((req, idx) => (
                                                            <li key={idx} className="mb-2">
                                                                <i className="fas fa-check-circle text-success me-2"></i>
                                                                {req}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <button 
                                                    className="theme-btn mt-4 w-100"
                                                    onClick={() => {
                                                        setCareerId(careerItem._id);
                                                        console.log(careerItem ,'wdw' ,careerId);
                                                      
                                                        setSelectedPosition(position);
                                                    }}
                                                    style={{backgroundColor: "#ea8c06", border: "none"}}
                                                >
                                                    View Details & Apply
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ))}
                            </div>
                        ) : (
                            <div className="card bg-white p-5 wow fadeInUp shadow-lg">
                                <button 
                                    className="btn btn-link mb-4"
                                    onClick={() => setSelectedPosition(null)}
                                    style={{color: "#ea8c06"}}
                                >
                                    <i className="fas fa-arrow-left me-2"></i>
                                    Back to All Positions
                                </button>
                                
                                <h2 style={{color: "#ea8c06"}} className="mb-4">{selectedPosition.title}</h2>
                                <div className="d-flex gap-4 text-muted mb-4">
                                    <p><i className="fas fa-building me-2"></i>{selectedPosition.department}</p>
                                    <p><i className="fas fa-map-marker-alt me-2"></i>{selectedPosition.location}</p>
                                </div>

                                <div className="mb-5">
                                    <h4 style={{color: "#ea8c06"}} className="mb-3">Description</h4>
                                    <p className="lead">{selectedPosition.description}</p>
                                </div>

                                <div className="mb-5">
                                    <h4 style={{color: "#ea8c06"}} className="mb-3">Requirements</h4>
                                    <ul className="list-group list-group-flush">
                                        {selectedPosition.requirements.map((req, idx) => (
                                            <li key={idx} className="list-group-item border-0">
                                                <i className="fas fa-check-circle text-success me-2"></i>
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="card bg-light p-5 mt-5">
                                    <h3 className="text-center mb-4" style={{color: "#ea8c06"}}>Apply for {selectedPosition.title}</h3>
                                    <form onSubmit={handleSubmit} className="needs-validation">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <label className="form-label">First Name</label>
                                                <input 
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    placeholder="Enter your first name"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Last Name</label>
                                                <input 
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    placeholder="Enter your last name"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Email Address</label>
                                                <input 
                                                    type="email"
                                                    className="form-control form-control-lg"
                                                    placeholder="Enter your email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Phone Number</label>
                                                <input 
                                                    type="tel"
                                                    className="form-control form-control-lg"
                                                    placeholder="Enter your phone number"
                                                    name="phoneNumber"
                                                    value={formData.phoneNumber}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Resume</label>
                                                <input 
                                                    type="file"
                                                    className="form-control form-control-lg"
                                                    name="resume"
                                                    onChange={handleChange}
                                                    accept=".pdf,.doc,.docx"
                                                    required
                                                />
                                                <small className="text-muted">Upload Resume (PDF/DOC/DOCX)</small>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Cover Letter</label>
                                                <input 
                                                    type="file"
                                                    className="form-control form-control-lg"
                                                    name="coverLetter"
                                                    onChange={handleChange}
                                                    accept=".pdf,.doc,.docx"
                                                    required
                                                />
                                                <small className="text-muted">Upload Cover Letter (PDF/DOC/DOCX)</small>
                                            </div>
                                            <div className="col-12 text-center mt-5">
                                                <button 
                                                    type="submit" 
                                                    className="theme-btn btn-lg px-5"
                                                    style={{backgroundColor: "#ea8c06", border: "none"}}
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
    )
}