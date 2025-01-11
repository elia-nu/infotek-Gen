'use client'

import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Achievement1 from "@/components/sections/Achievement1"
import Brand1 from "@/components/sections/Brand1"
import Cta1 from "@/components/sections/Cta1"
import Faq1 from "@/components/sections/Faq1"
import Hero1 from "@/components/sections/Hero1"
import Marque1 from "@/components/sections/Marque1"
import Marque2 from "@/components/sections/Marque2"
import News1 from "@/components/sections/News1"
import Pricing1 from "@/components/sections/Pricing1"
import Project1 from "@/components/sections/Project1"
import Service1 from "@/components/sections/Service1"
import Team3 from "@/components/sections/Team3"
import Testimonial1 from "@/components/sections/Testimonial1"
import useStore from "../store/store"
import { useEffect } from "react"

export default function Home() {
    const { setTeam, setTestimonials, setPartner, setAchievements, setAbout, setInfo, setContact, setWhyChooseUs, setCareer, setProject, setFaq, setService, setWhoWeAre, setOurGoal } = useStore()

    useEffect(() => {
        const apiUrl = 'https://admin.z.genshifter.com'
        
        if (!apiUrl) {
            console.error('API URL not configured')
            return
        }

        const endpoints = [
            { path: '/api/team/', setter: setTeam, name: 'Team' },
            { path: '/api/testimonial/', setter: setTestimonials, name: 'Testimonials' },
            { path: '/api/partnership/', setter: setPartner, name: 'Partnership' },
            { path: '/api/achievement/', setter: setAchievements, name: 'Achievements' },
            { path: '/api/about/', setter: setAbout, name: 'About' },
            { path: '/api/info/', setter: setInfo, name: 'Info' },
            { path: '/api/contact/', setter: setContact, name: 'Contact' },
            { path: '/api/why-choose-us/', setter: setWhyChooseUs, name: 'Why Choose Us' },
            { path: '/api/career/', setter: setCareer, name: 'Career' },
            { path: '/api/project/', setter: setProject, name: 'Project' },
            { path: '/api/faq', setter: setFaq, name: 'FAQ' },
            { path: '/api/service', setter: setService, name: 'Service' },
            { path: '/api/who-we-are', setter: setWhoWeAre, name: 'Who We Are' },
            { path: '/api/our-goal', setter: setOurGoal, name: 'Our Goal' }
        ]
        const fetchData = async (endpoint) => {
            try {
                const response = await fetch(`${apiUrl}${endpoint.path}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                endpoint.setter(data);
            } catch (error) {
                console.error(`Error fetching ${endpoint.name.toLowerCase()} data:`, error);
            }
        };

        // Fetch all data concurrently
        Promise.all(endpoints.map(fetchData))

    }, [setTeam, setTestimonials, setPartner, setAchievements, setAbout, setInfo, setContact, setWhyChooseUs, setCareer, setProject, setFaq, setService, setWhoWeAre, setOurGoal])

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Hero1 />
                <About3 />
                <Service1 />
                <Achievement1 />
                <Project1 />
                <Testimonial1 />
                <Team3 />
                <Faq1 />
                <Cta1 />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center " style={{color: 'white', paddingTop: '190px'}}>
                                <Brand1 />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}