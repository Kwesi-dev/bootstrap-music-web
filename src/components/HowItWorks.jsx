import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import background from "../assets/how-to-bg.jpg"
const HowItWorks = () => {
  return (
    <div style={{backgroundImage: `url(${background})`, height: "100vh"}}>
        <Container fluid="lg" className="pt-5">
            <header className="text-white display-4 fw-bolder pt-5">How it works</header>
            <Row className="mt-5 pt-5">
                <Col>
                    <div style={{width: 50, height: 50, borderRadius: "50%", backgroundColor: "crimson"}}></div>
                    <h2 className=" h2 mt-3 text-white">Create an account</h2>
                    <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolores consequatur, aliquam veniam perferendis ducimus nesciunt delectus fugit! Veniam eos itaque quod facilis voluptate deserunt laborum. Consectetur quam ab saepe!</p>
                </Col>
                <Col>
                    <div style={{width: 50, height: 50, borderRadius: "50%", backgroundColor: "crimson"}}></div>
                    <h2 className=" h2 mt-3 text-white">Choose a plan</h2>
                    <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolores consequatur, aliquam veniam perferendis ducimus nesciunt delectus fugit! Veniam eos itaque quod facilis voluptate deserunt laborum. Consectetur quam ab saepe!</p>
                </Col>
                <Col>
                    <div style={{width: 50, height: 50, borderRadius: "50%", backgroundColor: "crimson"}}></div>
                    <h2 className=" h2 mt-3 text-white">Download a music</h2>
                    <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolores consequatur, aliquam veniam perferendis ducimus nesciunt delectus fugit! Veniam eos itaque quod facilis voluptate deserunt laborum. Consectetur quam ab saepe!</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HowItWorks