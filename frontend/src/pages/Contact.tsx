//import React from 'react'
import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero text-light">
        <Container>
          <Row className="align-items-center">
            {/* Left Side - Image */}
            <Col md={6} className="hero-image d-flex align-items-center justify-content-center">
              <h1 className="hero-text text-light">Contact Us</h1>
            </Col>

            {/* Right Side - Form */}
            <Col md={6} >
              <Card className="contact-card">
                <Card.Body>
                  <h3 className="fw-bold mb-4">Send us a Message</h3>
                  <Form>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Write your message here..."
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Info Below */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="contact-info text-center">
              <Card.Body>
                <h3 className="fw-bold mb-4">Reach Us At</h3>
                <p>
                  📍 <strong>Address:</strong> 123, Gangodawila, Nugegoda, Colombo, Sri Lanka.
                </p>
                <p>📞 <strong>Phone:</strong> +94 77 123 4567</p>
                <p>📧 <strong>Email:</strong> mavericksssquad@gmail.com</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;