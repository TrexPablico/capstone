import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import backgroundImage from "../assets/solo5.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Nutrition = () => {
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
          <h1 className="mt-4">Sports & Nutrition</h1>
          <h5>
            Balanced Diet Composition:<br></br>
            Carbohydrates: Whole grains, fruits, vegetables, and legumes.
            <br></br>
            Protein: Lean meats, fish, poultry, dairy, eggs, beans, and legumes.
            <br></br>
            Fats: Avocados, nuts, seeds, and olive oil.<br></br>
            Hydration: Drink water throughout the day and especially before,
            during, and after exercis
          </h5>
          <h1 className="mt-5">Pre-Exercise Nutrition</h1>
          <h5>
            Meal Timing: Eat 2-3 hours before exercising or consume a light,
            easily digestible meal right before.<br></br>
            Hydration: Drink 16-20 ounces of water or a sports drink 2-3 hours
            before and another 8 ounces 10-20 minutes before.<br></br>
            Meal Ideas: Whole grain toast with almond butter and banana slices,
            Greek yogurt with berries and honey, or oatmeal with fruit and nuts.
          </h5>
          <h1 className="mt-5">Post-Exercise Nutrition</h1>
          <h5>
            Rehydrate: Drink 20-24 ounces of water or sports drink for every
            pound lost during exercise. Meal Timing: Consume a meal within 2
            hours after exercise. Protein: Consume 15-25 grams of protein within
            30 minutes after exercise to help repair muscles.<br></br>
            Carbohydrates: Include carbohydrates to replenish glycogen stores,
            aim for a 3:1 or 4:1 ratio of carbohydrates to protein.<br></br>
            Meal Ideas: Grilled chicken with quinoa and steamed vegetables,
            salmon with sweet potato and mixed greens, or stir-fried tofu with
            brown rice and broccoli<br></br>
          </h5>
          <h3 className="mt-5">
            To accurately check you calorie intake, we have provided a link
            below
          </h3>
          <Button
            className="mt-4"
            as={Link}
            to="https://www.calculator.net/calorie-calculator.html"
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
            Calorie Calculator
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Nutrition;
