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
