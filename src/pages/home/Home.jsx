import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState([])
  const getData = () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };

    fetch(
      "https://teknikinnavatsion.pythonanywhere.com/category/all/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setData(JSON.parse(result).data);
       })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="home">
      <div className="container">
        <div className="serviceCard">
          {data?.map((item)=>{
            return (
              <Link to={"/services/"+item.id} className="card">
                <img
                  src={
                    "https://teknikinnavatsion.pythonanywhere.com/" + item.file
                  }
                  alt=""
                />
                <div>
                  <h2>{item.name}</h2>
                </div>
              </Link>
            );
          })}
          
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
