import React from "react";
import { Image, Card } from "react-bootstrap";
import moment from "moment";

const Comment = ({ cmt }) => {
  return (    
    <div className="d-flex justify-content-start mt-5">
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
        <p>{cmt.userId}</p>
        <Card.Text className="">
         {cmt.body}
        </Card.Text>
        <p className="">
          {moment(cmt.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </p>
      </div>
    </div>
  );
};

export default Comment;
