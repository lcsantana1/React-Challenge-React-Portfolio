import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <Container>
            <h1>About ME</h1>
            <Row>
                <Col>
                    <img src="https://lcsantana1.github.io/first-challenge-hw/" alt='laura' width={75} />
                </Col>
                <Col>
                    <p>I am a person who codes</p>
                    <p>I am exhausted!</p>
                </Col>
            </Row>

        </Container>
    )
}