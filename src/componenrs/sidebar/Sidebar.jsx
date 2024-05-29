import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
const Sidebar = () => {
     const[extended , setextended]=useState(false)
  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" onClick={()=>setextended(!extended)} src={assets.menu_icon} alt="sidebar" />
        <div className="new-chat">
          <img  src={assets.plus_icon} alt="new-chat" />
           {extended?<p>New Chat</p>:null}
        </div>
        {extended ?
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="recent" />
            <p>What is react ...</p>
          </div>
        </div>
        :null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt=""/>
             {extended?<p>Help</p>:null}
         </div>
         <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt=""/>
            {extended? <p>Activity</p> :null}
         </div>
         <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt=""/>
            {extended ?<p>Settings</p> :null}
         </div>
      </div>
    </div>
  );
};

export default Sidebar;
