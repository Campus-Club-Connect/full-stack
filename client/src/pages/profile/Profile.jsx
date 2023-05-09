import "./profile.scss";
import Anemo from "./../../assets/Element_Anemo.png";
import Pyro from "./../../assets/Element_Pyro.png";
import Cryo from "./../../assets/Element_Cryo.png";
import Dendro from "./../../assets/Element_Dendro.png";
import Electro from "./../../assets/Element_Electro.png";
import Geo from "./../../assets/Element_Geo.png";
import Hydro from "./../../assets/Element_Hydro.png";
import Posts from "../../components/posts/Posts";

import { useQuery, useQueryClient, useMutation } from "react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );
  const { isLoading: aIsLoading, data: affiliationData } = useQuery(
    ["affiliation"],
    () =>
      makeRequest.get("/affiliations?followedUserId=" + userId).then((res) => {
        return res.data;
      })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if (following)
        return makeRequest.delete("/affiliations?userId=" + userId);
      return makeRequest.post("/affiliations", { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["affiliation"]);
      },
    }
  );

  const handleFollow = () => {
    mutation.mutate(affiliationData.includes(currentUser.id));
  };

  return (
    <div className="profile">
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="profileContainer">
            <div className="images">
              <img src={data.coverPic} alt="" className="cover" />
              <div className="profilePic">
                <img src={data.profilePic} alt="" />
              </div>
            </div>

            <div className="uInfo">
              <div className="uEdit">
                {aIsLoading ? (
                  "loading"
                ) : userId === currentUser.id ? (
                  <button>Edit profile</button>
                ) : (
                  <button onClick={handleFollow}>
                    {affiliationData.includes(currentUser.id)
                      ? "Following"
                      : "Follow"}
                  </button>
                )}
              </div>
              <div className="uDetails">
                <div className="uTitle">
                  <span>{data.name}</span>
                  <h3>Admin</h3>
                </div>
                <div className="clubAffiliations">
                  <h3>Club Affiliations:</h3>
                  <div className="clubs">
                    <div className="images">
                      <img src={Pyro} alt="" />
                    </div>
                    <div className="images">
                      <img src={Hydro} alt="" />
                    </div>
                    <div className="images">
                      <img src={Dendro} alt="" />
                    </div>
                    <div className="images">
                      <img src={Cryo} alt="" />
                    </div>
                    <div className="images">
                      <img src={Electro} alt="" />
                    </div>
                    <div className="images">
                      <img src={Geo} alt="" />
                    </div>
                    <div className="images">
                      <img src={Anemo} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Posts />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
