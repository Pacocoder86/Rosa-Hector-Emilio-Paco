import Carousel from 'react-bootstrap/Carousel'
import homeOne from '../../assets/img/homeOne.jpg'
import homeTwo from '../../assets/img/homeTwo.jpg'
import homeThree from '../../assets/img/homeThree.jpg'
import Header from '../../components/Header/Header'

function Inicio() {
  return (
    <>
      <Header />
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={homeOne}
            alt='/'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={homeTwo}
            alt='/'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={homeThree}
            alt='/'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Inicio
