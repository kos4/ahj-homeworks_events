export default class GamePlay {
  constructor(size) {
    this.size = size;
    this.interval = undefined;
  }

  init() {
    const field = document.querySelector(".game__playing-field");
    field.addEventListener("click", this.onClick.bind(this));
    this.interval = setInterval(this.setPosition.bind(this), 1000);
  }

  setPosition() {
    const html = {
      element: document.createElement("div"),
      cells: document.querySelectorAll(".game__playing-field-cell"),
    };

    html.element.classList.add("game__target");
    let prevPosition = this.getPrevPosition(html.cells);
    const numberCell = this.getRandomNumber(0, this.size - 1, prevPosition);

    if (prevPosition !== null) {
      html.cells[prevPosition].innerHTML = "";
    }

    html.cells[numberCell].appendChild(html.element);
  }

  getPrevPosition(cells) {
    let result = null;

    for (let i = 0; i < cells.length; i++) {
      if (cells[i].hasChildNodes()) {
        result = i;
        break;
      }
    }

    return result;
  }

  getRandomNumber(min, max, prev = null) {
    if (prev === null) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    } else {
      let result = null;

      do {
        result = Math.floor(Math.random() * (max - min + 1) + min);
      } while (result === prev);

      return result;
    }
  }

  onClick(e) {
    const _element = e.target;
    const _success = document.querySelector(".game__player-result-success");
    let _successValue = Number(_success.textContent);
    const _fail = document.querySelector(".game__player-result-fail");
    let _failValue = Number(_fail.textContent);

    if (_element.classList.contains("game__target")) {
      _element.remove();
      _successValue += 1;
      _success.textContent = _successValue;
    } else {
      _failValue += 1;
      _fail.textContent = _failValue;
    }

    this.checkGame(_successValue, _failValue, 5);
  }

  checkGame(_successValue, _failValue, endGame) {
    if (_successValue === endGame && _successValue > _failValue) {
      this.gameEnd(true);
    } else if (_failValue >= endGame) {
      this.gameEnd(false);
    }
  }

  gameEnd(result) {
    clearInterval(this.interval);
    const _field = document.querySelector(".game__playing-field");

    if (result) {
      _field.innerHTML = `
        <div class="game__win">Поздравляем, вы победили!</div>
      `;
    } else {
      _field.innerHTML = `
        <div class="game__over">Увы, но вы проиграли.</div>
      `;
    }
  }

  gameOver() {}
}
