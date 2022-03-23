import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import background from "../assets/how-to-bg.jpg"
import icon1 from "../assets/icon1.webp"
import icon2 from "../assets/icon2.webp"
import icon3 from "../assets/icon3.webp"
const HowItWorks = () => {
  return (
    <div style={{backgroundImage: `url(${background})`, height: "100%"}}>
        <Container fluid="lg" className="py-5 px-4">
            <header className="text-white display-4 fw-bolder pt-5">How it works</header>
            <Row className="mt-5 pt-5">
                <Col sm={12} md={4}>
                    <div style={{width: 50, height: 50, borderRadius: "50%", backgroundColor: "crimson"}} className="mb-5">
                        <img src={icon2} alt="icon2" className="img-fluid ms-4 mt-3"/>
                    </div>
                    <h2 className=" h2 mt-3 text-white">Create an account</h2>
                    <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolores consequatur, aliquam veniam perferendis ducimus nesciunt delectus fugit! Veniam eos itaque quod facilis voluptate deserunt laborum. Consectetur quam ab saepe!</p>
                </Col>
                <Col sm={12} md={4}>
                    <div style={{width: 50, height: 50, borderRadius: "50%", backgroundColor: "crimson"}} className="mb-5">
                        <img src={icon3} alt="icon" className="img-fluid ms-4 mt-3"/>
                    </div>
                    <h2 className=" h2 mt-3 text-white">Choose a plan</h2>
                    <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolores consequatur, aliquam veniam perferendis ducimus nesciunt delectus fugit! Veniam eos itaque quod facilis voluptate deserunt laborum. Consectetur quam ab saepe!</p>
                </Col>
                <Col sm={12} md={4}>
                    <div style={{width: 50, height: 50, borderRadius: "50%", backgroundColor: "crimson"}} className="mb-5">
                        <img src={icon1} alt="icon" className="img-fluid ms-4 mt-3"/>
                    </div>
                    <h2 className=" h2 mt-3 text-white">Download a music</h2>
                    <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolores consequatur, aliquam veniam perferendis ducimus nesciunt delectus fugit! Veniam eos itaque quod facilis voluptate deserunt laborum. Consectetur quam ab saepe!</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HowItWorks