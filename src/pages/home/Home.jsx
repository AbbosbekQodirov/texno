import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import img1 from "../../../public/imgs/service1.jpg"
import img2 from "../../../public/imgs/service2.jpg"
import img3 from "../../../public/imgs/service3.jpg"
import img4 from "../../../public/imgs/service4.jpg"
import img5 from "../../../public/imgs/service5.jpg"
import img6 from "../../../public/imgs/service6.jpg"
import img7 from "../../../public/imgs/service7.jpg";
import img8 from "../../../public/imgs/service8.jpg";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="serviceCard">
          <Link to={"/services/page"} className="card">
            <img src={img1} alt="" />
            <div>
              <h2>Резервуар вертикальный стальной РВС</h2>
            </div>
          </Link>
          <Link to={"/services/page"} className="card">
            <img src={img2} alt="" />
            <div>
              <h2>Резервуары горизонтальные стальные (РГС, РГСН, РГСП)</h2>
            </div>
          </Link>
          <Link to={"/services/page"} className="card">
            <img src={img3} alt="" />
            <div>
              <h2>Модульные АЗС</h2>
            </div>
          </Link>
          <Link to={"/services/page"} className="card">
            <img src={img4} alt="" />
            <div>
              <h2>Автоматическая блочная (мини) АЗС</h2>
            </div>
          </Link>
          <Link to={"/services/page"} className="card">
            <img src={img5} alt="" />
            <div>
              <h2>Контейнерные АЗС (КАЗС)</h2>
            </div>
          </Link>
          <Link to={"/services/page"} className="card">
            <img src={img6} alt="" />
            <div>
              <h2>Силосъг (для цемента, зерна, муки и т.д.)</h2>
            </div>
          </Link>
          <Link to={"/services/page"} className="card">
            <img src={img7} alt="" />
            <div>
              <h2>Емкости подземные и наземные.</h2>
            </div>
          </Link>
          <Link to={"/services/page"} className="card">
            <img src={img8} alt="" />
            <div>
              <h2>
                Силосы стальные для цемента и муки до 150 м<sup>3</sup>
              </h2>
            </div>
          </Link>
        </div>
        <div className="about">
          <h1>о нас</h1>
          <div className="info"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
