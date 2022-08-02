import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const BootstrapComponents = () => {
  return (
    <div>
        <Container>
            <Row className='mt-5 justify-content-center'>
                <Col md={5} className="col-md-5 border">Hello</Col>
            </Row>
        </Container>
    </div>
  )
}

export default BootstrapComponents
