import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import backgroundImage from "../assets/solo3.png";

const Flexibility = () => {
  return (
    <Container fluid style={{ padding: "0" }}>
      <Row>
        <Col
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#D14F4F",
            height: "100vh",
          }}
        ></Col>
        <Col
          className="text-center"
          style={{ backgroundColor: "#AF8A95", height: "100vh", color: "#fff" }}
        >
          <h1 className="mt-4">Flexibility & Mobility Workout</h1>
          <h3 className="mt-3"> Dynamic Stretching</h3>
          <h5 className="mt-3">
            Leg Swings: Perform 10-15 swings on each leg, both forward and
            sideways.<br></br> Arm Circles: 10-15 forward and backward arm
            circles.<br></br> Hip Circles: 10-15 hip circles clockwise and
            counterclockwise.<br></br> Torso Twists: 10-15 reps each side.
            Lunges with a Twist: 10 reps each side
          </h5>

          <h1 className="mt-5">Yoga Poses</h1>
          <h3 className="mt-3">Yoga is great for flexibility and mobility</h3>
          <h5 className="mt-3">
            Downward Dog: 3 sets of 30 seconds. Cobra Stretch: 3 sets of 30
            seconds.<br></br>
            Child’s Pose: 3 sets of 30 seconds.<br></br>
            Pigeon Pose: 3 sets of 30 seconds each leg.<br></br>
            Seated Forward Bend: 3 sets of 30 seconds.
          </h5>
          <h1 className="mt-5">Foam Rolling</h1>
          <h3 className="mt-3">
            Foam rolling is a form of self-myofascial release. It helps to
            release tension in the muscles
          </h3>
          <h5 className="mt-3">
            Quads: Roll each leg for 1-2 minutes.<br></br>
            Hamstrings: Roll each leg for 1-2 minutes.<br></br>
            Calves: Roll each leg for 1-2 minutes.<br></br>
            Back: Roll from upper to lower back for 1-2 minutes.<br></br>
            Glutes: Sit on the roller, cross one leg, and roll the glute of the
            crossed leg for 1-2 minutes. IT Band: Lying on the side, just below
            the hip and rolling down to the knee for 1-2 minutes each side.
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Flexibility;
