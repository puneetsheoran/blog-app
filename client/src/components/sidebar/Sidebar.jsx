import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import Icon from "../../images/cllg.jpeg";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT JKLU</span>
        <img
          src={Icon}
          alt=""
        />
        <p>
        JK Lakshmipat University was established in Jaipur, the capital city of Rajasthan, in the year 2011. The curriculum and pedagogy of the university emphasises experiential learning through projects. The University is sponsored by the J. K. Organisation.
        </p>
      </div>
      <div className="sidebarItem">
        
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a target="_blank" href="https://twitter.com/jklujaipur?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="sidebarIcon fab fa-facebook-square"></i></a>
          <a target="_blank" href="https://www.facebook.com/JKLUJAIPUR/"><i className="sidebarIcon fab fa-twitter-square"></i></a>
          <a target="_blank" href="https://instagram.com/jklu_jaipur?igshid=YmMyMTA2M2Y="><i className="sidebarIcon fab fa-instagram-square"></i></a>
        </div>
      </div>
    </div>
  );
}
