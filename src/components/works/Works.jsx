import { useState } from "react";
import "./works.scss"; 

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Java Development, ENSAF",
      desc:
        "-Desktop Java Application using Java JavaFX Mysql - Dealing with QCM tests texts and videos - Doing statistics, presentation Lines, Pie, Charts - Handle more than 10 000 students.",
        img: "",
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
        "-WaterShed Algorithm in C. -WordPress Websites. -JavaScript Templates.- Youtube Video recording Java,Assembly. - Image processing algorithms, Data compression  decompression using binary trees, Anonymization and Pseudoanonymization of sensitive data.-Development of Java Desktop application for inventory management, handle more than 400k Objects ",
       
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
              <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
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
