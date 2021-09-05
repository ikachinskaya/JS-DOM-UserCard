/**
 * Создает карточку на основании объекта пользователя
 * @param {object} userObj объект с данными пользователя
 * @returns {HTMLLIElement} верстка карточки
 */
function generateUserCard(userObj) {
  const { id, firstName, lastName, description, profilePicture } = userObj;

  const img = createElement("img", {
    classNames: ["img"],
    attrs: {
      src: profilePicture,
      alt: `${firstName} ${lastName}`,
      "data-id": id,
    },
  });
  img.addEventListener("error", deleteHandler);
  img.addEventListener("load", imageLoadHandler);

  const cardName = createElement(
    "h2",
    { classNames: ["cardName"] },
    document.createTextNode(`${firstName} ${lastName}`)
  );

  const cardDescription = createElement(
    "p",
    { classNames: ["cardDescription"] },
    document.createTextNode(
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, quis."
    )
  );

  const initials = createElement(
    "div",
    { classNames: ["initials"] },
    document.createTextNode(
      `${firstName} ${lastName}`
        .trim()
        .split(" ")
        .map((word) => word[0])
        .join(" ")

      // name.trim()
      // .split(" ")
      // .map((word) => word[0])
      // .join(" ") || "Unknown"
    )
  );
  initials.style.background = stringToColor(firstName.trim());

  const imgWrapper = createElement(
    "div",
    { classNames: ["imgWrapper"], attrs: { id: `wrapper${id}` } },
    initials
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
