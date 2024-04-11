import React, { useState } from 'react';
import { Carousel, Container, Overlay, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './ImageSlider.css'; // You can create this file for custom styles

const images = [
  { src: 'https://cdn.pixabay.com/photo/2023/04/26/09/23/dry-cleaning-7951977_1280.jpg', caption: 'Slide 1' },
  { src: 'https://img.freepik.com/premium-photo/front-view-pile-laundry_23-2148387001.jpg', caption: 'Slide 2' },
  { src: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63c2cb467a3af1001d16961f.png', caption: 'Slide 3' }
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{width:"70vw",height:"50vh",margin:"0px 0px"}}>
    <Container>
      <Row>
        <Col>
          <Carousel style={{width:"100vw",height:"50vh"}} activeIndex={index} onSelect={handleSelect} interval={2000}>
            {images.map((image, idx) => (
              
              <Carousel.Item key={idx}>
                <img
                style={{width:"100%",height:"50vh"}}
                  className="d-block w-100"
                  src={image.src}
                  alt={`Slide ${idx}`}
                />
                <Overlay 
                  className="carousel-overlay"
                  onClick={() => console.log(`Clicked on slide ${idx + 1}`)}
                >
                  <Carousel.Caption>
                    <h3>{image.caption}</h3>
                  </Carousel.Caption>
                </Overlay>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ImageSlider;
