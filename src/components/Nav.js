// import { useContext } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import ThemeContext from "../context/ThemeContext";
import { darkTheme, lightTheme } from "../redux/actions/themeAction";
import { useSelector, useDispatch } from "react-redux";
import Blogform from "./Blogform";

const Nav = () => {
  // const { toggleTheme } = useContext(ThemeContext);
  const theme = useSelector((state) => state.themeReducer);
  const posts = useSelector((state) => state.postReducer);

  const dispatch = useDispatch();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="text-decoration-none text-white" to="/">
          My Blogs
        </NavLink>
        <div className="d-flex justify-content-between gap-3">
          <Blogform />
          {theme ? (
            <Button
              variant="light"
              onClick={() => {
                dispatch(lightTheme());
              }}
            >
              Light
            </Button>
          ) : (
            <Button
              variant="dark"
              onClick={() => {
                dispatch(darkTheme());
              }}
            >
              dark
            </Button>
          )}
          <h5
            className="mt-2"
            style={{
              backgroundColor: "#C07C2C",
              color: "white",
              borderRadius: "10%",
            }}
          >
            {posts.length}
          </h5>
        </div>
      </Container>
    </Navbar>
  );
};

export default Nav;
