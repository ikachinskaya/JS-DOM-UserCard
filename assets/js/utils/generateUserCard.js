/**
 * Создает карточку на основании объекта пользователя
 * @param {object} userObj объект с данными пользователя
 * @returns {HTMLLIElement} верстка карточки
 */
function generateUserCard(userObj) {
  const { firstName, lastName, contacts } = userObj;

  const linkWrapper = createElement(
    "div",
    { classNames: ["linkWrapper"] },
    ...generateLinks(contacts)
  );

  const cardName = createElement(
    "h2",
    { classNames: ["cardName"] },
    document.createTextNode(`${firstName} ${lastName}`.trim())
  );

  const cardDescription = createElement(
    "p",
    { classNames: ["cardDescription"] },
    document.createTextNode(
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Accusantium quod impedit quae sit tempora nihil deleniti ratione sed praesentium id?`
    )
  );

  const imgWrapper = createImageWrapper(userObj);

  const article = createElement(
    "article",
    { classNames: ["userCard"] },
    imgWrapper,
    cardName,
    cardDescription,
    linkWrapper
  );

  const userCard = createElement(
    "li",
    { classNames: ["cardWrapper"] },
    article
  );
  return userCard;
}
