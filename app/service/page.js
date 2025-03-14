
'use client';
import Accordion1 from "@/components/elements/Accordion1";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import useStore from "../../store/store";

export default function Service() {
   
    const { service } = useStore();
    console.log(service, 'service')
    const data = {
        "company": {
          "name": "GenShifter Technologies",
          "description": "GenShifter Technologies offers a comprehensive range of IT services to drive business growth through innovative technology and expertise. We specialize in software development, managed services, infrastructure management, system integration, training, and cybersecurity.",
          
          "services": [
            {
              "title": "Software Development",
              "description": "At GenShifter Technologies, we offer a comprehensive range of software development solutions tailored to meet your unique business needs and drive growth through innovative technology and industry expertise. Our services include:",
              "image": "/assets/img/service/SoftDev.jpg", // Added image
              "subservices": [
                {
                  "name": "Custom Software Development",
                   "description": "We provide tailor-made software solutions designed to fit your specific operational requirements and seamlessly integrate with your existing systems.",
                  "key_features": ["Tailored Solutions: Customized software to address your unique business processes.","Seamless Integration: Smooth integration with your current systems to maintain operational efficiency.","Scalable and Adaptable: Solutions that grow with your business and adjust to future needs."]
                },
                {
                  "name": "Mobile App Development",
                   "description": "Our team develops high-performance, user-friendly mobile applications for both iOS and Android platforms, enhancing user engagement and optimizing workflows.",
                  "key_features": [
                    "Intuitive Interfaces: Engaging and easy-to-use designs for a superior user experience.",
                    "High Performance: Optimized applications ensuring smooth functionality on both iOS and Android.",
                    "Smooth User Experience: Efficient and seamless performance for enhanced usability."
                  ]
                },
                {
                  "name": "Web Development",
                   "description": "We craft responsive, secure websites and web applications that effectively represent your brand and deliver an outstanding user experience.",
                  "key_features": [
                    "Responsive Design: Adaptable to various devices and screen sizes for a consistent experience.",
                    "Secure and Scalable: Robust solutions that ensure security and can expand with your business needs.",
                    "Enhanced User Experience: Optimized to provide a superior experience and effectively represent your brand."
                  ]
                },
                {
                  "name": "Enterprise Software Solutions",
                   "description": "We offer scalable and robust solutions designed to streamline complex processes, integrate seamlessly with existing systems, and deliver valuable data insights.",
                  "key_features": [
                    "Scalable Solutions: Efficiently manage large-scale operations with scalable solutions.",
                    "Seamless Integration: Integrate smoothly with your current enterprise systems for enhanced efficiency.",
                    "Comprehensive Insights: Deliver valuable data analytics and insights for informed decision-making."
                  ]
                }
              ]
            },
            {
              "title": "Managed Services",
              "description": "At GenShifter Technologies, our Managed Services are designed to ensure your business operates smoothly and securely. We offer a comprehensive suite of services that includes IT Support and Helpdesk, Managed Network Services, Managed Security Services, and Managed Cloud Services. Our proactive approach to managing your IT infrastructure allows you to focus on driving your business forward with confidence.",
              "image": "/assets/img/service/ms1.jpg", // Added image
              "subservices": [
                {
                  "name": "IT Support and Helpdesk",
                  "description": "Proactive IT infrastructure management to ensure smooth and secure business operations.",
                  "key_features": [
                    "24/7 Support: Around-the-clock assistance to resolve issues quickly.",
                    "Expert Assistance: Access to skilled professionals with deep technical knowledge.",
                    "Efficient Resolution: Fast and effective solutions to minimize downtime."
                  ]
                },
                {
                  "name": "Managed Network Services",
                  "description": "Proactive network management to ensure optimal performance and security.",
                  "key_features": [
                    "Network Monitoring: Continuous monitoring to detect and address issues proactively.",
                    "Performance Optimization: Ensuring optimal network performance and reliability.",
                    "Scalability: Solutions that grow with your business needs."
                  ]
                },
                {
                  "name": "Managed Security Services",
                  "description": "Advanced security management to safeguard your systems and data from cyber threats.",
                  "key_features": [
                    "Threat Detection and Response: Advanced tools and strategies to identify and mitigate threats.",
                    "Data Protection: Robust measures to safeguard your sensitive information.",
                    "Compliance: Ensuring adherence to industry regulations and standards."
                  ]
                },
                {
                  "name": "Managed Cloud Services",
                  "description": "Advanced cloud management to optimize performance and cost-efficiency.",
                  "key_features": [
                    "Cloud Optimization: Tailored solutions for optimal cloud performance and cost-efficiency.",
                    "Scalability: Easily adjust resources based on your business needs.",
                    "Support and Management: Comprehensive management and support to ensure seamless cloud operations."
                  ]
                }
              ]
            },
            {
              "title": "Infrastructure Services",
              "description": "At GenShifter Technologies, we provide a full range of Infrastructure Services designed to optimize and enhance your IT infrastructure. Our offerings include Network Setup and Management, Server Installation and Maintenance, Cloud Services (IaaS, PaaS, SaaS), and Data Center Management. We focus on ensuring that your IT operations are robust, scalable, and efficient, enabling your business to thrive in a digital landscape.",
              "image": "/assets/img/service/in1.jpg", // Added image
              "subservices": [
                {
                  "name": "Network Setup and Management",
                  "description": "We design, implement, and manage your network infrastructure to ensure seamless connectivity and reliable performance.",
                  "key_features": [
                    "Network Design and Implementation: Custom solutions tailored to your business requirements.",
                    "Ongoing Management: Continuous monitoring and maintenance to ensure optimal network performance.",
                    "Troubleshooting and Support: Rapid resolution of network issues to minimize downtime."
                  ]
                },
                {
                  "name": "Server Installation and Maintenance",
                  "description": "Our services cover the installation, configuration, and ongoing maintenance of your server infrastructure to ensure stability and efficiency.",
                  "key_features": [
                    "Server Setup: Professional installation and configuration of servers to meet your operational needs.",
                    "Regular Maintenance: Routine checks and updates to ensure server reliability and performance.",
                    "Performance Optimization: Enhancements to maximize server efficiency and response times."
                  ]
                },
                {
                  "name": "Cloud Services (IaaS, PaaS, SaaS)",
                  "description": "We offer a range of cloud solutions, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS), to support your business operations.",
                  "key_features": [
                    "IaaS: Scalable and flexible infrastructure solutions to support your IT needs.",
                    "PaaS: Development and deployment platforms for building and managing applications.",
                    "SaaS: Access to essential software applications with minimal upfront investment."
                  ]
                },
                {
                  "name": "Data Center Management",
                  "description": "We manage and maintain your data center facilities to ensure secure, efficient, and reliable operation.",
                  "key_features": [
                    "Facility Management: Comprehensive oversight of physical and virtual data center environments.",
                    "Security and Compliance: Implementing measures to protect your data and meet regulatory requirements.",
                    "Resource Optimization: Efficient use of data center resources to reduce costs and improve performance."
                  ]
                }
              ]
            },
            {
              "title": "System Integration",
              "description": "At GenShifter Technologies, our System Integration services are designed to provide seamless connectivity and enhance the efficiency of your IT environment. We specialize in API Integration, Enterprise Application Integration, and Middleware Development to unify your disparate systems and applications. Our goal is to ensure smooth data exchange, improved performance, and a cohesive IT ecosystem that drives your business forward.",
              "image": "/assets/img/service/si.jpg", // Added image
              "subservices": [
                {
                  "name": "API Integration",
                  "description": "We enable your systems to communicate effectively by integrating various APIs, allowing for efficient data exchange and interaction between different software applications.",
                  "key_features": [
                    "Custom API Development: Tailored API solutions to meet your specific integration needs.",
                    "Enhanced Connectivity: Seamless interaction between diverse applications and services.",
                    "Real-time Data Exchange: Immediate synchronization of data across systems."
                  ]
                },
                {
                  "name": "Enterprise Application Integration",
                  "description": "Our services focus on integrating your enterprise applications to streamline processes, improve data accuracy, and enhance overall efficiency.",
                  "key_features": [
                    "Holistic Integration: Unified view and management of enterprise applications.",
                    "Process Optimization: Streamlined workflows and reduced redundancy.",
                    "Improved Data Consistency: Ensuring accurate and up-to-date information across applications."
                  ]
                },
                {
                  "name": "Middleware Development",
                  "description": "We develop and implement middleware solutions to facilitate communication and data exchange between different software applications and systems.",
                  "key_features": [
                    "Custom Middleware Solutions: Tailored middleware to fit your specific integration requirements.",
                    "Enhanced Performance: Optimized communication channels for better system performance.",
                    "Scalability: Middleware solutions that grow with your business needs."
                  ]
                }
              ]
            },
            {
              "title": "Training and Development",
              "description": "At GenShifter Technologies, our Training and Development services are designed to empower your team with the knowledge and skills needed to leverage your technology effectively. We offer tailored programs in Technical Training, Software Training, and End-User Training to ensure enhanced proficiency and optimal utilization of your systems.",
              "image": "/assets/img/service/si.jpg", // Added image
              "subservices": [
                {
                  "name": "Technical Training",
                  "description": "We provide specialized training for IT professionals to deepen their technical expertise and stay current with the latest technologies and practices.",
                  "key_features": [
                    "In-Depth Technical Courses: Comprehensive training on advanced technical topics and tools.",
                    "Hands-On Experience: Practical sessions to apply theoretical knowledge in real-world scenarios.",
                    "Certification Preparation: Assistance with industry-recognized certifications and qualifications."
                  ]
                },
                {
                  "name": "Software Training",
                  "description": "Our software training programs are designed to help your team master the specific software applications your business uses.",
                  "key_features": [
                    "Application-Specific Training: Focused sessions on the software tools relevant to your organization.",
                    "Customized Content: Tailored training materials to address your software’s unique features and functions.",
                    "Interactive Learning: Engaging methods to ensure effective learning and retention."
                  ]
                },
                {
                  "name": "End-User Training",
                  "description": "Our end-user training programs are designed to help your team master the specific software applications your business uses.",
                  "key_features": [
                    "User-Friendly Training: Simple, clear instructions suited to users of all skill levels.",
                    "Practical Exercises: Real-world scenarios to help users apply what they've learned.",
                    "Ongoing Support: Resources and assistance to address any questions or issues that arise post-training."
                  ]
                }
              ]
            },
            {
              "title": "Cybersecurity Services",
              "description": "At GenShifter Technologies, our Cybersecurity Services are designed to provide robust protection against digital threats and ensure the safety of your critical data and systems. Our comprehensive offerings include Security Audits and Assessments, Threat Detection and Response, Vulnerability Management, and Data Encryption and Protection. We implement advanced strategies to fortify your digital environment, proactively identify risks, and maintain the highest level of security.",
              "image": "/assets/img/service/cb2.jpg", // Added image
              "subservices": [
                {
                  "name": "Security Audits and Assessments",
                  "description": "We conduct thorough security audits and assessments to evaluate your current security posture and identify potential vulnerabilities.",
                  "key_features": [
                    "Comprehensive Audits: Detailed examinations of your security infrastructure and practices.",
                    "Risk Identification: Detection of weaknesses and potential threats to your systems.",
                    "Actionable Recommendations: Practical advice for enhancing your security measures and policies."
                  ]
                },
                {
                  "name": "Threat Detection and Response",
                  "description": "Our services provide real-time monitoring and rapid response to emerging threats, minimizing potential damage and downtime.",
                  "key_features": [
                    "24/7 Monitoring: Continuous surveillance of your network and systems for suspicious activities.",
                    "Immediate Response: Quick action to address and neutralize threats as they arise.",
                    "Incident Management: Detailed reporting and management of security incidents to prevent recurrence."
                  ]
                },
                {
                  "name": "Vulnerability Management",
                  "description": "We identify and manage vulnerabilities within your IT environment to reduce the risk of exploitation and ensure system integrity",
                  "key_features": [
                    "Vulnerability Scanning: Regular scans to detect potential security weaknesses.",
                    "Patch Management: Timely updates and patches to address identified vulnerabilities.",
                    "Risk Prioritization: Assessment and prioritization of vulnerabilities based on potential impact."
                  ]
                },
                {
                  "name": "Data Encryption and Protection",
                  "description": "We implement robust encryption and protection measures to safeguard your sensitive data from unauthorized access and breaches.",
                  "key_features": [
                    "Data Encryption: Advanced encryption techniques to secure data both at rest and in transit.",
                    "Access Controls: Strict access management to ensure only authorized personnel can view or modify sensitive information.",
                    "Data Loss Prevention: Strategies and tools to prevent accidental or malicious data loss."
                  ]
                }
              ]
            }
          ]
        }
      }
    const [services, setServices] = useState();

    useEffect(() => {
        setServices(data.company.services);
        console.log(services ,"class");
        console.log(data.company.services);
    }, []);
    console.log(services , "zoz");
    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Services">
                <div>
                    <section className="service-section fix section-padding">
                        <div className="container">
                            <div className="section-title text-center">
                                <span className="wow fadeInUp">OUR SERVICES</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    We Provide the Best Quality
                                </h2>
                            </div>
                            <div className="service-wrapper mb-0">
                                <div className="row">
                                {service && service.map((service, index) => (
                                    <div key={index} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="service-box-items box-shadow">
                                        <div className="icon">
                                                <img src={`/assets/img/service/icon/s-icon-${Math.floor(Math.random() * 4) + 1}.svg`} alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href={`/service-details?title=${encodeURIComponent(service._id)}`}>
                                                        {service.title}
                                                    </Link>
                                                </h4>
                                                <p>
                                                    {service.description.length > 40 ? `${service.description.substring(0, 65)}...` : service.description}
                                                </p>
                                                <Link href={`/service-details?title=${encodeURIComponent(service._id)}`} className="theme-btn-2 mt-3">
                                                    read More
                                                    <i className="fa-solid fa-arrow-right-long" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </div>

                    </section>
                    {/*<< Faq Section Start >>*/}
                     </div>

            </Layout>
        </>
    )
}