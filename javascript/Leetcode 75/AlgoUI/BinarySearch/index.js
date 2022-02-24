function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const transition = (type) => (targetElement, c) => {
  return new Promise((resolve) => {
    targetElement.addEventListener(
      'transitionend',
      () => {
        resolve(targetElement);
      },
      { once: true }
    );
    if (type === 'add') {
      targetElement.classList.add(...c);
      return;
    }
    if (type === 'remove') {
      targetElement.classList.remove(c);
      return;
    }
  });
};

const transitionAdd = transition('add');
const transitionRemove = transition('remove');

const start = async () => {
  const getRandomValue = () => {
    return randomIntFromInterval(0, 79);
  };

  const numOfDigits = 20;
  const randomStartValue = getRandomValue();

  const numbersContainer = document.querySelector('#numbers');

  const selectElement = document.querySelector('.value-select');

  for (let i = 0; i <= 20; i++) {
    const boxContainer = document.createElement('div');
    const box = document.createElement('div');
    const indexBox = document.createElement('div');
    const boxHighlight = document.createElement('div');
    const option = document.createElement('option');

    boxHighlight.classList.add('box-highlight');
    boxHighlight.style.display = 'flex';
    boxHighlight.style.justifyContent = 'center';
    boxHighlight.style.alignItems = 'center';
    boxHighlight.textContent = i + randomStartValue;

    boxContainer.classList.add('box-container');
    box.classList.add('box');
    box.dataset.value = i + randomStartValue;
    box.dataset.index = i;
    box.textContent = i + randomStartValue;

    indexBox.classList.add('index-box');
    indexBox.dataset.index = i;
    indexBox.textContent = i;

    box.appendChild(boxHighlight);
    boxContainer.appendChild(box);
    boxContainer.appendChild(indexBox);

    numbersContainer.appendChild(boxContainer);

    option.value = i + randomStartValue;
    option.textContent = i + randomStartValue;

    selectElement.appendChild(option);
  }
  const search = async (searchValue, left, right) => {
    const getMidVal = (midIndex) => {
      return parseInt(
        document.querySelector(`.box[data-index='${midIndex}']`).dataset.value
      );
    };

    const target = parseInt(searchValue);
    // let left = 0;
    // let right = numOfDigits - 1;
    let mid = Math.floor((left + right) / 2);
    let midVal = getMidVal(mid);

    const allBoxes = Array.from(document.querySelectorAll('.box'));
    const midBoxElement = document.querySelector(`.box[data-index="${mid}"]`);
    const midBoxElementHighlight =
      midBoxElement.querySelector('.box-highlight');

    const filteredBoxes = allBoxes.filter((element) => {
      const elementIndex = parseInt(element.dataset.index);
      return (
        elementIndex <= right && elementIndex >= left && elementIndex !== mid
      );
    });

    const aPromise = transitionAdd(midBoxElementHighlight, ['active']);

    midBoxElementHighlight.classList.add('box-highlight-mid');
    await Promise.all(
      filteredBoxes
        .map(async (box) => {
          const boxHighlightElement = box.querySelector('.box-highlight');
          boxHighlightElement.classList.add('box-highlight-range');
          await transitionAdd(boxHighlightElement, ['active']);
          return;
        })
        .concat(aPromise)
    );

    if (midVal === target) {
      return mid;
    }

    if (target < midVal) {
      await Promise.all(
        filteredBoxes
          .map(async (box) => {
            const boxHighlightElement = box.querySelector('.box-highlight');
            await transitionRemove(boxHighlightElement, 'active');
            boxHighlightElement.classList.remove('box-highlight-range');
            return;
          })
          .concat(transitionRemove(midBoxElementHighlight, 'active'))
      );
      midBoxElementHighlight.classList.remove('box-highlight-mid');
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
      midVal = getMidVal(mid);

      return await search(target, left, right);
    }
    if (target > midVal) {
      await Promise.all(
        filteredBoxes
          .map(async (box) => {
            const boxHighlightElement = box.querySelector('.box-highlight');
            await transitionRemove(boxHighlightElement, 'active');
            boxHighlightElement.classList.remove('box-highlight-range');
            return;
          })
          .concat(transitionRemove(midBoxElementHighlight, 'active'))
      );
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
      midVal = getMidVal(mid);
      return await search(target, left, right);
    }
    const resultContainer = document.querySelector('#result-container');
    resultContainer.textContent = `Index of search value is: ${mid}`;
  };

  const searchForm = document.querySelector('#search-form');
  const selectError = document.querySelector('#select-error');
  const searchButton = document.querySelector('#search-button');

  selectElement.addEventListener('change', (e) => {
    const value = e.target.value;

    if (value !== '') {
      selectError.textContent = '';
    }
  });

  // let abortController;

  let searching = false;

  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (searching) {
      return;
    }
    const formData = new FormData(e.target);
    const searchValue = formData.get('search-value');
    if (searchValue === '') {
      selectError.textContent = 'Please select a value';
      return;
    }

    const allBoxHighlight1 = Array.from(
      document.querySelectorAll('.box .box-highlight.box-highlight-range')
    );
    const allBoxHighlight2 = Array.from(
      document.querySelectorAll('.box .box-highlight.box-highlight-mid')
    );

    const allBoxHighlight = [...allBoxHighlight1, ...allBoxHighlight2];

    // debugger;

    if (allBoxHighlight.length > 0) {
      await Promise.all(
        allBoxHighlight.map(async (box) => {
          if (box.classList.contains('active')) {
            await transitionRemove(box, 'active');
          }
          if (box.classList.contains('box-highlight-mid')) {
            box.classList.remove('box-highlight-mid');
          }
          if (box.classList.contains('box-highlight-range')) {
            box.classList.remove('box-highlight-range');
          }
        })
      );
    }

    // if (abortController !== undefined) {
    //   abortController.abort();
    // }
    // abortController = new AbortController();
    // const abortSignal = abortController.signal;

    // abortController.abort();

    searchButton.setAttribute('disabled', 'true');
    await search(parseInt(searchValue), 0, numOfDigits);
    searchButton.removeAttribute('disabled');
    searching = false;
  });
};

start();
