import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import pinterest from "../assets/pinterest.svg"
import youtube from "../assets/youtube.svg"
const Footer = () => {
  return (
    <div className="bg-dark" style={{height: "50vh"}}>
        <Container fluid="lg" className="h-100">
            <Row className="h-100 justify-content-center align-items-center">
                <Col xl="6">
                    <header>
                        <h3 className="h3 text-white"><strong className="text-danger">SOL</strong>MUSIC</h3>
                    </header>
                    <p className="text-muted fs-6">COPYRIGHT&copy; ALL RIGHTS RESERVED By KwesiDev</p>
                    <section className="w-50 d-flex justify-content-between">
                        <img src={facebook} alt="facebook icon" />
                        <img src={instagram} alt="instagram icon" />
                        <img src={pinterest} alt="pinterest icon" />
                        <img src={youtube} alt="youtube icon" />
                        <img src={twitter} alt="twitter icon" />
                    </section>
                </Col>
                <Col xl="2">
                    <h3 className="h5 text-white mt-4">ABOUT US</h3>
                    <ul style={{listStyleType: "none"}}>
                        <li className="text-muted">Our Story</li>
                        <li className="text-muted">Sol Music Blog</li>
                        <li className="text-muted">History</li>
                    </ul>
                </Col>
                <Col xl="2">
                    <h3 className="h5 text-white mt-5">PRODUCTS</h3>
                    <ul style={{listStyleType: "none"}}>
                        <li className="text-muted">Music</li>
                        <li className="text-muted">Subscription</li>
                        <li className="text-muted">Custom Music</li>
                        <li className="text-muted">Footage</li>
                    </ul>
                </Col>
                <Col xl="2">
                    <h3 className=" h5 text-white mt-5">PLAYLISTS</h3>
                    <ul className="me-5" style={{listStyleType: "none"}}>
                        <li className="text-muted">Newsletter</li>
                        <li className="text-muted">Careers</li>
                        <li className="text-muted">Press</li>
                        <li className="text-muted">Contact</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer