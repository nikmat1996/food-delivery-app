import React from 'react'
import { connect } from 'react-redux'
import { Carousel } from "react-bootstrap";

function Home(props) {
    const { data, carouselData } = props
    return (
        <div className="container mt-3 p-3"><Carousel>{carouselData.map(item => (
            
                <Carousel.Item key={item.p}>
                    <img
                    className="d-block w-100"
                    src={item.img}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="text-white-50">{item.h3}</h3>
                    <p className="text-secondary">{item.p}</p>
                    </Carousel.Caption>
                </Carousel.Item>

            ))}
            </Carousel>
        </div>

    )
}

const mapStateToProps = state => ({
    data : state.data,
    carouselData: state.carouselData
})

export default connect(mapStateToProps,null)(Home)
