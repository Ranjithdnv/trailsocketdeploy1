import "./card.css";
 import Heart from "../../img/heart.jpg";
 import HeartFilled from "../../img/heartFilled.jpg";
 import Comment from "../../img/comment.jpg";
 import Share from "../../img/share.jpg";
 import Info from "../../img/info.jpg";
import { useState } from "react";

const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    type === 1 && setLiked(true);
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
  };

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
    
         {liked ? (
           <img src={HeartFilled} alt="" className="cardIcon" />
        ) : (
          <img
            // src={Heart}
            alt=""
            className="cardIcon"
            onClick={() => handleNotification(1)}
          />
        )}
         <img
          src={Comment}
          alt=""
          className="cardIcon"
          onClick={() => handleNotification(2)}
        />
        <img
          src={Share}
          alt=""
          className="cardIcon"
          onClick={() => handleNotification(3)}
        />
        <img src={Info} alt="" className="cardIcon infoIcon" /> 
     

    </div></div>
  );
};

export default Card;