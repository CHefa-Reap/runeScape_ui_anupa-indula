import React from "react";
import "../assets/styles/_styles.scss";
import company_logo from "../assets/images/JAGEX.png";
import pegi16 from "../assets/images/pegi16.png";
import pegi_drugs from "../assets/images/pegi-drugs.png";
import pegi_purchase from "../assets/images/pegi-ingame-purchases_1.png";
import facebook from '../assets/images/SocialNetwork-1.png'
import instergram from '../assets/images/SocialNetwork.png'
import discord from '../assets/images/discord.png'
import youtube from '../assets/images/youtube.png'
function index() {


  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div data-aos="fade-up" className="footer-component container">
      <div className="logo_header ">
        <img className="img-fluid" src={company_logo} />
      </div>
      <div className=" mt-4">
        <span className="text-center  mt-5">© 1999 - 2022 Jagex Games Ltd</span>
      </div>
      
      <div className="privacy">
        <p>
          This website and its contents are copyright © 1999 - 2022 Jagex Games
          Ltd, 220 Science Park, Cambridge, CB4 0WA, United Kingdom.
        </p>
        Use of this website is subject to our <br /> <a href="https://www.jagex.com/en-GB/terms#_ga=2.95450719.293480264.1670151261-2040162974.1670151261" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>{" "}
        and <a href="https://www.jagex.com/en-GB/terms/privacy#_ga=2.109476166.293480264.1670151261-2040162974.1670151261" target="_blank" rel="noopener noreferrer" >Privacy Policy</a> <br />
        <p>
          <a href="https://www.jagex.com/en-GB/terms/rules-of-old-school-runescape#_ga=2.108967361.293480264.1670151261-2040162974.1670151261" target="_blank" rel="noopener noreferrer">  Rules of Old School RuneScape</a> |
          <a href="https://www.jagex.com/en-GB/terms/cookies#_ga=2.33926754.293480264.1670151261-2040162974.1670151261" target="_blank" rel="noopener noreferrer">Change Cookie Settings </a>
        </p>
      </div>
      <div className="mt-5 mb-5">
        <img onClick={() => openInNewTab("https://pegi.info/search-pegi?q=runescape&op=Search&age%5B%5D=&descriptor%5B%5D=&publisher=Jagex+Ltd&platform%5B%5D=&release_year%5B%5D=&page=1&form_build_id=form-5Nc7D2ScBDuiMzP9F2ffxljtiSLFY38thQpDSDwRrq0&form_id=pegi_search_form")} className="img-fluid" src={pegi16} />
        <img onClick={() => openInNewTab('https://pegi.info/search-pegi?q=runescape&op=Search&age%5B%5D=&descriptor%5B%5D=&publisher=Jagex+Ltd&platform%5B%5D=&release_year%5B%5D=&page=1&form_build_id=form-5Nc7D2ScBDuiMzP9F2ffxljtiSLFY38thQpDSDwRrq0&form_id=pegi_search_form')} className="img-fluid" src={pegi_drugs} />
        <img onClick={() => openInNewTab('https://pegi.info/search-pegi?q=runescape&op=Search&age%5B%5D=&descriptor%5B%5D=&publisher=Jagex+Ltd&platform%5B%5D=&release_year%5B%5D=&page=1&form_build_id=form-5Nc7D2ScBDuiMzP9F2ffxljtiSLFY38thQpDSDwRrq0&form_id=pegi_search_form')} className="img-fluid" src={pegi_purchase} />
      </div>
      <div>
      <div className="footer-bottom">
        <span>In-game Purchases (Includes Random Items)</span>

       
      </div>
      <div className="container pt-4 d-flex justify-content-center">
     <section class="mb-4">
     <img className="img-fluid" src ={facebook}/>
        <img className="img-fluid" src ={instergram}/>
        <img className="img-fluid" src ={discord}/>
        <img className="img-fluid" src ={youtube}/>
     </section>
      </div>
      </div>
    </div>
  );
}

export default index;
