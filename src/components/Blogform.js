import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postsAction";
import { Button, Modal, Form } from "react-bootstrap";
import { BiAddToQueue } from "react-icons/bi";
import { MdLibraryAdd } from "react-icons/md";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Blogform = () => {
  const posts = useSelector((state) => state.postReducer);
  const theme = useSelector((state) => state.themeReducer);

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setPost = async (blog) => {
    try {
      const post = await axios.post("https://api.tawwr.com/posts", blog);
      dispatch(addPost(post));
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues: {
      userId: Math.floor(Math.random() * 10),
      title: "",
      body: "",
    },
    onSubmit: (values) => {
      setPost(values);
      formik.resetForm();
      handleClose();
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(2, "title must not be less than 2 char")
        .max(15, "title must not be more than 15 char")
        .required("title is required felid "),
      body: Yup.string()
        .min(5, "body must be more than 5 char")
        .max(20, "body must be less than 20 char")
        .required("body is required felid"),
    }),
  });
  return (
    <div>
      <BiAddToQueue
        style={{ cursor: "pointer" }}
        size="2.5em"
        color={theme ? "white" : "black"}
        onClick={handleShow}
      />

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
          <Modal.Title
            style={{
              backgroundColor: theme ? "#4E4E50" : "white",
              color: theme ? "white" : "black",
            }}
          >
            BLOGS FORM
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: theme ? "#4E4E50" : "white",
            color: theme ? "white" : "black",
          }}
        >
          <Form
            onSubmit={formik.handleSubmit}
            style={{
              backgroundColor: theme ? "#4E4E50" : "white",
              color: theme ? "white" : "black",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Bolg Title</Form.Label>
              <Form.Control
                type="text"
                // id="title"
                name="title"
                placeholder="Add Blog Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Group>
            {formik.touched.title && formik.errors.title ? (
              <p>{formik.errors.title}</p>
            ) : null}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Blog Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write Your Blog Hear!"
                // id="body"
                name="body"
                value={formik.values.body}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Group>
            {formik.touched.body && formik.errors.body ? (
              <p>{formik.errors.body}</p>
            ) : null}
            <Button
              variant="primary"
              type="button"
              onClick={formik.handleSubmit}
            >
              Add Blog
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
  );
};

export default Blogform;
