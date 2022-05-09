import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/puneet.sheoran.37"><i className="topIcon fab fa-facebook-square"></i></a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/in_blackbird?t=rY0893p19M3NWTsh180OnQ&s=09"><i className="topIcon fab fa-twitter-square"></i></a>
      <a target="_blank" rel="noreferrer" href="https://www.pinterest.com/GrayMonroeBoutique/the-best-blogs-on-pinterest/"><i className="topIcon fab fa-pinterest-square"></i></a>
      <a target="_blank" rel="noreferrer" href="https://instagram.com/lets_.blog?igshid=YmMyMTA2M2Y="><i className="topIcon fab fa-instagram-square"></i></a>
      
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
