import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectImage from '../assets/projectone.png'
import projectTwoImage from '../assets/projecttwo.png'


export default function Portfolio() {
    return (
        <Container>
            <h1>My Projects</h1>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={projectImage}/>
                        <Card.Body>
                            <Card.Title>Recipe Finder</Card.Title>
                            <Card.Text>
                            This website was a collaboration project to create a recipe website and SQL database that allows users to browse, post, and search for recipes create by a community of users.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            <Button variant="primary">Go somewhere else</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <Button variant="primary">Go somewhere else</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {projectTwoImage} />
                    <Card.Body>
                        <Card.Title>Weather Dashboard</Card.Title>
                        <Card.Text>
                        Welcome to the Weather Dashboard, in this application, the user will be able to look up different cities and see a five-day forecast that will include temperature, humidity, and the wind speed. Using the search bar, the user is also able to look up different cities and get updated five-day forecast for that city.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <Button variant="primary">Go somewhere else</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <Button variant="primary">Go somewhere else</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}