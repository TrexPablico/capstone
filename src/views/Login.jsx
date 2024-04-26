import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import useApi from "../utilities/http";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { Link } from "react-router-dom";

function Login() {
  const { setItem } = useLocalStorage();
  const [email_address, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const api = useApi();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const body = {
        email_address: email_address,
        password: password,
      };
      const { data } = await api.post("/login", body);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setItem("token", data.token);
      navigate("/");
      navigate(0);
    } catch (error) {
      console.error("Oops Error!", error);
    }
  }

  return (
    <div className="login-background">
      <div className="d-flex justify-content-center align-items-center login-content">
        <Card style={{ width: "400px", color: "#fff" }}>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email_address}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  variant="light"
                  type="submit"
                  style={{ transition: "0.3s ease-in-out" }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#fff";
                  }}
                >
                  Login
                </Button>
                <Button
                  as={Link}
                  to="/register"
                  variant="light"
                  style={{ transition: "0.3s ease-in-out" }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#fff";
                  }}
                >
                  Register
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Login;
