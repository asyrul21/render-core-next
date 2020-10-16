import React from "react"
import cx from "classnames"

//import GenericContainer
// import GenericContainer from "../../containers/GenericContainer/GenericContainer"

// components
import Content from "containers/Content/Content"
import TextPhotoRow from "components/TextPhotoRow/TextPhotoRow"
import SectionTitle from "components/sectionTitles/sectionTitle1/sectionTitle"
import OrgChartRow from "components/orgCharts/OrgChartRow"
import ImageSlider from "components/imageSlider/container/imageSlider"

// data
import data from "data/about/data.json"

// import style
import "./about.scss"

const About = () => {
  const textPhotoRowData = data.textPhotoRows
  return (
    <Content>
      <TextPhotoRow
        pictureLast
        heading={textPhotoRowData[0].heading}
        paragraphs={textPhotoRowData[0].paragraphs}
        image={textPhotoRowData[0].image}
      />

      <TextPhotoRow
        pictureFirst
        heading={textPhotoRowData[1].heading}
        paragraphs={textPhotoRowData[1].paragraphs}
        image={textPhotoRowData[1].image}
      />
      <SectionTitle
        text="The Team"
        className={cx("aboutPage_sectionTitle", "sectionTitle_theTeam")}
      ></SectionTitle>

      <div className="aboutPage_orgChartContainer">
        <OrgChartRow data={data.orgChartRows[0]} />
        <OrgChartRow data={data.orgChartRows[1]} />
        <OrgChartRow data={data.orgChartRows[1]} />
      </div>

      <SectionTitle
        text="The Space"
        className={cx("aboutPage_sectionTitle", "sectionTitle_theSpace")}
      ></SectionTitle>

      <ImageSlider images={data.imageSlider.images} imageWidth={750} />
    </Content>
  )
}

export default About
