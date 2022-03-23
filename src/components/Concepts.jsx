import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
const Concepts = () => {
  return (
    <div className="p-5">
        <Container fluid="lg" className="h-100 d-flex flex-column align-items-center justify-content-center">
            <Row className="align-items-center justify-content-center mb-5">
                <Col sm={12} md={6}>
                    <header className="display-4 fw-bolder">Our Concepts & artists</header>
                </Col>
                <Col sm={12} md={6}>
                    <p className="text-muted fs-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ab minima voluptate culpa, fugit maxime veritatis quaerat officia, quidem ipsum, voluptatibus sint consectetur harum eveniet quam? Repellat iusto sunt reiciendis.</p>
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={3}>
                    <figure className="d-flex flex-column align-items-center">
                        <img src={image1} alt="img" className="img-fluid rounded-5" style={{borderRadius: 30}}/>
                        <figcaption className="fw-bold mt-2 text-dark">Soul Music</figcaption>
                    </figure>
                </Col>
                <Col sm={6} md={3}>
                    <figure className="d-flex flex-column align-items-center">
                        <img src={image2} alt="img" className="img-fluid" style={{borderRadius: 30}}/>
                        <figcaption className="fw-bold mt-2 text-dark">Live Concerts</figcaption>
                    </figure>
                </Col>
                <Col sm={6} md={3}>
                    <figure className="d-flex flex-column align-items-center">
                        <img src={image3} alt="img" className="img-fluid" style={{borderRadius: 30}}/>
                        <figcaption className="fw-bold mt-2 text-dark">Dj Sets</figcaption>
                    </figure>
                </Col>
                <Col sm={6} md={3}>
                    <figure className="d-flex flex-column align-items-center">
                        <img src={image4} alt="img" className="img-fluid" style={{borderRadius: 30}}/>
                        <figcaption className="fw-bold mt-2 text-dark">Live Streams</figcaption>
                    </figure>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Concepts