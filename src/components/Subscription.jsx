import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import mark from "../assets/mark.webp"
const Subscription = () => {
  return (
    <div className="vh-100 bg-dark">
        <Container className="h-100">
            <Row className="h-100 justify-content-center align-items-center">
                <Col>
                    <header>
                        <h1 className="display-2 text-white ">Subscription</h1>
                        <h1 className="display-2 text-white ">from $15/month</h1>
                        <h3 className="h3 text-danger">Start a free trial now</h3>
                    </header>
                    <p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat enim sint veritatis omnis labore temporibus eaque quis maiores veniam, non, dignissimos impedit nobis necessitatibus nostrum? Eius obcaecati mollitia laboriosam dolorum?</p>
                    <Button size="lg" variant="danger" className="rounded-pill mt-4">TRY IT NOW</Button> 
                </Col>
                <Col className="bg-info d-flex justify-content-center" style={{width: "100%", height: "65vh", borderRadius: 30}}>
                    <ul className="my-5 d-flex flex-column justify-content-between list-unstyled">
                        <li className="d-flex align-items-center">
                            <img src={mark} alt="mark" className="img-fluid me-2"/>
                            <span className="text-white fs-5">Play any track</span>
                        </li>
                        <li d-flex align-items-center>
                            <img src={mark} alt="mark" className="img-fluid me-2"/>
                            <span className="text-white fs-5">Listen offline</span>
                        </li>
                        <li d-flex align-items-center>
                            <img src={mark} alt="mark" className="img-fluid me-2"/>
                            <span className="text-white fs-5">No ad interruption</span>
                        </li>
                        <li d-flex align-items-center>
                            <img src={mark} alt="mark" className="img-fluid me-2"/>
                            <span className="text-white fs-5">Unlimited skips</span>
                        </li>
                        <li d-flex align-items-center>
                            <img src={mark} alt="mark" className="img-fluid me-2"/>
                            <span className="text-white fs-5">High quality audio</span>
                        </li>
                        <li d-flex align-items-center>
                            <img src={mark} alt="mark"  className="img-fluid me-2"/>
                            <span className="d-inline-block text-white fs-5">Shuffle audio</span>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container> 
    </div>
  )
}

export default Subscription