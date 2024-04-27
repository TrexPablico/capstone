import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import backgroundImage from "../assets/solo2.png";
import CommentForm from "./commentform";
import CommentList from "./commentlist";

const Training = () => {
  return (
    <>
      <Container fluid style={{ padding: "0" }}>
        <Row>
          <Col
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#D14F4F",
              height: "160vh",
            }}
          ></Col>
          <Col
            className="text-center"
            style={{
              backgroundColor: "#1F244D",
              height: "160vh",
              color: "#fff",
            }}
          >
            <h1 className="mt-2">Phase 1 (Week 1-6)</h1>
            <h3 className="mt-1">
              Workout A - Chest, Shoulder, Triceps, Abs, Calves
            </h3>
            <h5 className="mt-1">
              Bench press - 4 sets of 6-8 reps Overhead press, - 3 sets of 6-8
              reps Close grip bench press, - 3 sets of 8-10 reps Abs (superset
              two exercises) - 3 supersets of 15-20 reps Calves (pick any) - 3
              sets of 15-20 reps
            </h5>
            <h3 className="mt-3">
              Workout B - Legs, Back, Biceps, Abs, Calves
            </h3>
            <h5 className="mt-3">
              Deadlift/Squats (alternate each workout) - 4 sets of 4-6 reps
              Weighted Pull-Ups/Chin-ups (alternate each workout) - 3 sets of
              6-8 reps Barbell row, - 3 sets of 6-8 reps Dumbbell curl, - 3 sets
              of 8-10 reps Abs (superset two exercises) - 3 supersets of 15-20
              reps Calves (pick any) - 3 sets of 15-20 reps
            </h5>
            <h1 className="mt-5">Phase 2 (Week 8-13)</h1>
            <h3>Workout A - Chest, Shoulder, Triceps, Abs, Calves</h3>
            <h5>
              Incline DB bench press - 3 sets of 6-8 reps Flat DB Bench press -
              3 sets of 6-8 reps DB military press - 3 sets of 6-8 reps Barbell
              upright row - 3 sets of 10-15 reps Triceps pushdown - 3 sets of
              8-15 reps Abs (superset two exercises) - 3 supersets of 15-20 reps
              Calves (pick any) - 3 sets of 15-20 rep
            </h5>
            <h3 className="mt-3">
              Workout B - Legs, Back, Biceps, Abs, Calves
            </h3>
            <h5>
              Deadlift/Leg Press (alternate each workout) - 4 sets of 4-6 reps
              Pull-Ups - 2 sets of 6-8 reps Chin-ups - 2 sets of 6-8 reps 1 arm
              DB row - 4 sets of 6-8 reps Incline DB Curl - 3 sets of 8-10 reps
              Abs (superset two exercises) - 3 supersets of 15-20 reps Calves
              (pick any) - 3 sets of 15-20 reps
            </h5>
            <h1 className="mt-5">Phase3(Weeks15-20)(Week 8-13)</h1>
            <h3>Workout A - Back, Biceps, Abs, Calves</h3>
            <h5>
              Deadlift - 3 sets of 4-6 reps Wide grip pull-ups - 3 sets of 6-8
              reps Chin-ups - 3 sets of 6-8 reps Barbell row - 3 sets of 6-8
              reps Barbell curl - 3 sets of 8-10 reps Abs (superset 3 exercises)
              - 3 sets of 15-20 reps Calves - 4 sets of 15-20 reps
            </h5>
            <h3 className="mt-3">Workout B - Chest, Triceps, Abs, Calves</h3>
            <h5>
              Bench press - 4 sets of 6-8 reps Incline DB press - 3 sets of 6-8
              reps Flat Dumbbell Flyes - 2 sets of 8-10 reps Dips - 3 sets of
              6-8 reps DB Overhead Tricep Extension - 2 sets of 8-10 reps Abs
              (superset 3 exercises) - 3 sets of 15-20 reps Calves - 4 sets of
              15-20 reps
            </h5>
            <h1 className="mt-5">Phase 4 (Weeks22-27)</h1>
            <h3>Workout A - Chest, Shoulders, Triceps, Abs</h3>
            <h5>
              Bench press - 4 sets of 6-8 reps Incline DB press - 3 sets of 6-8
              reps Dips - 3 sets of 6-8 reps Barbell upright row - 3 sets of 6-8
              reps Triceps pushdown - 3 sets of 10-12 reps Abs - 3 supersets of
              15-20 reps
            </h5>
            <h3 className="mt-3">Workout B - Back, Abs, Calves</h3>
            <h5>
              Deadlift - 5 sets of 5 reps Weighted Pull-ups - 4 sets of 6-8 reps
              1 arm DB row - 3 sets of 6-8 reps Incline DB curl - 3 sets of
              10-12 reps Calves - 4 sets of 15-20 reps
            </h5>
          </Col>
        </Row>
      </Container>
      <CommentForm />
      <CommentList />
    </>
  );
};

export default Training;
