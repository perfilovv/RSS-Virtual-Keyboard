window.onload = () => {
  if (localStorage.getItem('language') === null) {
    localStorage.setItem('language', 'en');
  }
  let lang = localStorage.getItem('language');
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
    ['Backquote', '`', '~', 'ё', 'Ё'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '@', '2', '"'],
    ['Digit3', '3', '#', '3', '№'],
    ['Digit4', '4', '$', '4', ';'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', '^', '6', ':'],
    ['Digit7', '7', '&', '7', '?'],
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '', '0', ')'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']];
  const secondRow = [
    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['KeyQ', 'q', 'Q', 'й', 'Й'],
    ['KeyW', 'w', 'W', 'ц', 'Ц'],
    ['KeyE', 'e', 'E', 'у', 'У'],
    ['KeyR', 'r', 'R', 'к', 'К'],
    ['KeyT', 't', 'T', 'е', 'Е'],
    ['KeyY', 'y', 'Y', 'н', 'Н'],
    ['KeyU', 'u', 'U', 'г', 'Г'],
    ['KeyI', 'i', 'I', 'ш', 'Ш'],
    ['KeyO', 'o', 'O', 'щ', 'Щ'],
    ['KeyP', 'p', 'P', 'з', 'З'],
    ['BracketLeft', '[', '{', 'х', 'Х'],
    ['BracketRight', ']', '}', 'ъ', 'Ъ'],
    ['Delete', 'Delete', 'Delete', 'Delete', 'Delete']];
  const thirdRow = [
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['KeyA', 'a', 'A', 'ф', 'Ф'],
    ['KeyS', 's', 'S', 'ы', 'Ы'],
    ['KeyD', 'd', 'D', 'в', 'В'],
    ['KeyF', 'f', 'F', 'а', 'А'],
    ['KeyG', 'g', 'G', 'п', 'П'],
    ['KeyH', 'h', 'H', 'р', 'Р'],
    ['KeyJ', 'j', 'J', 'о', 'О'],
    ['KeyK', 'k', 'K', 'л', 'Л'],
    ['KeyL', 'l', 'L', 'д', 'Д'],
    ['Semicolon', ';', ':', 'ж', 'Ж'],
    ['Quote', '\'', '"', 'э', 'Э'],
    ['Backslash', '\\', '|', '\\', '/'],
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ];
  const fourthRow = [
    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['KeyZ', 'z', 'Z', 'я', 'Я'],
    ['KeyX', 'x', 'X', 'ч', 'Ч'],
    ['KeyC', 'c', 'C', 'с', 'С'],
    ['KeyV', 'v', 'V', 'м', 'М'],
    ['KeyB', 'b', 'B', 'и', 'И'],
    ['KeyN', 'n', 'N', 'т', 'Т'],
    ['KeyM', 'm', 'M', 'ь', 'Ь'],
    ['Comma', ',', '<', 'б', 'Б'],
    ['Period', '.', '>', 'ю', 'Ю'],
    ['Slash', '/', '?', '.', ','],
    ['ArrowUp', '↑', '↑', '↑', '↑'],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift']];
  const fifthRow = [
    ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['Space', ' ', ' ', ' ', ' '],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['ArrowLeft', '←', '←', '←', '←'],
    ['ArrowDown', '↓', '↓', '↓', '↓'],
    ['ArrowRight', '→', '→', '→', '→'],
    ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']];
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
  const fifthRowKeys = [];

  class Key {
    constructor(name, enSpan, enShiftSpan, ruSpan, ruShiftSpan, parent) {
      this.name = name;
      this.parent = parent;
      this.enSpanValue = enSpan;
      this.enShiftSpanValue = enShiftSpan;
      this.ruSpanValue = ruSpan;
      this.ruShiftSpanValue = ruShiftSpan;
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
        } else { this.enSpan.className = 'hide'; }
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
        } else { this.ruSpan.className = 'hide'; }
        this.div.append(this.ruSpan);
        this.ruShiftSpan = document.createElement('span');
        this.ruShiftSpan.innerHTML = this.ruShiftSpanValue;
        this.ruShiftSpan.className = 'hide';
        this.div.append(this.ruShiftSpan);
        this.spans = this.div.children;
      };
      this.switchLanguage = () => {
        if (this.enSpan.className === 'show') {
          this.enSpan.className = 'hide';
          this.ruSpan.className = 'show';
          this.curSpan = ruSpan;
          localStorage.setItem('language', 'ru');
          lang = 'ru';
        } else if (this.ruSpan.className === 'show') {
          this.ruSpan.className = 'hide';
          this.enSpan.className = 'show';
          this.curSpan = enSpan;
          localStorage.setItem('language', 'en');
          lang = 'en';
        } else if (this.enShiftSpan.className === 'show') {
          this.enShiftSpan.className = 'hide';
          this.ruShiftSpan.className = 'show';
          this.curSpan = ruShiftSpan;
          localStorage.setItem('language', 'ru');
          lang = 'ru';
        } else if (this.ruShiftSpan.className === 'show') {
          this.ruShiftSpan.className = 'hide';
          this.enShiftSpan.className = 'show';
          this.curSpan = enShiftSpan;
          localStorage.setItem('language', 'en');
          lang = 'en';
        }
      };
      this.switchCase = () => {
        if (lang === 'en') {
          if (this.enSpan.className === 'show') {
            this.enSpan.className = 'hide';
            this.enShiftSpan.className = 'show';
            this.curSpan = enShiftSpan;
          } else {
            this.enSpan.className = 'show';
            this.curSpan = enSpan;
            this.enShiftSpan.className = 'hide';
          }
        } else if (this.ruSpan.className === 'show') {
          this.ruSpan.className = 'hide';
          this.ruShiftSpan.className = 'show';
          this.curSpan = ruShiftSpan;
        } else {
          this.ruSpan.className = 'show';
          this.curSpan = ruSpan;
          this.ruShiftSpan.className = 'hide';
        }
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
      firstRow[i][4],
      row[0],
    );
    firstRowKeys[i].createKey();
  }
  firstRowKeys[firstRow.length - 1].div.style.width = '110px';
  firstRowKeys[firstRow.length - 1].div.style.fontSize = '16px';
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
  secondRowKeys[0].div.style.width = '65px';
  secondRowKeys[0].div.style.fontSize = '16px';
  secondRowKeys[secondRow.length - 1].div.style.width = '95px';
  secondRowKeys[secondRow.length - 1].div.style.fontSize = '16px';
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
  thirdRowKeys[0].div.style.width = '80px';
  thirdRowKeys[0].div.style.fontSize = '16px';
  thirdRowKeys[thirdRow.length - 1].div.style.width = '80px';
  thirdRowKeys[thirdRow.length - 1].div.style.fontSize = '16px';
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
  fourthRowKeys[0].div.style.width = '95px';
  fourthRowKeys[0].div.style.fontSize = '16px';
  fourthRowKeys[fourthRow.length - 1].div.style.width = '119px';
  fourthRowKeys[fourthRow.length - 1].div.style.fontSize = '16px';
  // Пятый ряд
  for (let i = 0; i < fifthRow.length; i += 1) {
    fifthRowKeys[i] = new Key(
      fifthRow[i][0],
      fifthRow[i][1],
      fifthRow[i][2],
      fifthRow[i][3],
      fifthRow[i][4],
      row[4],
    );
    fifthRowKeys[i].createKey();
  }
  fifthRowKeys[0].div.style.width = '65px';
  fifthRowKeys[3].div.style.width = '350px';
  fifthRowKeys[fifthRow.length - 1].div.style.width = '65px';

  let allRowKeys = [];
  allRowKeys = firstRowKeys.concat(secondRowKeys, thirdRowKeys, fourthRowKeys, fifthRowKeys);
  // Обработка нажатий
  let shiftDown = false;
  let capsOn = false;
  document.addEventListener('keydown', (e) => {
    allRowKeys.forEach((x) => {
      if (e.code === x.name) {
        if (e.code === 'CapsLock') {
          if (!capsOn) {
            x.div.style.background = '#6e69b47c';
            x.div.style.transform = 'scale(0.9)';
            capsOn = true;
            for (let i = 13; i < allRowKeys.length; i += 1) {
              allRowKeys[i].switchCase();
            }
          } else if (capsOn) {
            x.div.style.background = '#1100ff7c';
            x.div.style.transform = 'scale(1)';
            capsOn = false;
            for (let i = 13; i < allRowKeys.length; i += 1) {
              allRowKeys[i].switchCase();
            }
          }
          return;
        }
        x.div.style.background = '#6e69b47c';
        x.div.style.transform = 'scale(0.9)';
        if ((e.altKey) && (e.shiftKey)) {
          allRowKeys.forEach((y) => {
            y.switchLanguage();
          });
        }
        if (e.code === 'Tab') {
          e.preventDefault();
          input.value += '\t';
        } else if (e.code === 'Enter') {
          e.preventDefault();
          input.value += '\n';
        } else if ((e.code === 'ShiftLeft') || (e.code === 'ShiftRight')) {
          if (!shiftDown) {
            shiftDown = true;
            allRowKeys.forEach((y) => {
              y.switchCase();
            });
          }
        } else if (e.code === 'Delete') {
          e.preventDefault();
          input.value = input.value.substring(1, input.value.length);
        } else if (e.code === 'Backspace') {
          e.preventDefault();
          input.value = input.value.substring(0, input.value.length - 1);
        } else if ((e.code === 'ControlLeft') || (e.code === 'ControlRight')) {
          e.preventDefault();
        } else if ((e.code === 'AltLeft') || (e.code === 'AltRight')) {
          e.preventDefault();
        } else if (e.target !== input) {
          input.value += x.curSpan;
        }
      }
    });
  });
  document.addEventListener('keyup', (e) => {
    allRowKeys.forEach((x) => {
      if (e.code === x.name) {
        if (e.code !== 'CapsLock') {
          x.div.style.background = '#1100ff7c';
          x.div.style.transform = 'scale(1)';
          if ((e.code === 'ShiftLeft') || (e.code === 'ShiftRight')) {
            shiftDown = false;
            allRowKeys.forEach((y) => {
              y.switchCase();
            });
          }
        }
      }
    });
  });
  // Подсветка кнопок при наведении
  document.addEventListener('mouseover', (e) => {
    if (e.target.className === 'key') {
      e.target.style.background = '#6e69b47c';
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.className === 'key') {
      e.target.style.background = '#1100ff7c';
    }
  });
  // Обработка мыши
  let clickTarget = '';
  document.addEventListener('mousedown', (e) => {
    const event = new Event('keydown');
    event.code = e.target.id;
    clickTarget = e.target.id;
    document.dispatchEvent(event);
  });
  document.addEventListener('mouseup', () => {
    const event = new Event('keyup');
    event.code = clickTarget;
    document.dispatchEvent(event);
  });
};
