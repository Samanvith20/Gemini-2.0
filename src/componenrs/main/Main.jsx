import "./Main.css"

import { assets } from "../../assets/assets";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
           <p>Gemini</p>
           <img src={assets.user_icon} alt="user" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello ,Dev</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip </p>
            <img src={assets.compass_icon} alt="road trip" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept:urban planning </p>
            <img src={assets.bulb_icon} alt="road trip" />
          </div>
          <div className="card">
            <p>Brainstrom team bonding activites for our work retreat</p>
            <img src={assets.message_icon} alt="road trip" />
          </div>
         
        </div>
        <div className="bottom">
          <div className="search">
           <input type="text" placeholder="Search for something" />
         
          <div>
          <img src={assets.gallery_icon} alt="gallery" />
          <img src={assets.mic_icon} alt="mic" />
          <img src={assets.send_icon} alt="send" />
          </div>
        </div>
        < p className="bottom-info">
          Gemini may display incorrect information. Verify with a reliable source.
        </p>
      </div>
      </div>
    </div>
  )
}

export default Main
