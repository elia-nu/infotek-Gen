"use client";

import Layout from "@/components/layout/Layout"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import useStore from "../../store/store"
import Preloader from "@/components/elements/Preloader";

export default function ProjectDetails() {
    const searchParams = useSearchParams();
    const [projectDetails, setProjectDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { project } = useStore();

    useEffect(() => {
        const projectId = searchParams.get('id');
        if (projectId && project) {
            const projects = project.find(p => p._id === projectId);
            setProjectDetails(projects);
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    }, [searchParams, project]);

    if (isLoading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <Preloader />
            </div>
        );
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Project Details">
                <section className="Project-details-section fix section-padding">
                    <div className="container">
                        {projectDetails ? (
                            <div className="project-details-wrapper">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="project-details-items">
                                            <div className="details-image">
                                                <img src={`${process.env.NEXT_PUBLIC_API_URL}/${projectDetails?.image}`} alt={projectDetails?.title} />
                                            </div>
                                            <div className="row g-4 justify-content-between" >
                                                <div className="">
                                                    <div className="details-content pt-5">
                                                        <h3>{projectDetails?.title}</h3>
                                                        <p style={{ margin: '10px 0' }}>{projectDetails?.description}</p>
                                                        <h4 style={{ margin: '10px' }}>Benefits</h4>
                                                        <ul>
                                                            {projectDetails?.benefits?.map((benefit, index) => (
                                                                <li key={index} style={{ display: 'flex', flexDirection:'row', gap:'5px', marginLeft:'10px'}}>
                                                                    <span className="star-icon">⭐</span>
                                                                    <div>{benefit}</div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div style={{
                                textAlign: 'center',
                                padding: '50px'
                            }}>
                                <h3>Loading...</h3>
                            </div>
                        )}
                    </div>
                </section>
            </Layout>
        </>
    )
}