function createElement({
    elementType,
    clickHandler,
    innerText,
    type,
    title,
    value,
    name,
    dataset = {},
  } = {}) {
    const elem = document.createElement(elementType);

    Object.keys(dataset).forEach((dataSetKey) => {
      elem.dataset[dataSetKey] = dataset[dataSetKey];
    });

    if (clickHandler) elem.addEventListener('click', clickHandler);
    if (innerText) elem.innerText = innerText;
    if (name) elem.name = name;
    if (type) elem.type = type;
    if (value) elem.value = value;
    if (title) elem.title = title;

    return elem;
  }

  const getEntryForm = (key) =>
    document.querySelector(`form[name="${key}"]`);

  function saveEntry() {
    const key = this.dataset.key;
    // not great
    // const newValue = this.parentElement.entryValue.value; // value from an input with name entryValue
    const entryForm = getEntryForm(key);
    localStorage.setItem(key, entryForm.entryValue.value);
  }

  function deleteEntry() {
    const key = this.dataset.key;
    localStorage.removeItem(key);
    // better
    const entryForm = getEntryForm(key);
    entryForm.remove();
  }

  function drawEntry(key) {
    const entryForm = createElement({ elementType: 'form', name: key });
    entryForm.appendChild(
      createElement({ elementType: 'span', innerText: key, title: key })
    );
    entryForm.appendChild(
      createElement({
        elementType: 'input',
        name: 'entryValue',
        value: localStorage.getItem(key),
      })
    );

    entryForm.appendChild(
      createElement({
        elementType: 'button',
        type: 'button',
        innerText: '💾',
        clickHandler: saveEntry,
        dataset: { key },
      })
    );

    entryForm.appendChild(
      createElement({
        elementType: 'button',
        type: 'button',
        innerText: '❌',
        clickHandler: deleteEntry,
        dataset: { key },
      })
    );

    entries.appendChild(entryForm);
  }

  function drawEntries() {
    Object.keys(localStorage).forEach((key) => {
      drawEntry(key);
    });
  }

  function validateKey(key) {
    // check if key is not empty
    if (key === '') {
      throw new Error('key cannot be empty!');
    }
    // check if key not taken
    if (typeof localStorage.getItem(key) === 'string') {
      throw new Error('key is already taken!');
    }
  }

  function itemFormHandler(e) {
    e.preventDefault();
    // read key and value
    const {
      inputKeyName: { value: key },
      inputValueName: { value },
    } = this;

    try {
      validateKey(key);
    } catch (e) {
      alert(e);
      return;
    }

    localStorage.setItem(key, value);
    drawEntry(key);
  }

  function clearEntries() {
    localStorage.clear();
    entries.innerHTML = '';
  }

  window.addEventListener('load', () => {
    const clearButton = document.querySelector('#clearButton');
    const itemForm = document.querySelector('#itemForm');
    const entries = document.querySelector('#entries');

    // handler for form
    itemForm.addEventListener('submit', itemFormHandler);
    // handler for clear
    clearButton.addEventListener('click', clearEntries);

    // draw entries
    drawEntries();
  });