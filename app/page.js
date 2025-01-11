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
  //  const { setTeam, setTestimonials, setPartner, setAchievements, setAbout, setInfo, setContact, setWhyChooseUs, setCareer, setProject, setFaq, setService, setWhoWeAre, setOurGoal } = useStore()
//
  //  useEffect(() => {
  //    const apiUrl = 'https://admin.z.genshifter.com'
  //    
  //    if (!apiUrl) {
  //      console.error('API URL not configured2')
  //      return
  //    }
  //
  //    const fetchAllData = () => {
  //      const endpoints = [
  //        { url: '/api/team/', setter: setTeam, name: 'Team' },
  //        { url: '/api/testimonial/', setter: setTestimonials, name: 'Testimonials' },
  //        { url: '/api/partnership/', setter: setPartner, name: 'Partnership' },
  //        { url: '/api/achievement/', setter: setAchievements, name: 'Achievements' },
  //        { url: '/api/about/', setter: setAbout, name: 'About' },
  //        { url: '/api/info/', setter: setInfo, name: 'Info' },
  //        { url: '/api/contact/', setter: setContact, name: 'Contact' },
  //        { url: '/api/why-choose-us/', setter: setWhyChooseUs, name: 'Why Choose Us' },
  //        { url: '/api/project/', setter: setProject, name: 'Project' },
  //        { url: '/api/faq', setter: setFaq, name: 'FAQ' },
  //        { url: '/api/service', setter: setService, name: 'Service' },
  //        { url: '/api/who-we-are', setter: setWhoWeAre, name: 'Who We Are' },
  //        { url: '/api/our-goal', setter: setOurGoal, name: 'Our Goal' }
  //      ]
  //
  //      endpoints.forEach(endpoint => {
  //        fetch(`${apiUrl}${endpoint.url}`)
  //          .then(response => {
  //            if (!response.ok) {
  //              throw new Error('Network response was not ok')
  //            }
  //            return response.json()
  //          })
  //          .then(data => {
  //            endpoint.setter(data)
  //            console.log(`${endpoint.name} data loaded:`, data)
  //          })
  //          .catch(error => console.error(`Error fetching ${endpoint.name}:`, error))
  //      })
  //    }
  //
  //    // Initial fetch
  //    fetchAllData()
  //
  //    // Set up interval to fetch every 30 seconds
  //    const interval = setInterval(fetchAllData, 30000)
  //
  //    // Cleanup interval on component unmount
  //    return () => clearInterval(interval)
  //
  //  }, [setTeam, setTestimonials, setPartner, setAchievements, setAbout, setInfo, setContact, setWhyChooseUs, setCareer, setProject, setFaq, setService, setWhoWeAre, setOurGoal])
  //
  //  useEffect(() => {
  //      const fetchProject = async () => {
  //          try {
  //              const response = await fetch(`https://admin.z.genshifter.com/api/project`);
  //              if (!response.ok) {
  //                  throw new Error(`HTTP error! status: ${response.status}`);
  //              }
  //              const data = await response.json();
  //              setProject(data);
  //          } catch (error) {
  //              console.error('Error fetching project data:', error);
  //          }
  //      };
//
  //      fetchProject();
  //  }, [setProject]);
    
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