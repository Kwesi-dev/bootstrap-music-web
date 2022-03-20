import React from 'react'
import { Container, Row, Col, Button, Stack} from 'react-bootstrap'
import HomeImg from "../assets/download.jpg"
const Home = () => {
  return (
    <div className="w-100" style={{backgroundColor: "black"}}>
        <Container fluid="lg" style={{height: "80vh"}}>
            <Row className="h-100 align-items-center justify-content-center">
              <Col>
                <section>
                  <p className='display-1 text-white'><strong className="text-danger me-2">Listen</strong>to</p>
                  <p className='display-1 text-white'>new music.</p>
                  <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio delectus possimus vel repellat hic tempore laboriosam, dicta in enim dolore rem eveniet.</p>
                  <Stack direction='horizontal' gap={3}>
                    <Button size='lg' variant="danger" className="px-5 py-3 rounded-pill">Download now</Button>
                    <Button size='lg' variant="info" className="px-5 py-3 rounded-pill">Start free trial</Button>
                  </Stack>
                </section>
              </Col>
              <Col>
                <figure>
                  <img src={HomeImg} alt="home" className='img-fluid'/>
                  <figcaption></figcaption>
                </figure>
              </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home