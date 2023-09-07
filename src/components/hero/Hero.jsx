import React, { useState } from "react";
import Modal from "react-modal";
import heroImgMobile from "../../../public/assets/img/hero/hero300x300.png";
import cancelImg from "../../../public/assets/img/cancel.svg";
import AboutMain from "../about";
import Image from "next/image";

const heroContent = {
  heroImage: "/assets/img/hero/hero746x1020.png",
  heroMobileImage: heroImgMobile,
  heroTitleName: "Apiwat Paenyoi",
  heroDesignation: "Full Stack DEv.",
  heroDescriptions: `สิ่งที่ทำได้ดีที่สุดในชีวิตคือการกินเเละนอน เเละ น้ำหนักกำลังจะเเตะ 100 KG ครับ ;).`,
  heroBtn: "อ",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{ backgroundImage: `url(${heroContent.heroImage})` }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <Image
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            // style={{width:'100%',height:'100%'}}
            />
            <h1 className="text-uppercase poppins-font">
              {heroContent.heroTitleName}
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>


            <div className="social-icons-container d-flex  d-none d-lg-block">
              <div className="row ">
                <div className="col-auto">
                  <a href="https://www.facebook.com/Aphiwat.Paenyoi/" className="mx-2">
                    <div className="social-icon fa fa-facebook"></div>
                  </a>
                </div>
                <div className="col-auto">
                  <a href="mailto:apiwat.paen@gmail.com" className="mx-2">
                    <div className="social-icon fa fa-envelope"></div>
                  </a>
                </div>
                <div className="col-auto">
                  <a href="tel:+66626419124" className="mx-2">
                    <div className="social-icon fa fa-phone"></div>
                  </a>
                </div>
                <div className="col-auto">
                <a href="https://github.com/apiwat59" className="mx-2">
                <div className="social-icon fa fa-github"></div>
              </a>
                </div>
              </div>
            </div>

            <div className="social-icons-container d-sm-flex d-lg-none justify-content-center">
              <a href="https://www.facebook.com/Aphiwat.Paenyoi/" className="mx-2">
                <div className="social-icon fa fa-facebook"></div>
              </a>
              <a href="mailto:apiwat.paen@gmail.com" className="mx-2">
                <div className="social-icon fa fa-envelope"></div>
              </a>
              <a href="tel:+66626419124" className="mx-2">
                <div className="social-icon fa fa-phone"></div>
              </a>
              <a href="https://github.com/apiwat59" className="mx-2">
                <div className="social-icon fa fa-github"></div>
              </a>
            </div>


            {/*
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
            */}

          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <Image src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-start text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <AboutMain />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
