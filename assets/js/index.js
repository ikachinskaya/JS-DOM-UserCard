"use strict";
const cardsContainer = document.querySelector("#root");

const userCards = data.map((user) => createUserCard(user));
cardsContainer.append(...userCards);

function createUserCard({ name, description, profilePicture }) {
  const img = createElement("img", {
    classNames: ["img"],
    attrs: { src: profilePicture, alt: name },
  });
  img.addEventListener("error", deleteHandler);

  const cardName = createElement(
    "h2",
    { classNames: ["cardName"] },
    document.createTextNode(name)
  );

  const cardDescription = createElement(
    "p",
    {
      classNames: ["cardDescription"],
    },
    document.createTextNode(description)
  );

  const initials = createElement(
    "div",
    { classNames: ["initials"] },
    document.createTextNode(
      name
        .split(" ")
        .map((word) => word[0])
        .join("")
    )
  );
  initials.style.background = stringToColour(name);

  const imgWrapper = createElement(
    "div",
    { classNames: ["imgWrapper"] },
    initials,
    img
  );

  const article = createElement(
    "article",
    { classNames: ["userCard"] },
    imgWrapper,
    cardName,
    cardDescription
  );

  const userCard = createElement(
    "li",
    { classNames: ["cardWrapper"] },
    article
  );

  return userCard;
}

function createElement(tagName, options, ...children) {
  const { classNames = [], attrs = {}, id, onClick = () => {} } = options;
  const element = document.createElement(tagName);
  element.classList.add(...classNames);

  const attributesTuples = Object.entries(attrs);

  for (const [key, value] of attributesTuples) {
    element.setAttribute(key, value);
  }
  if (id) {
    element.id = id;
  }

  element.onClick = onClick;

  element.append(...children);
  return element;
}
/* HANDLERS */

function deleteHandler(e) {
  const { target } = e;
  target.style.visibility = "hidden";
}

/* UTILS */
function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
}
