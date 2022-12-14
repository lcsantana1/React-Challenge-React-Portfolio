import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import portfolioImage from '../assets/self.png'

export default function About() {
    return (
        <Container>
            <h1>About</h1>
            <Row>
                <Col>
                    <img src={portfolioImage} alt='laura' width={300} />
                </Col>
                <Col>
                    <p>Hello, welcome to my portfolio! My name is Laura Santana, I am currently enrolled in the U of U Full Stack Web Developer bootcamp. Currently we are learning the React technology, I am excited to continue learning and hoping to join a web developing team in the future!</p>
                </Col>
            </Row>

        </Container>
    )
}