import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Your Pins</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/cc/36/23/cc362322513c1ca26febcebbc372a475.jpg"
                alt=""
              />
              <p>
                <span>Faruzan</span> wishes to have a chat with you
              </p>
            </div>
            <button>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/originals/90/1c/e6/901ce63a2f8c6eb9bd3d40a12195f332.jpg"
                alt=""
              />
              <p>
                <span>Kazuha</span> has a meeting with you
              </p>
            </div>
            <button>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/34/d5/5c/34d55cc1946901bec07a508f963abc95.jpg"
                alt=""
              />
              <p>
                <span>Evelyn</span> changed her cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/originals/90/1c/e6/901ce63a2f8c6eb9bd3d40a12195f332.jpg"
                alt=""
              />
              <p>
                <span>Kazuha</span> flaged a bug
              </p>
            </div>
            <span>12 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/originals/90/1c/e6/901ce63a2f8c6eb9bd3d40a12195f332.jpg"
                alt=""
              />
              <p>
                <span>Kazuha</span> commented on your post
              </p>
            </div>
            <span>31 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/originals/90/1c/e6/901ce63a2f8c6eb9bd3d40a12195f332.jpg"
                alt=""
              />
              <p>
                <span>Kazuha</span> Liked your post
              </p>
            </div>
            <span>11 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/34/d5/5c/34d55cc1946901bec07a508f963abc95.jpg"
                alt=""
              />
              <div className="online" />
              <span>Evelyn</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/cc/36/23/cc362322513c1ca26febcebbc372a475.jpg"
                alt=""
              />
              <div className="online" />
              <span>Faruzan</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/originals/90/1c/e6/901ce63a2f8c6eb9bd3d40a12195f332.jpg"
                alt=""
              />
              <div className="online" />
              <span>Kazuha</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/564x/ce/c9/49/cec9497f455ed2d9c4634157951a89de.jpg"
                alt=""
              />
              <div className="online" />
              <span>Lie Bie</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
