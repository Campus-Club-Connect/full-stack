import "./leftBar.scss";
import Anemo from "./../../assets/Element_Anemo.png";
import Pyro from "./../../assets/Element_Pyro.png";
import Cryo from "./../../assets/Element_Cryo.png";
import Dendro from "./../../assets/Element_Dendro.png";
import Electro from "./../../assets/Element_Electro.png";
import Geo from "./../../assets/Element_Geo.png";
import Hydro from "./../../assets/Element_Hydro.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Anemo} alt="" />
            <span>Anemo</span>
          </div>
          <div className="item">
            <img src={Pyro} alt="" />
            <span>Pyro</span>
          </div>
          <div className="item">
            <img src={Hydro} alt="" />
            <span>Hydro</span>
          </div>
          <div className="item">
            <img src={Cryo} alt="" />
            <span>Cryo</span>
          </div>
          <div className="item">
            <img src={Dendro} alt="" />
            <span>Dendro</span>
          </div>
          <div className="item">
            <img src={Geo} alt="" />
            <span>Geo</span>
          </div>
          <div className="item">
            <img src={Electro} alt="" />
            <span>Electro</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Utils</span>
          <div className="item">
            <img src={Anemo} alt="" />
            <span>Anemo</span>
          </div>
          <div className="item">
            <img src={Pyro} alt="" />
            <span>Pyro</span>
          </div>
          <div className="item">
            <img src={Hydro} alt="" />
            <span>Hydro</span>
          </div>
          <div className="item">
            <img src={Anemo} alt="" />
            <span>Anemo</span>
          </div>
          <div className="item">
            <img src={Pyro} alt="" />
            <span>Pyro</span>
          </div>
          <div className="item">
            <img src={Hydro} alt="" />
            <span>Hydro</span>
          </div>
          <div className="item">
            <img src={Anemo} alt="" />
            <span>Anemo</span>
          </div>
          <div className="item">
            <img src={Pyro} alt="" />
            <span>Pyro</span>
          </div>
          <div className="item">
            <img src={Hydro} alt="" />
            <span>Hydro</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
