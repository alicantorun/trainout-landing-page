import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Hero from "../components/sections/hero"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import HowToTrainout from "../components/sections/how-to-trainout"
import WhatIsTrainout from "../components/sections/what-is-trainout"

const IndexPage = () => (
  <Layout>
    <SEO title="Future of outdoor training" />
    <Navigation />
    <Hero />
    <WhatIsTrainout />
    <HowToTrainout />
    <Features />
    <GetStarted />
    {/* <Footer /> */}
  </Layout>
)

export default IndexPage
