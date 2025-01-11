'use client'
// import 'swiper/css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "/public/assets/css/bootstrap.min.css"        
import "/public/assets/css/all.min.css"
import "/public/assets/css/animate.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/meanmenu.css"
import "/public/assets/css/swiper-bundle.min.css"
import "/public/assets/css/nice-select.css"
import "/public/assets/css/main.css"

import { Kumbh_Sans } from 'next/font/google'
import useStore from '../store/store'
import { useEffect } from "react"
import Head from 'next/head'

const kumbh = Kumbh_Sans({
    weight: ['300', '400', '500', '600', '700','800','900'],
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({ children }) {
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
    <html lang="en">
      <Head>
        <meta name="description" content="GenShifter Technologies - Leading software development and IT services company providing innovative solutions for businesses. Expert software development, web development, mobile apps, and IT consulting services." />
        <meta name="keywords" content="software development, IT services, web development, mobile apps, technology solutions, IT consulting, GenShifter Technologies" />
        <meta name="author" content="GenShifter Technologies" />
        <meta property="og:title" content="GenShifter Technologies - Innovative Software & IT Solutions" />
        <meta property="og:description" content="Empower your business with cutting-edge technology solutions and expert software development services from GenShifter Technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/img/header/logo.png" />
        <link rel="icon" href="/favicon.ico" />
        {/* For more modern browsers you can add: */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <body className={`${kumbh.className}`}>{children}</body>
    </html>
  )
}
