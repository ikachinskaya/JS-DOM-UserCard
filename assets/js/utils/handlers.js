/**
 * Обработчик для удаления сломанных картинок
 */
function deleteHandler({ target }) {
  target.remove();
}

/**
 * Обработчик для прикрепления картинок к обертке
 * @param {Event} e
 * @returns
 */
function imageLoadHandler(e) {
  const {
    target,
    target: {
      dataset: { id },
    },
  } = e;
  document.getElementById(`wrapper${id}`).append(target);
}
/**
 * Слушатель для смены стилей картинки
 * @param {*} e 
 */
function setStyleUserCard(e) {
  const { currentTarget } = e;
  currentTarget.classList.toggle("cardWrapperClick");
}
