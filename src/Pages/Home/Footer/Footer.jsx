import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <Row className="text-white">
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Practices</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">For Patients</NavLink>
                                <NavLink className="footer-link">FAQ's</NavLink>
                                <NavLink className="footer-link">About</NavLink>
                                <NavLink className="footer-link">Contact Us</NavLink>
                                <NavLink className="footer-link">Blog</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Resources</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">New Patients</NavLink>
                                <NavLink className="footer-link">Meet My Team</NavLink>
                                <NavLink className="footer-link">Patient Form</NavLink>
                                <NavLink className="footer-link">Insurance Option</NavLink>
                                <NavLink className="footer-link">Account Login</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Services</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Dental Dictionary</NavLink>
                                <NavLink className="footer-link">Dental Sealands</NavLink>
                                <NavLink className="footer-link">Dental Implants</NavLink>
                                <NavLink className="footer-link">General Dentistry</NavLink>
                                <NavLink className="footer-link">Sedation Dentistry</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Our Address</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Lovely Professional University</NavLink>
                                <NavLink className="footer-link">Phagwara, Punjab</NavLink>
                                <NavLink className="footer-link">Phone:+91 9999999999</NavLink>
                                <NavLink className="footer-link">Email:dhubphagwara@gmail.com</NavLink>
                                <NavLink className="footer-link">Fax:+1 234 5678 901</NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copy-right text-center text-white">
                <p className='mb-0'>&copy; 2023 - <span className="developer">Ankit Kumar</span> | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;