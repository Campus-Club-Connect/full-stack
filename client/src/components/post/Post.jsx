import "./post.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useContext, useState } from "react";
import moment from "moment";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest.get("/likes?postId=" + post.id).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (liked) => {
      console.log(liked);
      if (liked) return makeRequest.delete("/likes?postId=" + post.id);
      return makeRequest.post("/likes", { postId: post.id });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>

          <div className="moreActions">
            <FontAwesomeIcon icon={faLocation} className="pin" />
            <FontAwesomeIcon icon={faEllipsis} className="moreOptions" />
          </div>
        </div>

        <div className="content">
          <p>{post.desc}</p>
          <img src={"./upload/" + post.img} alt="" />
          <img src={post.img} alt="" />
        </div>

        <div className="info">
          <div className="item">
            <FontAwesomeIcon icon="fa-thumbs-up" />
            <p>{data?.length}</p>
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <p>19 Comments</p>
          </div>
        </div>

        <div className="actions">
          <div className="item" onClick={handleLike}>
            {isLoading ? (
              "loading"
            ) : data.includes(currentUser.id) ? (
              <FontAwesomeIcon icon="fa-thumbs-up" style={{ color: "black" }} />
            ) : (
              <FontAwesomeIcon icon="fa-regular fa-thumbs-up" />
            )}

            <p>Like</p>
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <FontAwesomeIcon icon="fa-regular fa-comment" />
            <p>Comment</p>
          </div>
          <div className="item">
            <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" />
            <p>Share</p>
          </div>
          <div className="item pin">
            <FontAwesomeIcon icon={faLocation} />
            <p>Pin</p>
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
