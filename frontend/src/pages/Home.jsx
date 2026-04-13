import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import DiscountSection from '../components/DiscountSection'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <DiscountSection />
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
