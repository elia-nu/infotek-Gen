"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import useStore from "../../store/store"
import { useRouter } from 'next/navigation'

export default function Project() {
    const { project, setProjectDetails } = useStore()
    const router = useRouter()
    console.log(project)
    
    const handleProjectClick = (project) => {
        setProjectDetails(project)
        router.push(`/project-details?projectData=${JSON.stringify(project.id)}`)
    }
    
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Project">
            <section className="project-section section-padding fix">
                    <div className="container">
                        <div className="row g-4">
                            {project.map((project, index) => (
                                <div key={project.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`.${(index % 3 + 3)}s`}>
                                    <div className="project-items">
                                        <div className="project-image">
                                            <img src={`https://admin.z.genshifter.com/${project.image}`} alt={project.title} />
                                            <div className="project-content">
                                            <h4>
                                            <Link href={`/project-details?id=${encodeURIComponent(project._id)}`}>
                                                {project.title}
                                            </Link>
                                        </h4>
                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}