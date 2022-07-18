import React, { useState } from "react";
import { Card, Button, Container, Modal, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";

const Blog = ({ post }) => {
  const theme = useSelector((prvState) => prvState.themeReducer);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const postComment = async (cmt) => {
    try {
      await axios.post(`https://api.tawwr.com/posts/${post.id}/comment`, cmt);
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
        bg={theme ? "dark" : ""}
        text={theme ? "white" : ""}
        style={{ borderRadius: "20px" }}
        className="p-4"
      >
        <div className="d-flex justify-content-start">
          <Image
            src="https://www.w3schools.com/css/img_5terre.jpg"
            className="mx-3"
            roundedCircle
            style={{
              width: "60px",
              height: "60px",
            }}
          />
          <div>
            <p>{post.userId}</p>
            <p>
              {moment(post.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </p>
          </div>
        </div>
        <Card.Body className="justify-content-start">
          <Card.Title className=" ">{post.title}</Card.Title>
          <Card.Text className=" ">{post.body}</Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-between gap-5">
            <div>
              <button className="btn btn-light me-2" onClick={upVote}>
                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
              </button>
              <span>{post.upVotesTotal}</span>
            </div>
            <div>
              <button className="btn btn-light me-2" onClick={downVote}>
                <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
              </button>
              <span>{post.downVotesTotal}</span>
            </div>
            <div>
              <button className="btn btn-light me-2" onClick={handleShow}>
                <i className="fa fa-pencil-square" aria-hidden="true"></i>
              </button>
              <span>{post.commentsTotal}</span>
            </div>
          </div>
          <div className="">
            <Link to={"/post/" + post.id}>
              <button className="btn btn-light">Open Post </button>
            </Link>
          </div>
        </div>
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
              backgroundColor: theme ? "#4E4E50" : "white",
              color: theme ? "white" : "black",
            }}
            closeButton
          >
            <Modal.Title>Comment Form</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              backgroundColor: theme ? "#4E4E50" : "white",
              color: theme ? "white" : "black",
            }}
          >
            <Form
              style={{
                backgroundColor: theme ? "#4E4E50" : "white",
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
              backgroundColor: theme ? "#4E4E50" : "white",
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
