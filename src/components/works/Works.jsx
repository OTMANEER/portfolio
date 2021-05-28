import { useState } from "react";
import "./works.scss"; 

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Java Development, ENSA Fes",
      desc:
        "-Desktop Java Application using Java JavaFX Mysql - Dealing with QCM tests texts and videos - Doing statistics, presentation Lines, Pie, Charts - Handle more than 10 000 students.",
  },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "JavaScript Developer, CPRT",
      desc:
        "- Web application for CPRT Morocco used locally - Vanilla JavaScript and Sass - Installation and management of surveillance cameras ",
       },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Freelancer",
      desc:
        "- Implementation of WaterShed Algorithm in C. -Development of WordPress Websites. - Development of JavaScript Templates.- Youtube Video recording Java,Assembly etc.- Implementation of Image processing algorithms, Data compression/ decompression using binary trees, Anonymization and Pseudo- anonymization of sensitive data.-Development of Java Desktop application for inventory management, handle more than 400k Objects, Optimal implementation",
       
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span> <a href="https://github.com/OTMANEER" target = "_blank"> Projects</a> </span>
                </div>
              </div>
              <div className="right">
               
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
