"use strict";
const root = document.querySelector("#root");

const obj = {
  id: 1,
  name: "Boise Greenbelt Trail",
  description: "rhwdedjsl",
  profilePicture:
    "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5615998029001/a6c728cd-a576-4efb-93ed-1c83cfdc73f6/3bb237b3-a7f3-4b67-b899-88f6909df3bb/1280x720/match/image.jpg",
};
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const colors = ["red", "coral", "lightblue", "lightgreen", "yellow", "brown"];
function createColor(colors) {
  for (let i = 0; i < colors.length; i++) {
    return colors[getRandomInt(colors.length)];
  }
}
function createUserCard({ name, description, profilePicture }) {
  const userCard = document.createElement("li");
  userCard.classList.add("cardWrapper");

  const article = document.createElement("article");
  article.classList.add("userCard");

  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("imgWrapper");

  const initials = document.createElement("div");
  initials.classList.add("initials");
  initials.style.background = createColor(colors);
  initials.textContent = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  imgWrapper.append(initials);

  const img = document.createElement("img");
  img.classList.add("img");
  img.setAttribute("src", profilePicture);
  img.setAttribute("alt", name);
  img.addEventListener("error", (e) => {
    const { target } = e;
    target.style.display = "none";
  });

  const cardName = document.createElement("h2");
  cardName.classList.add("cardName");
  cardName.textContent = name;

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("cardDescription");
  cardDescription.textContent = description;
  /* cardDescription.append(document.createTextNode(description));*/

  root.append(userCard);
  userCard.append(article);
  article.append(imgWrapper, cardName, cardDescription);
  imgWrapper.append(img);

  return userCard;
}
createUserCard(obj);

const userCards = data.map((user) => createUserCard(user));
root.append(...userCards);

console.log(createColor(colors));
