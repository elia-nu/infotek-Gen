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
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
      
      if (!apiUrl) {
        console.error('API URL not configured')
        return
      }
  
      // Fetch team data
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setTeam(data)
          console.log('Team data loaded:', data)
        })
        .catch(error => console.error('Error fetching team data:', error))
  
      // Fetch testimonials data  
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/testimonial/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setTestimonials(data)
          console.log('Testimonials data loaded:', data)
        })
        .catch(error => console.error('Error fetching testimonials:', error))
  
      // Fetch partnership data
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/partnership/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setPartner(data)
          console.log('Partnership data loaded:', data)
        })
        .catch(error => console.error('Error fetching partnership:', error))
  
      // Fetch achievements data
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/achievement/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setAchievements(data)
          console.log('Achievements data loaded:', data)
        })
        .catch(error => console.error('Error fetching achievements:', error))
  
      // Fetch about data
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setAbout(data)
          console.log('About data loaded:', data)
        })
        .catch(error => console.error('Error fetching about:', error))
  
      // Fetch info data
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/info/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setInfo(data)
          console.log('Info data loaded:', data)
        })
        .catch(error => console.error('Error fetching info:', error))
  
      // Fetch contact data
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setContact(data)
          console.log('Contact data loaded:', data)
        })
        .catch(error => console.error('Error fetching contact:', error))
  
      // Fetch why choose us data
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/why-choose-us/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setWhyChooseUs(data)
          console.log('Why Choose Us data loaded:', data)
        })
        .catch(error => console.error('Error fetching why choose us:', error))
  
      // Fetch career data
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/career/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setCareer(data)
          console.log('Career data loaded:', data)
        })
        .catch(error => console.error('Error fetching career:', error))
  
      // Fetch project data
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/project/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setProject(data)
          console.log('Project data loaded:', data)
        })
        .catch(error => console.error('Error fetching project:', error))
  
      // Fetch FAQ data
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/faq`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setFaq(data)
          console.log('FAQ data loaded:', data)
        })
        .catch(error => console.error('Error fetching FAQ:', error))
  
      // Fetch service data
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setService(data)
          console.log('Service data loaded:', data)
        })
        .catch(error => console.error('Error fetching service:', error))
  
      // Fetch who we are data
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/who-we-are`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setWhoWeAre(data)
          console.log('Who We Are data loaded:', data)
        })
        .catch(error => console.error('Error fetching who we are:', error))
  
      // Fetch our goal data
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/our-goal`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setOurGoal(data)
          console.log('Our Goal data loaded:', data)
        })
        .catch(error => console.error('Error fetching our goal:', error))
  
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