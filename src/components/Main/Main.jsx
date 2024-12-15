import React from "react";
import './Main.css'
import { assets } from "../../assets/assets";
const Main=()=>{
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon}/>
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello Sachin</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places for upcoming road trip</p>
                        <img src={assets.compass_icon}></img>
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept urban planning</p>
                        <img src={assets.bulb_icon}></img>
                    </div>
                    <div className="card">
                        <p>How to go ahead of 99% of the people</p>
                        <img src={assets.message_icon}></img>
                    </div>
                    <div className="card">
                        <p>How to learn anything faster</p>
                        <img src={assets.code_icon}></img>
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Enter something sassy"/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info,including about people, so double-check its output and Your Privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;