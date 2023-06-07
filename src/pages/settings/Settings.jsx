import "./settings.css";
import Sidebar from "../../components/sidebar/sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://t4.ftcdn.net/jpg/00/12/71/19/360_F_12711999_ijjE3NhL10ktZgg6uZYstizvHhhpBitk.jpg" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="MoHoney"></input>
          <label>Email</label>
          <input type="email" placeholder="MoMoney@gmail.com"></input>
          <label>Password</label>
          <input type="password"></input>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
