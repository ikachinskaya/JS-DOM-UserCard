"use strict";

const cardsContainer = document.querySelector("#root");
const dataJson = fetch("http://192.168.1.149:3000/api/users")
  .then((response) => response.json())
  .then((dataJson) => {
    const userCards = dataJson.map((user) => generateUserCard(user));
    cardsContainer.append(...userCards);   
  });

  

// const userCards = data.map((user) => generateUserCard(user));
 