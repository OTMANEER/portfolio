import "./testimonials.scss"; 
export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Ayoub Oufadel",
      title: "Phd UM6P (Fondation OCP)",
      img:"assets/oufadel",
      icon: "assets/Twitter.png",
      desc:
        "A very enthusiast student engineer, never give up from learning and asking good questions.",
    },
    {
      id: 2,
      name: "Riad ",
      title: "Co-Founder of CPRT",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Un élève ingénieur très dynamique, ambitionné par son domaine et polyvalent.",
      featured: true,
    },
    {
      id: 3,
      name: "Fiver Guest",
      title: "Freelancer",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Super communication, fast delivery time, always happy again. The developer understands what he is doing and I would always recommend him !",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
