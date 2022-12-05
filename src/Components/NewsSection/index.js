import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
 
import gielinor from "../assets/images/stem.png";
import Steamlmagery from "../assets/images/image_13.png";
import qna from '../assets/images/image_11.png'
import feedback from '../assets/images/image_12.png'
import Card from "react-bootstrap/Card";
import '../assets/styles/_styles.scss'
function NewsSection() {
  const data = [
    {
      id: 1,
      title: "Recent Game Outages  ",
      date: "01 December 2022",
      content:
        "This is a brief summary of everything we've shared regarding recent service issues, all in one place!",
      image: gielinor,
    },
    {
      id: 2,
      title: "Gielinor Gazette ",
      date: "02 December 2022",
      content:
        "Postie Pete is back as we talk about Game Jam II and what you want to see in the future of the gazette! ",
      image: Steamlmagery,
    },
    {
      id: 3,
      title: "Your Feedback, Our Next Steps",
      date: "30 November 2022",
      content:
        "Take a look at our next steps following yesterday's game update.",
      image: feedback,
    },
    {
      id: 3,
      title: "Q&A Summary",
      date: "30 November 2022",
      content:
        "Catch up with what you missed on our last livestream!",
      image: qna,
    },
  ];
 
  return (
    <div className="news_card">
       
        
       <Row>
          {data.map((news) => (
            <Col className="mb-3" sm ={4} md = {6} lg ={6} xl ={3} xxl ={3}>
              <Card  data-aos="fade-up" className ="news_cards" style={{ width: "322px", height: "417px"  }}>
                <Card.Body>
                  <Card.Title><img className = "img-fluid"src={news.image}/></Card.Title>
                  <div className="mt-5">
                  <Card.Subtitle className="mb-2 title text-center">
                    {news.title}
                  </Card.Subtitle>
                  <Card.Text className="content text-center">
                   {news.content}
                  </Card.Text>
                   
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
      
      
    </div>
  );
}

export default NewsSection;
