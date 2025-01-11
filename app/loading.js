'use client'
import Preloader from '@/components/elements/Preloader'
import { useEffect } from 'react'
import useStore from '../store/store'

export default function loading() {
    const { setTeam, setTestimonials, setPartner, setAchievements, setAbout, setInfo, setContact, setWhyChooseUs, setCareer, setProject, setFaq, setService, setWhoWeAre, setOurGoal } = useStore()

    useEffect(() => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
      
      if (!apiUrl) {
        console.error('API URL not configured')
        return
      }
  
      const fetchAllData = () => {
        const endpoints = [
          { url: '/api/team/', setter: setTeam, name: 'Team' },
          { url: '/api/testimonial/', setter: setTestimonials, name: 'Testimonials' },
          { url: '/api/partnership/', setter: setPartner, name: 'Partnership' },
          { url: '/api/achievement/', setter: setAchievements, name: 'Achievements' },
          { url: '/api/about/', setter: setAbout, name: 'About' },
          { url: '/api/info/', setter: setInfo, name: 'Info' },
          { url: '/api/contact/', setter: setContact, name: 'Contact' },
          { url: '/api/why-choose-us/', setter: setWhyChooseUs, name: 'Why Choose Us' },
          { url: '/api/project/', setter: setProject, name: 'Project' },
          { url: '/api/faq', setter: setFaq, name: 'FAQ' },
          { url: '/api/service', setter: setService, name: 'Service' },
          { url: '/api/who-we-are', setter: setWhoWeAre, name: 'Who We Are' },
          { url: '/api/our-goal', setter: setOurGoal, name: 'Our Goal' }
        ]
  
        endpoints.forEach(endpoint => {
          fetch(`${apiUrl}${endpoint.url}`)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok')
              }
              return response.json()
            })
            .then(data => {
              endpoint.setter(data)
              console.log(`${endpoint.name} data loaded:`, data)
            })
            .catch(error => console.error(`Error fetching ${endpoint.name}:`, error))
        })
      }
  
      // Initial fetch
      fetchAllData()
  
      // Set up interval to fetch every 30 seconds
      const interval = setInterval(fetchAllData, 30000)
  
      // Cleanup interval on component unmount
      return () => clearInterval(interval)
  
    }, [setTeam, setTestimonials, setPartner, setAchievements, setAbout, setInfo, setContact, setWhyChooseUs, setCareer, setProject, setFaq, setService, setWhoWeAre, setOurGoal])
  
  
    return (
        <>
            <Preloader />
        </>
    )
}
