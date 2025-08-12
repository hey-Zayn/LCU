"use client";

import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PortfolioSection() {
  const portfolioItems = [
    {
      image:
        "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/664cacc3e1586266c21a5f7a_image%20388-p-800.png",
      title: "Automating People Operations",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      skills: ["CSS3", "Front-End Development", "Landing Page", "HTML5"],
      date: "Dec 4, 2023",
      media:
        "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/664cacc3e1586266c21a5f7a_image%20388-p-800.png",
      link: "https://example.com",
    },
    {
      image:
        "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/664cacc3e1586266c21a5f7a_image%20388-p-800.png",
      title: "Enhancing Digital Presence Dashboard  ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      skills: ["React", "JavaScript", "Digital Marketing"],
      date: "Nov 15, 2023",
      media:
        "https://plus.unsplash.com/premium_photo-1661290256778-3b821d52c514?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://example.com",
    },
    {
      image:
        "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/664cacc3e1586266c21a5f7a_image%20388-p-800.png",
      title: "Enhancing Digital Presence",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      skills: ["React", "JavaScript", "Digital Marketing"],
      date: "Nov 15, 2023",
      media:
        "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://example.com",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
          ...style, 
          display: "block", 
          zIndex: 30, 
          right: "25px",  
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
          ...style, 
          display: "block", 
          zIndex: 30, 
          left: "25px",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section className="portfolio-section bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-10 mb-10">
      <Container>
        <h1 className="portfolio-heading text-3xl md:text-4xl font-bold text-white text-center hover:text-[#00a5f8]">
          Our Portfolio
        </h1>

        <p className="portfolio-description text-gray-300 text-center mb-8 hover:text-[#00a5f8]">
          Our portfolio is a collection of our best work. We have worked with
          clients from all over the world and have helped them achieve their
          goals.
        </p>

        <Row className="portfolio-cards">
          {portfolioItems.map((item, index) => (
            <Col md={4} className="portfolio-card mb-6" key={index}>
              <div
                className="card-content bg-gray-700 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:bg-gray-600 transition duration-200"
                onClick={() => handleShowModal(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <h2 className="text-xl font-semibold text-white text-center mt-4">
                  {item.title}
                </h2>
                <p className="text-gray-300 text-center px-4">
                  {item.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {selectedProject && (
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          size="lg"
          centered
          className="md:h-[90vh] h-screen overflow-hidden rounded-lg"
        >
          <div className="bg-gray-800 text-white">
            <Modal.Header
              className="bg-gray-900 rounded-lg text-white"
              closeButton
              closeVariant="white"
            >
              <Modal.Title className="text-lg md:text-2xl font-bold">
                {selectedProject.title}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body className="md:max-w-[80vw] max-w-[95vw] md:max-h-[75vh] max-h-[85vh] overflow-y-auto scrollbar-hide">
              <Row>
                <Col
                  md={12}
                  className="relative top-0 bg-gray-800 p-4 md:sticky md:top-0"
                  style={{ zIndex: 1 }}
                >
                  <div className="slider-container">
                    <Slider {...settings}>
                      {/* <div>
          <CarouselVideo src="/office-work.mp4" Heading="No Magic. Just Logic." Data="Experienced developers, technical experts, and strategists delivering top-quality products."/>
        </div> */}
                      <div>
                      <img
                    src={selectedProject.media}
                    alt={selectedProject.title}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                      </div>
                      {/* <div>
          <CarouselVideo src="/office-work.mp4" Heading="No Magic. Just Logic." Data="Experienced developers, technical experts, and strategists delivering top-quality products."/>
        </div> */}
                      <div>
                      <img
                    src={selectedProject.media}
                    alt={selectedProject.title}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                      </div>
                      {/* <div>
          <CarouselVideo src="/office-work.mp4" Heading="No Magic. Just Logic." Data="Experienced developers, technical experts, and strategists delivering top-quality products."/>
        </div> */}
                      <div>
                      <img
                    src={selectedProject.media}
                    alt={selectedProject.title}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                      </div>
                    </Slider>
                  </div>
                  
                  <h5 className="text-xl font-semibold mb-2 mt-5">
                    Project Description
                  </h5>
                  <p className="text-gray-300 mb-4">
                    {selectedProject.description}
                  </p>

                  <h5 className="text-xl font-semibold mb-2">
                    Skills and Deliverables
                  </h5>
                  <ul className="list-disc list-inside mb-4">
                    {selectedProject.skills.map((skill, index) => (
                      <li key={index} className="text-gray-400">
                        {skill}
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-300 mb-4">
                    <strong>Published on:</strong> {selectedProject.date}
                  </p>
                  <p className="text-gray-300">
                    <strong>Link to site:</strong>{" "}
                    <p className="text-blue-400 hover:text-blue-500">
                      <strong>{selectedProject.link}</strong>
                    </p>
                  </p>
                </Col>
              </Row>
            </Modal.Body>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default PortfolioSection;
