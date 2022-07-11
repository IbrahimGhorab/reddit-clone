import { Form, Button } from "react-bootstrap";
import { logIn, logOut } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../redux/actions/themeAction";
// import { useContext } from "react";
// import ThemeContext from "../context/ThemeContext";
import { useFormik } from "formik";

const Login = ({ user }) => {
  // const { toggleTheme, darkTheme } = useContext(ThemeContext);
  const theme = useSelector((state) => state.themeReducer);

  const themeStyle = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
    width: "350px",
    height: "360px",
    borderRadius: "10px",
  };
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      console.log(theme);
    },
  });
  return (
    <div className="pt-5">
      <Form
        onSubmit={formik.handleSubmit}
        className="m-auto p-5"
        style={themeStyle}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            // id="email"
            name="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Forget Password" />
        </Form.Group>
        <div>
          {user ? (
            <Button
              variant="primary"
              type="submit"
              onClick={() => dispatch(logOut())}
            >
              LOGOUT
            </Button>
          ) : (
            <Button
              variant="primary"
              type="submit"
              onClick={() => dispatch(logIn())}
            >
              LOGIN
            </Button>
          )}
        </div>
      </Form>
      <div>
        {theme ? (
          <Button
            className="mt-3"
            variant="light"
            type="submit"
            onClick={() => {
              dispatch(lightTheme());
            }}
            style={{ borderRadius: "10px" }}
          >
            Light
          </Button>
        ) : (
          <Button
            className="mt-3"
            variant="dark"
            type="submit"
            onClick={() => {
              dispatch(darkTheme());
            }}
            style={{ borderRadius: "10px" }}
          >
            Dark
          </Button>
        )}
      </div>
    </div>
  );
};

export default Login;
