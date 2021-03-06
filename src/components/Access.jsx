import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Access = () => {
  return (
    <div>
      <Container fluid="lg" className="h-100 px-4 py-4">
          <Row className="h-100 justify-content-center align-items-center">
            <Col sm={12} md={6}>
              <p className="text-dark display-3 fw-bolder">Unlimited Access to 100K tracks</p>
            </Col>
            <Col sm={12} md={6}>
              <p className="text-muted fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem ut nostrum ea earum culpa vero magnam? Nemo cupiditate magnam vel dolor fuga ea, adipisci optio consectetur veritatis, esse rerum!</p>
              <Button variant="danger" className="rounded-pill px-4 py-2">TRY IT NOW</Button>
            </Col>
          </Row>
      </Container>
    </div>
  )
}

export default Access