
'use client'
import { useEffect, useState } from "react"
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
import useStore from '../../store/store'
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
      const apiUrl = 'https://admin.z.genshifter.com'
      
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
