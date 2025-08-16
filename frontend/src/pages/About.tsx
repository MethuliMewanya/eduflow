import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/About.scss"; 

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero text-center text-light">
        <Container>
          <h1 className="fw-bold">About Us</h1>
          <p className="lead">
            We are <strong>EduFlow !</strong> 
          </p>
        </Container>
      </section>

      {/* Project Section */}
      <Container className="my-5">
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <Card className="about-card">
              <Card.Body>
                <h2>What is EduFlow?</h2>
                <p>
                  EduFlow is an innovative web project designed to{" "}
                  <strong>recommend learning videos</strong> tailored to your{" "}
                  <strong>subject marks</strong>.  
                </p>
                <p>
                  It helps students <em>learn smarter</em> by matching their
                  level with the right educational content.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Mission Section */}
      <section className="about-mission py-5 text-center text-light">
        <Container>
          <h2 className="fw-bold">Our Mission</h2>
          <p className="mt-3 fs-5">
            To make learning <span className="highlight">personalized</span>,
            <span className="highlight"> effective</span>, and
            <span className="highlight"> enjoyable</span> for every student .
          </p>
        </Container>
      </section>

      {/* Team Section */}
      <Container className="my-5 text-center">
        <h2 className="fw-bold mb-4">Meet the Mavericks</h2>
        <Row className="justify-content-center">
          <Col md={3}>
            <Card className="team-card">
              {/* <Card.Img
                variant="top"
                // src="https://via.placeholder.com/300"
                alt="Team Member"
              /> */}
              <Card.Body>
                <h5 className="fw-bold">Methuli Mewanya</h5>
                <p className="text-muted">mmmm@gmail.com</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="team-card">
              {/* <Card.Img
                variant="top"
                // src="https://via.placeholder.com/300"
                alt="Team Member"
              /> */}
              <Card.Body>
                <h5 className="fw-bold">Belani Jayasinghe</h5>
                <p className="text-muted">aaa@gmail.com</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="team-card">
              {/* <Card.Img
                variant="top"
                // src="https://via.placeholder.com/300"
                alt="Team Member"
              /> */}
              <Card.Body>
                <h5 className="fw-bold">Hansani Danushika</h5>
                <p className="text-muted">ddd@gmail.com</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="team-card">
              {/* <Card.Img
                variant="top"
                // src="https://via.placeholder.com/300"
                alt="Team Member"
              /> */}
              <Card.Body>
                <h5 className="fw-bold">Nethmi Hirunika</h5>
                <p className="text-muted">nethmihirunika425@gmail.com</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;