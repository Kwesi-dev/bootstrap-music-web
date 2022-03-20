import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
const Concepts = () => {
  return (
    <div className="vh-100">
        <Container fluid="lg" className="h-100 d-flex flex-column align-items-center justify-content-center">
            <Row className="align-items-center justify-content-center mb-5">
                <Col>
                    <header className="display-4 fw-bolder">Our Concepts & artists</header>
                </Col>
                <Col>
                    <p className="text-muted fs-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ab minima voluptate culpa, fugit maxime veritatis quaerat officia, quidem ipsum, voluptatibus sint consectetur harum eveniet quam? Repellat iusto sunt reiciendis.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <figure className="d-flex flex-column align-items-center">
                        <img src={image1} alt="img" className="img-fluid rounded-5" style={{borderRadius: 30}}/>
                        <figcaption>Soul Music</figcaption>
                    </figure>
                </Col>
                <Col>
                    <figure className="d-flex flex-column align-items-center">
                        <img src={image2} alt="img" className="img-fluid" style={{borderRadius: 30}}/>
                        <figcaption>Live Concerts</figcaption>
                    </figure>
                </Col>
                <Col>
                    <figure className="d-flex flex-column align-items-center">
                        <img src={image3} alt="img" className="img-fluid" style={{borderRadius: 30}}/>
                        <figcaption>Dj Sets</figcaption>
                    </figure>
                </Col>
                <Col>
                    <figure className="d-flex flex-column align-items-center">
                        <img src={image4} alt="img" className="img-fluid" style={{borderRadius: 30}}/>
                        <figcaption>Live Streams</figcaption>
                    </figure>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Concepts