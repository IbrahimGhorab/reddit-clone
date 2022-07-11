import React, { useState } from "react";
import { Card, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import ThemeContext from "../context/ThemeContext";
// import { useContext } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";

const Blog = ({ post, getData }) => {
  // const { theme } = useContext(ThemeContext);
  const theme = useSelector((prvState) => prvState.themeReducer);
  // console.log("theme now: ", theme);
  const themeStyle = {
    backgorundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const postComment = async (cmt) => {
    try {
      await axios.post(`https://api.tawwr.com/posts/${post.id}/comment`, cmt);
      getData();
    } catch (e) {
      console.log(e);
    }
  };

  const upVote = async () => {
    try {
      await axios.post(`https://api.tawwr.com/posts/${post.id}/vote`, {
        userId: Math.floor(Math.random() * 10) + 1,
        userVote: 1,
      });
      getData();
    } catch (e) {
      console.log(e);
    }
  };
  const downVote = async () => {
    try {
      await axios.post(`https://api.tawwr.com/posts/${post.id}/vote`, {
        userId: Math.floor(Math.random() * 10) + 1,
        userVote: -1,
      });
      getData();
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues: {
      userId: 5,
      body: "",
    },
    onSubmit: (values) => {
      postComment(values);
    },
  });

  return (
    <Container className="mt-3">
      <Card
        className="text-center"
        bg={theme ? "dark" : ""}
        text={theme ? "white" : ""}
      >
        <Card.Header>Blog Author :{post.id}</Card.Header>
        <Card.Body>
          <Card.Title>Blog Title: {post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-end mx-2">
              <Link to={"/post/" + post.id}>
                <Button variant="success">Show Details...</Button>
              </Link>
            </div>
            <div className="d-flex justify-content-around">
              <div>
                <p>{post.upVotesTotal}</p>
                <button className="btn-primary" onClick={upVote}>
                  <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                </button>
              </div>
              <div>
                <p>{post.downVotesTotal}</p>
                <button className="btn-info mx-2" onClick={downVote}>
                  <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                </button>
              </div>
              <div>
                <p>{post.commentsTotal}</p>
                <button className="btn-warning" onClick={handleShow}>
                  <i className="fa fa-pencil-square" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          {moment(post.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </Card.Footer>
      </Card>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header
            style={{
              backgroundColor: theme ? "black" : "white",
              color: theme ? "white" : "black",
            }}
            closeButton
          >
            <Modal.Title>Comment Form</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              backgroundColor: theme ? "black" : "white",
              color: theme ? "white" : "black",
            }}
          >
            <Form
              style={{
                backgroundColor: theme ? "black" : "white",
                color: theme ? "white" : "black",
              }}
            >
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="body"
                  id="body"
                  placeholder="Add your Comment Hear"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.body}
                />
              </Form.Group>
              <Button
                variant="success"
                type="button"
                onClick={formik.handleSubmit}
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer
            style={{
              backgroundColor: theme ? "black" : "white",
              color: theme ? "white" : "black",
            }}
          >
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
};

export default Blog;
