import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer"," Student"," Engineer","Freelancer"," Java Enthusiast","ML Enthusiast"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>OTMANE ER-RAGRAGUI</h1>
          <p> 
      
 <h4>A software student engineer Looking for a 2-years apprenticeship contract starts in September 2021.</h4>
<div> </div>
 In the Major/areas of:         <div> </div>
- Web developer preferred in Java JavaScript or C #.         <div> </div>
- data analyst (Big Data developer, Data scientist).         <div> </div>
- Machine learning developer.         <div> </div>
I am open to any possible proposal.<div> </div>
              <h3><span ref={textRef}></span></h3>
          </p>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
