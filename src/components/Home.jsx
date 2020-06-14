import React from 'react'
import { connect } from 'react-redux'
import { Carousel, Card, ListGroup,
         ListGroupItem, Button, Badge,
         Container, Col, Row } from "react-bootstrap";

function Home(props) {
    const { data, carouselData } = props
    return (
        <Container>
            
            <Carousel>
                {carouselData.map(item => (
                
                    <Carousel.Item key={item.p}>
                        <img
                        className="d-block w-100"
                        src={item.img}
                        alt="fruits"
                        />
                        <Carousel.Caption>
                        <h3 className="text-white-50">{item.h3}</h3>
                        <p className="text-secondary">{item.p}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                ))}
            </Carousel>

            
            <Row>
                {data.map(item => (
                <Col xs={12} md={6} lg={4} className="p-2 mr-0">
                    <Card className="" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    
                        <ListGroup className="list-group-flush text-center">
                        <ListGroupItem>{item.food_name.toUpperCase()}<Badge className="ml-2" variant="secondary">{item.rating}<i className="fas fa-star ml-1"></i></Badge></ListGroupItem>
                        <ListGroupItem>Rs {item.price}</ListGroupItem>
                    
                        </ListGroup>
                        <Card.Body>
                        <Button className="mr-3 text-"variant="secondary">Add to Cart</Button>
                        <Card.Link className="ml-auto"href="#">Show Restaurant</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
           
        </Container>

    )
}

const mapStateToProps = state => ({
    data : state.data,
    carouselData: state.carouselData
})

export default connect(mapStateToProps,null)(Home)
