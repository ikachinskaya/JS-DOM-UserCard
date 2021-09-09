"use strict";

const cardsContainer = document.querySelector("#root");
const dataJson = fetch("./assets/js/users.json")
  .then((response) => response.json())
  .then((dataJson) => {
    const userCards = dataJson.map((user) => generateUserCard(user));
    cardsContainer.append(...userCards);
  })
  .catch((err) => {
    throw new Error("Error");
  });
//"http://192.168.1.149:3000/api/users"
