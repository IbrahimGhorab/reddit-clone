import { Card, Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import Comment from "../components/Comment";

const Blogdetails = () => {
  const { id } = useParams();
  const theme = useSelector((state) => state.themeReducer);
  const posts = useSelector((state) => state.postReducer);
  let post = posts.find((post) => post.id === +id);
  console.log(post);

  return (
    <Container className="mt-5">
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
        <Card.Body>
          <Card.Title className="">{post.title}</Card.Title>
          <Card.Text className="">{post.body}</Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-between gap-5">
            <div>
              <button className="btn btn-light me-2">
                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
              </button>
              <span>{post.upVotesTotal}</span>
            </div>
            <div>
              <button className="btn btn-light me-2">
                <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
              </button>
              <span>{post.downVotesTotal}</span>
            </div>
            <div>
              <button className="btn btn-light me-2">
                <i className="fa fa-pencil-square" aria-hidden="true"></i>
              </button>
              <span>{post.commentsTotal}</span>
            </div>
          </div>
        </div>
      </Card>

      <Card
        bg={theme ? "dark" : ""}
        text={theme ? "white" : ""}
        style={{ borderRadius: "20px" }}
        className="p-4 mt-4"
      >
        <h3>Comment</h3>
        <div>
          {post.comments.map((cmt) => (
            <Comment key={cmt.id} cmt={cmt} />
          ))}
        </div>
      </Card>
    </Container>
  );
};

export default Blogdetails;
