import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import pinterest from "../assets/pinterest.svg"
import youtube from "../assets/youtube.svg"
const Footer = () => {
  return (
    <div className="h-100 w-100 bg-dark py-3">
        <Container fluid="lg" className="h-100 w-100 d-flex align-items-center justify-content-center">
            <Row className="h-100 w-100 justify-content-center align-items-center">
                <Col sm={12} md={6} lassName="mx-auto">
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
                <Col sm={4} md={2}>
                    <h3 className="h5 text-white mt-4">ABOUT US</h3>
                    <section className="d-flex flex-column">
                        <span className="text-muted">Our Story</span>
                        <span className="text-muted">Sol Music Blog</span>
                        <span className="text-muted">History</span>
                    </section>
                </Col>
                <Col sm={4} md={2}>
                    <h3 className="h5 text-white mt-5">PRODUCTS</h3>
                    <section className="d-flex flex-column">
                        <span className="text-muted">Music</span>
                        <span className="text-muted">Subscription</span>
                        <span className="text-muted">Custom Music</span>
                        <span className="text-muted">Footage</span>
                    </section>
                </Col>
                <Col sm={4} md={2}>
                    <h3 className=" h5 text-white mt-5">PLAYLISTS</h3>
                    <section className="d-flex flex-column">
                        <span className="text-muted">Newsletter</span>
                        <span className="text-muted">Careers</span>
                        <span className="text-muted">Press</span>
                        <span className="text-muted">Contact</span>
                    </section>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer