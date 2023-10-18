import React, { useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Hero from "../components/hero/Hero";
import AboutMain from "../components/about";
import Wrapper from "../layout/wrapper";
import SEO from "../components/Seo";
import Portfolio from "../components/portfolio/Portfolio";
import Address from "../components/Address";
import Social from "../components/Social";
import Contact from "../components/Contact";
import Blog from "../components/blog/Blog";
import SwitchDark from "../components/switch/SwitchDark";


{/*{ icon: "fa-user", menuName: "About" },
  
{ icon: "fa-comments", menuName: "Blog" }, */}
const menuItem = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-briefcase", menuName: "Project" },
  { icon: "fa-envelope-open", menuName: "Contact" },
  
];

const HomeDark = () => {
  useEffect(() => {
    document.querySelector("body").classList.remove("rtl");
  }, []);
  return (
    <Wrapper>
      <SEO pageTitle={"GazDev System"} />

      <div className="yellow">
        <SwitchDark />

        <Tabs>
          <div className="header">
            <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
              {menuItem.map((item, i) => (
                <Tab className="icon-box" key={i}>
                  <i className={`fa ${item.icon}`}></i>
                  <h2>{item.menuName}</h2>
                </Tab>
              ))}
            </TabList>
          </div>

          <div className="tab-panel_list">
            <TabPanel className="home ">
              <div
                className="container-fluid main-container container-home p-0 g-0"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="color-block d-none d-lg-block"></div>
                <Hero />
              </div>
            </TabPanel>


            <TabPanel className="portfolio professional">
              <div
                className="title-section text-start text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  my <span>project</span>
                </h1>
                <span className="title-bg">works</span>
              </div>
              <Portfolio />
            </TabPanel> 

            <TabPanel className="contact">
              <div
                className="title-section text-start text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  get in <span>touch</span>
                </h1>
                <span className="title-bg">contact</span>
              </div>
              <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                      ติดต่อได้ 24 ชม.
                    </h3>
                    <p className="open-sans-font mb-4">
                      จะรีบตอบกลับให้ไวที่สุดครับ เเต่ถ้าด่วนมากโทรได้เลยครับ
                    </p>
                    <Address />

                    <Social />
                  </div>

                  <div className="col-12 col-lg-8">
                    <Contact />
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* <TabPanel className="blog">
              <div
                className="title-section text-start text-sm-center "
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  my <span>blog</span>
                </h1>
                <span className="title-bg">posts</span>
              </div>
              <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="row pb-50">
                  <Blog />
                </div>
              </div>
            </TabPanel> */}
          </div>
        </Tabs>
      </div>
    </Wrapper>
  );
};

export default HomeDark;
