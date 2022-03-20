import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
const Footer = () => {
  return (
    <div className="bg-dark" style={{height: "50vh"}}>
        <Container fluid="lg" className="h-100">
            <Row className="h-100 justify-content-center align-items-center">
                <Col>
                    <header>
                        <h3 className="h3 text-white"><strong className="text-danger">SOL</strong>MUSIC</h3>
                    </header>
                    <p className="text-muted fs-6">COPYRIGHT&copy; ALL RIGHTS RESERVED By KwesiDev</p>
                </Col>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer