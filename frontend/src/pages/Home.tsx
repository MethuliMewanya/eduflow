//import React from 'react'

import { Container, Row, Col, Card } from "react-bootstrap";

import '../styles/Home.scss';
import { motion } from "framer-motion";
import { Link,NavLink } from "react-router-dom";
const Home = () => {
  return (
    <main>
        {/* <Header /> */}

         {/*Section 01 */}
            <section className="section-1">
            <div className="topic d-flex align-items-center">
                <div className="container-fluid">
                <div className="text-center">

                    <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    >
                    FIND YOUR  <br />
                    bla bla bla <br />
                    HERE!
                    </motion.h1>

                    <br />

                    <p style={{ fontSize: "19px", color: "#fff" }}>
                    Let EduFlow help you find the knowledge that's just right for you! <br />
                    </p>

                    <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#fff" }}>
                    Browse our .........................xxxx
                    </h2>

                    <NavLink to="/browse" className="btn btn-primary">
                    ABB
                    </NavLink>

                    <br />
                </div>
                </div>
            </div>
            </section>

            {/*section 2*/}
            <section className="explore-section">
            <Container>
                <h2 className="explore-title">Explore More</h2>
                <Row className="g-4">
                <Col md={4}>
                    <Link to="/services" className="text-decoration-none text-dark">
                    <Card className="box-services h-100 shadow-sm border-0 text-center">
                        <Card.Body>
                        <Card.Title>Discover videos</Card.Title>
                        <Card.Text>Discover what we offer to make you ....</Card.Text>
                        </Card.Body>
                    </Card>
                    </Link>
                </Col>
                <Col md={4}>
                    <Link to="/gallery" className="text-decoration-none text-dark">
                    <Card className="box-gallery h-100 shadow-sm border-0 text-center">
                        <Card.Body>
                        <Card.Title>Feedbacks</Card.Title>
                        <Card.Text>Take a look at our past  reviews</Card.Text>
                        </Card.Body>
                    </Card>
                    </Link>
                </Col>
                <Col md={4}>
                    <Link to="/contact" className="text-decoration-none text-dark">
                    <Card className="box-contact h-100 shadow-sm border-0 text-center">
                        <Card.Body>
                        <Card.Title>Contact Us</Card.Title>
                        <Card.Text>Have questions? Get in touch with our team today.</Card.Text>
                        </Card.Body>
                    </Card>
                    </Link>
                </Col>
                </Row>
            </Container>
            </section>

    </main>
  )
}

export default Home