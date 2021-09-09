/**
 * Создает HTML-элемент
 * @param {string} tagName имя элемента
 * @param {object} options объект настроек
 * @param {string[]} options.classNames строки с именами CSS классов
 * @param {object} options.attr объект с атрибутами
 * @param {object} options.listener объект со слушателями
 * @param {Function} options.onclick функция обработки события клика
 * @param  {Node[]} children дочерние DOM-узлы
 * @returns {HTMLElement} созданный элемент
 */
function createElement(tagName, options, ...children) {
  const {
    classNames = [],
    attrs = {},
    listener = {},
    onClick = () => {},
  } = options;
  const element = document.createElement(tagName);
  element.classList.add(...classNames);

  const attributesTuples = Object.entries(attrs);

  for (const attribute of attributesTuples) {
    const [key, value] = attribute;
    element.setAttribute(key, value);
  }

  const listenerTuples = Object.entries(listener);

  for (const listener of listenerTuples) {
    const [key, value] = listener;
    element.addEventListener(key, value);
  }

  element.onClick = onClick;

  element.append(...children);
  return element;
}
