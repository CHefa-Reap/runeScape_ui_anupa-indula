import React from "react";
import Footer from "../Footer/index";
import background_image from "../assets/images/background_image.png";
import rune_logo from "../assets/images/logo.png";
import { Button } from "react-bootstrap";
import NewsSection from "../NewsSection/index";
import gamevideo from "../assets/images/gameplay_video.mp4";
import google_play   from '../assets/images/Group.png'
import apple_play from '../assets/images/App_Store.png'
import steam from '../assets/images/steam.png'
import microsoft from '../assets/images/microsoft.png'
import "../assets/styles/_styles.scss";

function index() {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <>
      <div   className=" home_component">
        <div className="home_section">
          <img data-aos="zoom-in-down" className="img-fluid background_image " src={background_image} />
          <div className="old_logo">
            <img className="img-fluid  " src={rune_logo} />
          </div>
          <div   className="btn-section">
            <Button onClick={() => openInNewTab('https://secure.runescape.com/m=account-creation/create_account?theme=oldschool#ja_sid=4ebf1b71-cfc4-4306-aa8e-9c5b35cb2702')} className="play_now_btn">Play For Free <br/> <span>Register Now</span></Button>
            <Button onClick={() => openInNewTab('https://www.youtube.com/watch?v=HH7sN-zR8qE&ab_channel=OldSchoolRuneScape')} className="watch_trailer">Watch Trailer</Button>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="container mt-5 download_section">
        <span className="heading_txt">Start Creating</span>
        <span className="main_txt">Your own <br/> advneture</span>
        <span className="download_txt text-center"><i>Click here to download for preffered platform</i></span>
        <div className=" mt-5 downloadable-links">
         <ul>
        <li> <img className="ms-3 img-fluid" src= {microsoft}/></li>

        <li>          <img onClick={() => openInNewTab("https://store.steampowered.com/app/1343370/Old_School_RuneScape/")} className="img-fluid ms-3" src= {steam}/></li>
        <li>  <img onClick ={() => openInNewTab("https://apps.apple.com/app/apple-store/id1269648762?pt=311318&ct=product-website&mt=8")} className=" ms-3 img-fluid" src= {apple_play}/></li>
        <li> <img onClick={() => openInNewTab("https://play.google.com/store/apps/details?id=com.jagex.oldscape.android&referrer=utm_source%3Dproduct-website&pli=1")} className=" ms-3 img-fluid" src= {google_play}/></li> 
         
         </ul>
        </div>
      </div>

      <div className="news_section">
        <h5 data-aos="fade-up">Latest News</h5>
        <div data-aos="fade-up" className="  horizontal_section"></div>
        <div className="mt-5">
          <NewsSection />
        </div>
      </div>
      <div className="container-fluid mt-5 section_four">
        <h1  data-aos="fade-up" >Discover </h1>
        <h1  data-aos="fade-up" >world of Gielinor</h1>
        <div  data-aos="fade-up" className="horizontal_section"></div>
        <div  data-aos="zoom-in-down" className="mt-5 container ">
         <video width={"100%"} height ={"100%"} loop autoPlay src= {gamevideo}/>
        </div>
      </div>

   

     
      
      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default index;
