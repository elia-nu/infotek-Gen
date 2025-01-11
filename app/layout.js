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
