export default class PlayingField {
  constructor(title, size) {
    this.size = size;
    this.title = title;
    this.container = document.querySelector(".game");
  }

  init() {
    this.drawFiled();
  }

  drawFiled() {
    const html = {
      title: document.createElement("h1"),
      field: document.createElement("div"),
      cell: '<div class="game__playing-field-cell"></div>',
    };

    html.title.classList.add("game__title");
    html.title.innerHTML = this.title;
    this.container.appendChild(html.title);
    this.container.insertAdjacentHTML("beforeend", this.renderPlayerResult());
    html.field.classList.add("game__playing-field");

    for (let i = 0; i < this.size; i++) {
      html.field.insertAdjacentHTML("beforeend", html.cell);
    }

    this.container.appendChild(html.field);
  }

  renderPlayerResult() {
    return `
      <div class="game__player-result-block">
          <div class="game__player-result">
            <div class="game__player-result-title">Попадания:</div>
            <div class="game__player-result-success">0</div>
          </div>
          <div class="game__player-result">
            <div class="game__player-result-title">
              Промахи:
            </div>
            <div class="game__player-result-fail">0</div>
          </div>
        </div>
    `;
  }
}
