
'use client'
import { useEffect, useState } from "react"
import  useStore  from "../../store/store"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import MouseCursor from "./MouseCursor"
import Offcanvas from "./Offcanvas"
import Search from "./Search"
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from "./footer/Footer3"
import Footer4 from "./footer/Footer4"
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"

export default function Layout({ headerStyle, footerStyle, onePageNav, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)

    const [isOffCanvas, setOffCanvas] = useState(false)
    const handleOffCanvas = () => setOffCanvas(!isOffCanvas)

    const [isSearch, setSearch] = useState(false)
    const handleSearch = () => setSearch(!isSearch)

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])


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
            <MouseCursor />
            <Offcanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />

            {!headerStyle && <Header2 scroll={scroll} onePageNav={onePageNav} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} isSearch={isSearch} handleSearch={handleSearch} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} onePageNav={onePageNav} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} isSearch={isSearch} handleSearch={handleSearch} /> : null}
            {headerStyle == 2 ? <Header2 scroll={scroll} onePageNav={onePageNav} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} isSearch={isSearch} handleSearch={handleSearch} /> : null}
            {headerStyle == 3 ? <Header3 scroll={scroll} onePageNav={onePageNav} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} isSearch={isSearch} handleSearch={handleSearch} /> : null}
            {headerStyle == 4 ? <Header4 scroll={scroll} onePageNav={onePageNav} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} isSearch={isSearch} handleSearch={handleSearch} /> : null}
            <Search isSearch={isSearch} handleSearch={handleSearch} />


            {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

            {children}

            {!footerStyle && < Footer1 />}
            {footerStyle == 1 ? < Footer1 /> : null}
            {footerStyle == 2 ? < Footer1 /> : null}
            {footerStyle == 3 ? < Footer3 /> : null}
            {footerStyle == 4 ? < Footer4 /> : null}

            <BackToTop />
        </>
    )
}
