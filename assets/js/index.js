"use strict";
const cardsContainer = document.querySelector("#root");

const userCards = data.map((user) => generateUserCard(user));
cardsContainer.append(...userCards);


