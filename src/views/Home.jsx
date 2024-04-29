import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import barbell1 from "../assets/barbell1.png";
import barbell2 from "../assets/barbell2.png";
import barbell3 from "../assets/barbell3.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import card7 from "../assets/card7.png";
import solo1 from "../assets/solo1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import backgroundImage from "../assets/solo1.png";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Container fluid style={{ padding: "0", margin: "0" }}>
        <Carousel style={{ padding: "0", margin: "0" }}>
          <Carousel.Item style={{ padding: "0" }}>
            <img src={barbell1} className="d-block w-100" />
            <Carousel.Caption style={{ marginBottom: "250px" }}>
              <h1>Move. Sweat. Thrive. Fitness fuels life.</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={barbell2} className="d-block w-100" />
            <Carousel.Caption style={{ marginBottom: "250px" }}>
              <h1>
                Every healthy choice is a step towards a brighter, stronger you.
                Keep going!
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={barbell3} className="d-block w-100" />
            <Carousel.Caption style={{ marginBottom: "250px" }}>
              <h1>
                Small steps, big impact. Your health journey starts with each
                positive choice. Keep pushing forward!
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container fluid style={{ padding: "0" }}>
        <Row>
          <Col style={{ padding: "0" }}>
            <Card style={{ width: "100%", position: "relative", margin: "0" }}>
              <Card.Img variant="top" src={card1} />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "white",
                  width: "100%",
                }}
              >
                <Card.Title>Flexibility & Mobility</Card.Title>
                <Card.Text>
                  Flexibility and mobility workouts are essential for
                  maintaining overall physical and mental health. Can also help
                  prevent injuries.
                </Card.Text>
                <Button
                  as={Link}
                  to="/flexibility"
                  variant="primary"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    transition: "0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#fff";
                  }}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          </Col>
          <Col style={{ padding: "0" }}>
            <Card
              style={{
                width: "100%",
                position: "relative",
                top: "0",
                right: "0",
              }}
            >
              <Card.Img variant="top" src={card2} />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "white",
                  width: "100%",
                }}
              >
                <Card.Title>Training</Card.Title>
                <Card.Text>
                  A structured physical workout regimen aimed at improving
                  strength, endurance, flexibility, and overall fitness.
                </Card.Text>
                <Button
                  as={Link}
                  to="/training"
                  variant="primary"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    transition: "0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#fff";
                  }}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          </Col>
          <Col style={{ padding: "0" }}>
            <Card style={{ width: "100%", position: "relative" }}>
              <Card.Img variant="top" src={card3} />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "white",
                  width: "100%",
                }}
              >
                <Card.Title>Sports & Nutrition</Card.Title>
                <Card.Text>
                  Sports and nutrition are the dynamic duo that fuels peak
                  athletic performance. Sports refer to physical activities that
                  involve skill, training, and competition. Nutrition, on the
                  other hand, is the science of consuming and utilizing food for
                  health and performance.
                </Card.Text>
                <Button
                  as={Link}
                  to="/nutrition"
                  variant="primary"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    transition: "0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#fff";
                  }}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="d-flex align-items-center justify-content-center h-100 px-1"
        style={{
          padding: "0",
          backgroundColor: "#4D4D4D",
          height: "15vh",
          width: "100%",
          padding: "0",
          margin: "0",
        }}
      >
        <Row style={{ padding: "0" }}>
          <Col style={{ padding: "0" }}>
            <h1 style={{ color: "white", textAlign: "center" }}>
              Unlock Your Potential: Explore Fitness and Embrace a Healthier
              You!
            </h1>
          </Col>
        </Row>
      </Container>

      <div style={{ padding: "0" }}>
        <Container fluid style={{ padding: "0" }}>
          <Row className="h-100 align-items-center justify-content-center">
            <Col style={{ padding: "0" }}>
              <Card style={{ width: "100%", position: "relative" }}>
                <Card.Img variant="top" src={card4} />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "white",
                    width: "100%",
                  }}
                >
                  <Card.Title>Crossfit</Card.Title>
                  <Card.Text>
                    CrossFit focuses on functional movements performed at high
                    intensity, aiming to enhance strength, endurance,
                    flexibility, and agility. With its emphasis on pushing
                    limits, CrossFit fosters a supportive community and is
                    suitable for individuals of all fitness levels.
                  </Card.Text>
                  <Button
                    className="mt-4"
                    as={Link}
                    to="https://www.healthline.com/health/exercise-fitness/crossfit-benefits"
                    variant="primary"
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid white",
                      transition: "0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#fff";
                      e.target.style.color = "#000";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#fff";
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </Col>
            <Col style={{ padding: "0" }}>
              <Card style={{ width: "100%", position: "relative" }}>
                <Card.Img variant="top" src={card5} />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "white",
                    width: "100%",
                  }}
                >
                  <Card.Title>Strength</Card.Title>
                  <Card.Text>
                    Strength training involves exercises that focus on
                    increasing muscle strength, endurance, and size. The primary
                    goal of strength training is to increase muscle mass, which
                    in turn boosts metabolism, enhances bone density, and
                    promotes overall physical health.
                  </Card.Text>
                  <Button
                    className="mt-4"
                    as={Link}
                    to="https://www.everydayhealth.com/fitness/add-strength-training-to-your-workout.aspx"
                    variant="primary"
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid white",
                      transition: "0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#fff";
                      e.target.style.color = "#000";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#fff";
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </Col>
            <Col style={{ padding: "0" }}>
              <Card style={{ width: "100%", position: "relative" }}>
                <Card.Img variant="top" src={card6} />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "white",
                    width: "100%",
                  }}
                >
                  <Card.Title>Gymnastics</Card.Title>
                  <Card.Text>
                    Gymnastics is a sport that combines strength, flexibility,
                    agility, and coordination. Gymnastics not only enhances
                    physical abilities but also fosters discipline,
                    concentration, and determination.
                  </Card.Text>
                  <Button
                    className="mt-4"
                    as={Link}
                    to="https://www.rockstaracademy.com/blog/what-is-gymnastics-definition-history-benefits-and-more"
                    variant="primary"
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid white",
                      transition: "0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#fff";
                      e.target.style.color = "#000";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#fff";
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </Col>
            <Col style={{ padding: "0" }}>
              <Card style={{ width: "100%", position: "relative" }}>
                <Card.Img variant="top" src={card7} />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "white",
                    width: "100%",
                  }}
                >
                  <Card.Title>Endurance</Card.Title>
                  <Card.Text>
                    Endurance training focuses on improving the body's ability
                    to sustain physical activity over an extended period. It
                    enhances overall stamina, reduces the risk of chronic
                    diseases, and improves mental well-being, making everyday
                    activities easier and more enjoyable.
                  </Card.Text>
                  <Button
                    className="mt-4"
                    as={Link}
                    to="https://www.heart.org/en/healthy-living/fitness/fitness-basics/endurance-exercise-aerobic"
                    variant="primary"
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid white",
                      transition: "0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#fff";
                      e.target.style.color = "#000";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#fff";
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container fluid style={{ padding: "0" }}>
          <Row>
            <Col
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#D14F4F",
                height: "50vh",
              }}
            ></Col>
            <Col
              className="text-center"
              style={{
                backgroundColor: "#7D3030",
                height: "50vh",
                color: "#fff",
              }}
            >
              <h1 className="mt-5">Join Our Fitness Community Today!</h1>
              <br></br>
              <h5 className="mt-3">
                Create an account or subscribe to our news letter to enjoy
                updates on new fitness articles.
              </h5>
              <Button
                as={Link}
                to="/register"
                className="mt-5"
                variant="primary"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  transition: "0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#fff";
                  e.target.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#fff";
                }}
              >
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
