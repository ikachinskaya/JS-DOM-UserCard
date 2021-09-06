/**
 * Создает обертку картинки и картинку на основании объекта
 * @param {object } userObj объект с данными пользователя
 * @returns {HTMLElement} верстка оберкти картинки и картинки
 */
function createImageWrapper(userObj) {
  const { id, profilePicture, firstName, lastName } = userObj;
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

  const initials = createElement(
    "div",
    { classNames: ["initials"] },
    document.createTextNode(
      `${firstName} ${lastName}`
        .trim()
        .split(" ")
        .map((word) => word[0])
        .join(" ")
    )
  );
  initials.style.background = stringToColor(`${firstName} ${lastName}`.trim());
  const imgWrapper = createElement(
    "div",
    { classNames: ["imgWrapper"], attrs: { id: `wrapper${id}` } },
    initials
  );
  return imgWrapper;
}
