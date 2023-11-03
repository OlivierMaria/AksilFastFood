import React, { useState } from "react";
import "./menu.css";
import { AksilMenu } from "./AksilMenu.js";

function Menu() {
  const [currentActive, setCurrentActive] = useState("tacos");
  const [arr, setArr] = useState(AksilMenu);
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = AksilMenu.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return ZZZ === buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <div className="aksil__menu-container section__margin">
      <h4>Notre irrésistible menu :</h4>
      <h2>
        Menu d'Aksil Fast<span className="aksil__about-span">Food</span>
      </h2>
      <div className="aksil__menu">
        <div className="aksil__menu-left_button">
          <button
            onClick={() => {
              setCurrentActive("all");
              setArr(AksilMenu);
            }}
            className={currentActive === "all" ? "active" : null}
          >
            Tout
          </button>
          <button
            onClick={() => {
              handleClick("tacos");
            }}
            className={currentActive === "tacos" ? "active" : null}
          >
            Tacos
          </button>
          <button
            onClick={() => {
              handleClick("pizza");
            }}
            className={currentActive === "pizza" ? "active" : null}
          >
            Pizza
          </button>
          <button
            onClick={() => {
              handleClick("sandwiches");
            }}
            className={currentActive === "sandwiches" ? "active" : null}
          >
            Sandwiches
          </button>
          <button
            onClick={() => {
              handleClick("burger");
            }}
            className={currentActive === "burger" ? "active" : null}
          >
            Burger
          </button>
          <button
            onClick={() => {
              handleClick("assiettes");
            }}
            className={currentActive === "assiettes" ? "active" : null}
          >
            Assiettes
          </button>
          <button
            onClick={() => {
              handleClick("paninis");
            }}
            className={currentActive === "paninis" ? "active" : null}
          >
            Paninis
          </button>
        </div>
        <div className="aksil__menu-right_card">
          {arr.map((item) => {
            return (
              <div key={item.id} className="aksil__menu-card card">
                <div className="card-content">
                  <img src={item.imgPath} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>Prix : {item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
