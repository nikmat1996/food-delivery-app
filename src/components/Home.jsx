import React from 'react'
import { connect } from 'react-redux'
import { Carousel, Card, ListGroup,
         ListGroupItem, Button, Badge,
         Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToCart } from '../redux/action'
import "./Home.css"

function Home(props) {
    const { data, carouselData, addToCart, selected } = props
    console.log(props)
    return (
        <Container>
            
            <Carousel className="mt-3 mb-3">
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
                <Col key={item.id} xs={12} md={6} lg={4} className=" p-2 mr-0">
                    <Card className=" productCard" style={{ width: '21rem' }}>
                        <Card.Img variant="top" src={item.img} />
                        <ListGroup className="list-group-flush text-center">
                        <ListGroupItem>{item.food_name.toUpperCase()}
                            <Badge className="ml-2" variant="secondary">{item.rating}
                                <i className="far fa-star ml-1"></i>
                            </Badge>
                        </ListGroupItem>
                        <ListGroupItem><i className="fas fa-rupee-sign"></i> {item.price}</ListGroupItem>
                        </ListGroup>
                        <Card.Body className="px-0 text-center">
                        <Button className={selected[item.id] ? "bg-danger mr-3":"mr-3"}variant="secondary" onClick={()=>addToCart(item.id)}>{selected[item.id] ? `Added + ${selected[item.id]}`: "Add to Cart"}</Button>
                            <Link className="ml-auto text-danger" to={`/${item.restaurant_name}`}>{item.restaurant_name.toUpperCase()}</Link>
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
    carouselData: state.carouselData,
    selected: state.selected
})
const mapDispatchToProps = dispatch =>({
    addToCart: (payload) => dispatch(addToCart(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
