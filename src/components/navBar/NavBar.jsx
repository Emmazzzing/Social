import "./navBar.scss";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="left">
        <Link to={"./"} style={{ textDecoration: "None" }}>
          <span>Emma Social.</span>
        </Link>
        <HouseOutlinedIcon />
        <DarkModeOutlinedIcon />
        <AppsOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"></img>
          <span>John doe</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
