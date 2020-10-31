import React, { Component } from "react"
// import Layout from "../layouts/BaseLayout"
import ContentLayout from "../layouts/ContentLayout/ContentLayout"

// import views
// choose which views you want
// ************************************
// import Landing from "../views/Landing/proto1/landing"
// import Landing from "../views/Landing/proto2/landing"
import Landing from "../views/Landing/proto3/landing"

// import InfoCards from "../views/WhyUs/proto2/info"

// import Packages from "../views/Packages/proto1/packages"
import Packages from "../views/Packages/proto2/packages"

import AboutUs from "../views/About/proto2/about"

// import ContactUs from "../views/Contact/proto1/contact"
// import ContactUs from "../views/Contact/proto2/contact"
import ContactUs from "../views/Contact/proto3/contact"

// data
// import data from "public/data/index/data.json"
// import data from "public/data/index/data2.json"
import data from "public/data/index/data3.json"

import contactData from "public/data/contact/data.json"


class IndexPage extends Component {
  constructor(){
    super()
    this.programmesRef = React.createRef()
  }

  handleIndexButtonClick = (event) => {
    console.log("Index BUtton clicked!");
    this.programmesRef.current.scrollIntoView({behavior: "smooth"})
    // smoooth does not work with safari
  }

  render(){
    const section1Data = data.section1;
    const section2Data = data.section2;
    const section3Data = data.section3;
    return (
      <ContentLayout nav={false}>
        <Landing {...data.hero}/>
        {/* <InfoCards data={section1Data}/> */}
        <Packages data={section1Data}/>
        <AboutUs data={section2Data}/>
        <ContactUs data={section3Data} />
      </ContentLayout>
    )
  }
}

export default IndexPage
