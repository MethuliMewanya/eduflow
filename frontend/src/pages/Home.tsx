//import React from 'react'

import { Container, Row, Col, Card } from "react-bootstrap";

import '../styles/Home.scss';
import { motion } from "framer-motion";
import { Link,NavLink } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:9191/recommend/video', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subject, marks: parseInt(marks) }),
    });

    const data = await res.json();
    navigate('/results', { state: { subject, ...data } });
  };
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
                    Unlock Potential  <br />
                    Unleash Success! <br />
                    
                    </motion.h1>

                    <br />

                    <p style={{ fontSize: "19px", color: "#fff" }}>
                    Let EduFlow help you find the knowledge that's just right for you! <br />
                    </p>

                    <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#fff" }}>
                    Browse our EduFlow store now!
                    </h2>

                    {/* <NavLink to="/browse" className="btn btn-primary">
                    ABB
                    </NavLink> */}

                    <br />
                </div>
                </div>
            </div>
            </section>


             {/*section 2*/}
             <div className="video-recommendation">
            <h2 className="video-recommendation__title">🎓 Get Video Recommendations here</h2>

            <div className="video-recommendation__group">
                <label className="video-recommendation__label">Subject</label>
                <input
                type="text"
                className="video-recommendation__input"
                placeholder="Ex: Math / Hydrolics"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                />
            </div>

            <div className="video-recommendation__group">
                <label className="video-recommendation__label">Marks</label>
                <input
                type="number"
                className="video-recommendation__input"
                placeholder="Enter your marks"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                />
            </div>

            <button className="video-recommendation__button" onClick={handleSubmit}>
                Get Recommendations
            </button>
            </div>

            {/*section 3*/}
            <section className="explore-section">
            <Container>
                <h2 className="explore-title">Explore More</h2>
                <Row className="g-4">
                <Col md={4}>
                    <Link to="/about" className="text-decoration-none text-dark">
                    <Card className="box-services h-100 shadow-sm border-0 text-center">
                        <Card.Body>
                        <Card.Title>About Us</Card.Title>
                        <Card.Text>Search about us.</Card.Text>
                        </Card.Body>
                    </Card>
                    </Link>
                </Col>
                <Col md={4}>
                    <Link to="/feedback" className="text-decoration-none text-dark">
                    <Card className="box-gallery h-100 shadow-sm border-0 text-center">
                        <Card.Body>
                        <Card.Title>Feedbacks</Card.Title>
                        <Card.Text>Send your feedbacks here</Card.Text>
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