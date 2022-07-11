import { Card, Container } from "react-bootstrap";
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
    <Container className="mt-3">
      <Card
        className="text-center"
        style={{
          backgroundColor: theme ? "black" : "white",
          color: theme ? "white" : "black",
        }}
      >
        <Card.Header>Blog Author :{post?.userId}</Card.Header>
        <Card.Body>
          <Card.Title>Blog Title :{post?.title}</Card.Title>
          <Card.Text>{post?.body} </Card.Text>
          <ul>
            {post.comments.map((cmt) => (
              <Comment key={cmt.id} cmt={cmt} />
            ))}
          </ul>
        </Card.Body>
        <Card.Footer className="text-muted">
          {moment(post?.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Blogdetails;
