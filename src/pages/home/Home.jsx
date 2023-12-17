import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="serviceCard">
          <Link to={"/services/page"} className="card">
            <img src="./public/imgs/service1.jpg" alt="" />
            <div>
              <h2>Резервуар вертикальный стальной РВС</h2>
            </div>
          </Link>
          <Link to={"/services/page"} className="card">
            <img src="./public/imgs/service2.jpg" alt="" />
            <div>
              <h2>Резервуары горизонтальные стальные (РГС, РГСН, РГСП)</h2>
            </div>
          </Link>
          <Link to={"/services/page"} className="card">
            <img src="./public/imgs/service3.jpg" alt="" />
            <div>
              <h2>Модульные АЗС</h2>
            </div>
          </Link>
          <Link to={"/services/page"} className="card">
            <img src="./public/imgs/service4.jpg" alt="" />
            <div>
              <h2>Автоматическая блочная (мини) АЗС</h2>
            </div>
          </Link>
          <Link to={"/services/page"} className="card">
            <img src="./public/imgs/service5.jpg" alt="" />
            <div>
              <h2>Контейнерные АЗС (КАЗС)</h2>
            </div>
          </Link>
          <Link to={"/services/page"} className="card">
            <img src="./public/imgs/service6.jpg" alt="" />
            <div>
              <h2>Силосъг (для цемента, зерна, муки и т.д.)</h2>
            </div>
          </Link>
          <Link to={"/services/page"} className="card">
            <img src="./public/imgs/service7.jpg" alt="" />
            <div>
              <h2>Емкости подземные и наземные.</h2>
            </div>
          </Link>
          <Link to={"/services/page"} className="card">
            <img src="./public/imgs/service8.jpg" alt="" />
            <div>
              <h2>
                Силосы стальные для цемента и муки до 150 м<sup>3</sup>
              </h2>
            </div>
          </Link>
        </div>
        <div className="about">
          <h1>о нас</h1>
          <div className="info">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
