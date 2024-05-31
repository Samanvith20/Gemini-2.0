import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
import "./Sidebar.css";
const Sidebar = () => {
  const [extended, setextended] = useState(false);
  const { onSend, prevPrompt, setRecentPrompt } = useContext(Context);
  const Onloadprompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSend(prompt);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          onClick={() => setextended(!extended)}
          src={assets.menu_icon}
          alt="sidebar"
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="new-chat" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt &&
              prevPrompt?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="recent-entry"
                    onClick={() => Onloadprompt(item)}
                  >
                    <img src={assets.user_icon} alt="user" />
                    <p>{item.slice(0, 15)}...</p>
                  </div>
                );
              })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
