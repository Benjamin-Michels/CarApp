import Carousel from 'react-bootstrap/Carousel';

const carousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='CarouselSize' src='https://www.freewebheaders.com/wp-content/gallery/cars/blue-bmw-alpina-b6-xdrive-gran-coupe-car-web-header.jpg' fluid />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='CarouselSize' src='https://www.freewpheaders.com/wp-content/gallery/cars/assorted-models-of-chevrolet-car-website-header.jpg' fluid />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='CarouselSize' src='https://www.freewebheaders.com/wp-content/gallery/artistic-abstract/red-abstract-cubes-digital-art-web-header.jpg' fluid />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carousel;