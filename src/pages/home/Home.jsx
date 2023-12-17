import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([])
  const [about, setAbout] = useState([]);
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

      fetch(
        "https://teknikinnavatsion.pythonanywhere.com/korxona/biz_haqimizda/",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          setAbout(JSON.parse(result).data);
        })
        .catch((error) => console.log("error", error));


  };

  useEffect(() => {
    getData();
  }, []);

  
  
console.log(about);

  return (
    <div className="home">
      <div className="container">
        <div className="serviceCard">
          {data?.map((item) => {
            return (
              <Link to={"/services/" + item.id} className="card">
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
          <div className="info">
            {about.length>0 && (
              <iframe
                width="100%"
                height="100%"
                src={about[0].video_url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
