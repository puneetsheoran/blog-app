import "./header.css";
import Background from "../../images/bg.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">JKLU's</span>
        <span className="headerTitleLg">BloggerSpace</span>
      </div>
      <img
        className="headerImg"
        src={Background}
        alt=""
      />
    </div>
  );
}
