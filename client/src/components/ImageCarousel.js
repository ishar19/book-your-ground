import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function ImageCarousel() {
    return (
        <Carousel className="mx-auto" fade style={{width:"60%", height: "50%"}}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/kEHp1gUJNO8"
                    alt="Cricket Stadium"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/yoIt3Wxe0sI"
                    alt="Badminton Court"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/J_tbkGWxCH0"
                    alt="Basketball Court"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageCarousel;