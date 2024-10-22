import trolFace from "../assets/Troll Face.png";
import "../header.css";

export default function Header() {
  return (
    <section className="header-wrapper">
      <div className="wrapper">
        <div className="image">
          <img src={trolFace} alt="" />
        </div>
        <div className="header-text">
          <h3>Meme Generator</h3>
        </div>
      </div>
    </section>
  );
}
