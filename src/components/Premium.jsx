import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.webp"
import img3 from "../assets/img3.webp"
import img4 from "../assets/img4.webp"
const Premium = () => {
  return (
    <div className="h-100 py-4">
        <Container fluid="lg" className="h-100 d-flex flex-column align-items-center justify-content-center">
            <Row className="mb-5">
                <Col sm={12} md={6}>
                    <header className="display-4 fw-bolder">Why go Premium</header>
                </Col>
                <Col sm={12} md={6}>
                    <p className="text-muted fs-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ab minima voluptate culpa, fugit maxime veritatis quaerat officia, quidem ipsum, voluptatibus sint consectetur harum eveniet quam? Repellat iusto sunt reiciendis.Saepe ab minima voluptate culpa, fugit maxime veritatis quaerat officia, quidem ipsum, voluptatibus sint consectetur harum eveniet quam? Repellat </p>
                </Col>
            </Row>
            <Row className="mt-5 w-100 d-flex justify-content-between">
                <Col sm={6} md={3}>
                    <figure className="d-flex flex-column align-items-center">
                        <img src={img1} alt="img" className="img-fluid rounded-circle"/>
                        <figcaption className="d-flex flex-column align-items-center">
                            <h3 className="h3">Download music</h3>
                            <p>sint consectetur</p>
                        </figcaption>
                    </figure>
                </Col>
                <Col sm={6} md={3}>
                    <figure className="d-flex flex-column align-items-center">
                        <img src={img2} alt="img" className="img-fluid rounded-circle"/>
                        <figcaption className="d-flex flex-column align-items-center">
                            <h3 className="h3">No ad interruptions</h3>
                            <p>sint consectetur</p>
                        </figcaption>
                    </figure>
                </Col>
                <Col sm={6} md={3}>
                    <figure className="d-flex flex-column align-items-center">
                        <img src={img3} alt="img" className="img-fluid rounded-circle"/>
                        <figcaption className="d-flex flex-column align-items-center">
                            <h3 className="h3">High quality</h3>
                            <p>sint consectetur</p>
                        </figcaption>
                    </figure>
                </Col>
                <Col sm={6} md={3}>
                    <figure className="d-flex flex-column align-items-center">
                        <img src={img4} alt="img" className="img-fluid rounded-circle"/>
                        <figcaption className="d-flex flex-column align-items-center">
                            <h3 className="h3">Listen Offline</h3>
                            <p>sint consectetur</p>
                        </figcaption>
                    </figure>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Premium