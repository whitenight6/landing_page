import { FaArrowRight } from "react-icons/fa6";
import play_icon from "../../assets/play.svg";
import pause_icon from "../../assets/pause.svg"
import "./Hero.css"


export const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) =>{
    return (
        <div className="hero">
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-explore">
                <p>Explore the features</p>
                <button><FaArrowRight /></button>
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"} ></li>
                    <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
                </ul>
            </div>

            <div className="hero-play">
                <div className="play-box">
                <img  className="icon" onClick={()=>setPlayStatus(!playStatus)} src={playStatus? pause_icon :play_icon} alt='loading'></img>
                </div>
                <p>See the video</p>

            </div>

        </div>
    )
}