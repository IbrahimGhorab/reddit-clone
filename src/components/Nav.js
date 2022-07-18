import { Navbar, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { darkTheme, lightTheme } from "../redux/actions/themeAction";
import { useSelector, useDispatch } from "react-redux";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Blogform from "./Blogform";

const Nav = () => {
  const theme = useSelector((state) => state.themeReducer);
  const posts = useSelector((state) => state.postReducer);

  const dispatch = useDispatch();

  return (
    <Navbar
      bg={theme ? "dark" : "light"}
      variant={theme ? "dark" : "light"}
      fixed="top"
    >
      <Container fluid className="d-flex justify-content-between">
        <div className="d-flex justify-content-center">
          <img
            src="https://play-lh.googleusercontent.com/nlptFyxNsb8J0g8ZLux6016kunduV4jCxIrOJ7EEy-IobSN1RCDXAJ6DTGP81z7rr5Zq"
            alt=""
            width="40"
            height="40"
          />
          <span
            className="ms-1 fs-4 fw-bold"
            style={{ color: theme ? "white" : "black" }}
          >
            reddit
          </span>
        </div>
        <Container className="d-flex justify-content-between flex-1">
          <div className="pt-2">
            <NavLink
              className="text-decoration-none fs-6 fw-bold"
              to="/"
              style={{ color: theme ? "white" : "black" }}
            >
              HOME
            </NavLink>
          </div>
          <form>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "50rem" }}
            />
          </form>
          <div className="d-flex gap-2">
            <Button size="sm" variant={theme ? "light" : "dark"}>
              <i class="fa fa-user-circle" aria-hidden="true"></i>
            </Button>
            <Blogform />
          </div>
        </Container>
        <div className="pt-2 d-flex gap-2">
          <div className="">
            {theme ? (
              // <Button
              //   size="sm"
              //   variant="warning"
              //   onClick={() => {
              //     dispatch(lightTheme());
              //   }}
              //   style={{ borderRadius: "10px" }}
              // >
              //   <i class="fa fa-sun-o" aria-hidden="true"></i>
              // </Button>
              <BsFillSunFill
              color="white"
                onClick={() => {
                  dispatch(lightTheme());
                }}
              />
            ) : (
              <BsFillMoonStarsFill
                onClick={() => {
                  dispatch(darkTheme());
                }}
              />
              // <Button
              //   size="sm"
              //   variant="dark"
              //   onClick={() => {
              //     dispatch(darkTheme());
              //   }}
              //   style={{ borderRadius: "10px" }}
              // >
              // </Button>
            )}
          </div>
          <p
            className="mt-2 fs-6 fw-bold"
            style={{
              color: theme ? "white" : "black",
              borderRadius: "",
            }}
          >
            {posts.length}
          </p>
        </div>
      </Container>
    </Navbar>
  );
};

export default Nav;
