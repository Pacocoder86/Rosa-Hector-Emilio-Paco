import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import homeOne from '../../assets/img/homeOne.jpg'
import homeTwo from '../../assets/img/homeTwo.jpg'
import homeThree from '../../assets/img/homeThree.jpg'
import Header from '../../components/Header/Header'
import perro from '../../assets/img/perro.jpg'
import mujerbolsa from '../../assets/img/mujerbolsa.jpg'
import te from '../../assets/img/te.jpg'
import calzado from '../../assets/img/calzado.jpg'
import kids2 from '../../assets/img/kids2.jpg'
import gucci from '../../assets/img/gucci.jpg'
import kids from '../../assets/img/kids.jpg'
import '../../components/ProductList/productlist.css'

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
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={homeTwo}
            alt='/'
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={homeThree}
            alt='/'
          />

        </Carousel.Item>
      </Carousel>

      <div className='main-container'>
        <Card className='card card-styles-inicio' style={{ width: '18rem' }}>
          <Card.Img variant='top' src={perro} alt='/' />
          <Card.Body>
            <Card.Title>Pets</Card.Title>
            <Card.Text>
              Some accesories for you pets to play everywhere.
            </Card.Text>
            <Button variant='primary'>Pets</Button>
          </Card.Body>
        </Card>

        <Card className='card card-styles-inicio' style={{ width: '18rem' }}>
          <Card.Img variant='top' src={mujerbolsa} alt='/' />
          <Card.Body>
            <Card.Title>Bags</Card.Title>
            <Card.Text>
              Some bags for you and your frieds.
            </Card.Text>
            <Button variant='primary'>Bags</Button>
          </Card.Body>
        </Card>

        <Card className='card card-styles-inicio' style={{ width: '18rem' }}>
          <Card.Img variant='top' src={te} alt='/' />
          <Card.Body>
            <Card.Title>Home & Decor</Card.Title>
            <Card.Text>
              All you need for your Home.
            </Card.Text>
            <Button variant='primary'>Home</Button>
          </Card.Body>
        </Card>

        <Card className='card card-styles-inicio' style={{ width: '18rem' }}>
          <Card.Img variant='top' src={calzado} alt='/' />
          <Card.Body>
            <Card.Title>Shoes</Card.Title>
            <Card.Text>
              All you need for your feet.
            </Card.Text>
            <Button variant='primary'>Shoes</Button>
          </Card.Body>
        </Card>

        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={kids2}
              alt='/'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={gucci}
              alt='/'
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={kids}
              alt='/'
            />

          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Inicio
