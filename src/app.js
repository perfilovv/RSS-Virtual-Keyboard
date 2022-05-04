window.onload = () => {
  if (window.localStorage.getItem('language') === null) {
    window.localStorage.setItem('language', 'en');
  }
  const lang = window.localStorage.getItem('language');
  document.querySelector('body').style.display = 'flex';
  document.querySelector('body').style.flexDirection = 'column';
  document.querySelector('body').style.justifyContent = 'center';

  const input = document.createElement('textarea');
  input.style.width = '60%';
  input.style.height = '300px';
  input.style.margin = '0 auto';
  input.style.fonSize = '32px';
  document.body.append(input);
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  keyboard.style.display = 'flex';
  document.body.append(keyboard);
  const firstRow = [
    ['backquote', '`', '~', 'ё', 'Ё'],
    ['digit1', '1', '!', '1', '!'],
    ['digit2', '2', '@', '2', '"'],
    ['digit3', '3', '#', '3', '№'],
    ['digit4', '4', '$', '4', ';'],
    ['digit5', '5', '%', '5', '%'],
    ['digit6', '6', '^', '6', ':'],
    ['digit7', '7', '&', '7', '?'],
    ['digit8', '8', '*', '8', '*'],
    ['digit9', '9', '(', '9', '('],
    ['digit0', '0', ')', '0', ')'],
    ['minus', '-', '_', '-', '_'],
    ['equals', '=', '', '0', ')'],
    ['backspace', 'backspace', 'backspace', 'backspace', 'backspace']];
  const secondRow = [
    ['tab', 'tab', 'tab', 'tab', 'tab'],
    ['keyQ', 'q', 'Q', 'й', 'Й'],
    ['keyW', 'w', 'W', 'ц', 'Ц'],
    ['keyE', 'e', 'E', 'у', 'У'],
    ['keyR', 'r', 'R', 'к', 'К'],
    ['keyT', 't', 'T', 'е', 'Е'],
    ['keyY', 'y', 'Y', 'н', 'Н'],
    ['keyU', 'u', 'U', 'г', 'Г'],
    ['keyI', 'i', 'I', 'ш', 'Ш'],
    ['keyO', 'o', 'O', 'щ', 'Щ'],
    ['keyP', 'p', 'P', 'з', 'З'],
    ['bracketLeft', '[', '{', 'х', 'Х'],
    ['bracketRight', ']', '}', 'ъ', 'Ъ'],
    ['delete', 'delete', 'delete', 'delete', 'delete']];
  const thirdRow = [
    ['capslock', 'capslock', 'capslock', 'capslock', 'capslock'],
    ['keyA', 'a', 'A', 'ф', 'Ф'],
    ['keyS', 's', 'S', 'ы', 'Ы'],
    ['keyD', 'd', 'D', 'в', 'В'],
    ['keyF', 'f', 'F', 'а', 'А'],
    ['keyG', 'g', 'G', 'п', 'П'],
    ['keyH', 'h', 'H', 'р', 'Р'],
    ['keyJ', 'j', 'J', 'о', 'О'],
    ['keyK', 'k', 'K', 'л', 'Л'],
    ['keyL', 'l', 'L', 'д', 'Д'],
    ['semicolon', ';', ':', 'ж', 'Ж'],
    ['quote', '\'', '"', 'э', 'Э'],
    ['backslash', '\\', '|', '\\', '/'],
    ['enter', 'enter', 'enter', 'enter', 'enter'],
  ];
  const fourthRow = [
    ['shiftLeft', 'shift', 'shift', 'shift', 'shift'],
    ['keyZ', 'z', 'Z', 'я', 'Я'],
    ['keyX', 'x', 'X', 'ч', 'Ч'],
    ['keyC', 'c', 'C', 'с', 'С'],
    ['keyV', 'v', 'V', 'м', 'М'],
    ['keyB', 'b', 'B', 'и', 'И'],
    ['keyN', 'n', 'N', 'т', 'Т'],
    ['keyM', 'm', 'M', 'ь', 'Ь'],
    ['comma', ',', '<', 'б', 'Б'],
    ['period', '.', '>', 'ю', 'Ю'],
    ['slash', '/', '?', '.', ','],
    ['shiftRight', 'shift', 'shift', 'shift', 'shift']];
  const row = [];
  for (let i = 0; i < 5; i += 1) {
    row[i] = document.createElement('div');
    row[i].className = 'row';
    row[i].style.display = 'flex';
    row[i].style.justifyContent = 'center';
    document.body.append(row[i]);
  }
  const firstRowKeys = [];
  const secondRowKeys = [];
  const thirdRowKeys = [];
  const fourthRowKeys = [];

  class Key {
    constructor(name, enSpan, enShiftSpan, ruSpan, ruShiftSpan, parent) {
      this.name = name;
      this.enSpanValue = enSpan;
      this.enShiftSpanValue = enShiftSpan;
      this.ruSpanValue = ruSpan;
      this.ruShiftSpanValue = ruShiftSpan;
      this.parent = parent;
      this.createKey = () => {
        this.div = document.createElement('div');
        this.div.className = 'key';
        this.div.id = name;
        this.parent.append(this.div);
        this.enSpan = document.createElement('span');
        this.enSpan.innerHTML = this.enSpanValue;
        if (lang === 'en') {
          this.enSpan.className = 'show';
          this.curSpan = enSpan;
        } else {
          this.enSpan.className = 'hide';
        }
        this.div.append(this.enSpan);
        this.enShiftSpan = document.createElement('span');
        this.enShiftSpan.innerHTML = this.enShiftSpanValue;
        this.enShiftSpan.className = 'hide';
        this.div.append(this.enShiftSpan);
        this.ruSpan = document.createElement('span');
        this.ruSpan.innerHTML = this.ruSpanValue;
        if (lang === 'ru') {
          this.ruSpan.className = 'show';
          this.curSpan = ruSpan;
        } else {
          this.ruSpan.className = 'hide';
        }
        this.div.append(this.ruSpan);
        this.ruShiftSpan = document.createElement('span');
        this.ruShiftSpan.innerHTML = this.ruShiftSpanValue;
        this.ruShiftSpan.className = 'hide';
        this.div.append(this.ruShiftSpan);
        this.spans = this.div.children;
      };
    }
  }
  // Первый ряд
  for (let i = 0; i < firstRow.length; i += 1) {
    firstRowKeys[i] = new Key(
      firstRow[i][0],
      firstRow[i][1],
      firstRow[i][2],
      firstRow[i][3],
      firstRow[i][3],
      row[0],
    );
    firstRowKeys[i].createKey();
  }
  // Второй ряд
  for (let i = 0; i < secondRow.length; i += 1) {
    secondRowKeys[i] = new Key(
      secondRow[i][0],
      secondRow[i][1],
      secondRow[i][2],
      secondRow[i][3],
      secondRow[i][4],
      row[1],
    );
    secondRowKeys[i].createKey();
  }
  // Третий ряд
  for (let i = 0; i < thirdRow.length; i += 1) {
    thirdRowKeys[i] = new Key(
      thirdRow[i][0],
      thirdRow[i][1],
      thirdRow[i][2],
      thirdRow[i][3],
      thirdRow[i][4],
      row[2],
    );
    thirdRowKeys[i].createKey();
  }
  // Четвертый ряд
  for (let i = 0; i < fourthRow.length; i += 1) {
    fourthRowKeys[i] = new Key(
      fourthRow[i][0],
      fourthRow[i][1],
      fourthRow[i][2],
      fourthRow[i][3],
      fourthRow[i][4],
      row[3],
    );
    fourthRowKeys[i].createKey();
  }
};
