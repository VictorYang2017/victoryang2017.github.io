class TodoList {
  constructor(itemListClass, dateClass) {
    this.itemListClass = `.${itemListClass}`;
    this.dateClass = `${dateClass}`;
    this.htmlInput = document.querySelector('.middle-container--input-box');
    this.htmlDateH5 = document.querySelector(this.dateClass);
    this.htmlBottomContainer = document.querySelector(this.itemListClass);
    this.addBtn = document.querySelector('.middle-container--add-btn');
    this.htmlTodoName = '';
    this.htmlEditBtn = '';
    this.htmlDelBtn = '';
  }

  init() {
    this.showDate();
    this.addLists();
  }

  get userValue() {
    const htmlInputValue = this.htmlInput.value;
    return htmlInputValue;
  }

  createUserList() {
    let newListHtml = '';
    if (!this.userValue) {
      this.htmlInput.style.border = '2px solid #e26259';
      return '';
    } else {
      this.htmlInput.style.border = '2px solid #449d48';
      const listIndivClass = this.userValue.replace(/\s/g, '-').toLowerCase();
      newListHtml = `<div class="bottom-container--todo todo ${listIndivClass}">
                                <div class="todo-name">${this.userValue}</div>
                                <div class="todo-actions actions">
                                    <div class="edit"><i class="fas fa-edit fa-sm"></i></div>
                                    <div class="del"><i class="fas fa-trash-alt fa-sm"></i></div>
                                </div>
                            </div>`;
      this.htmlBottomContainer.insertAdjacentHTML('afterbegin', newListHtml);
    }
    this.htmlTodoName = document.querySelector('.todo-name');
    this.htmlEditBtn = document.querySelector('.edit');
    this.htmlDelBtn = document.querySelector('.del');
    this.htmlInput.value = '';

    this.htmlEditBtn.addEventListener('click', this.updateList);
    this.htmlTodoName.addEventListener('click', this.crossOut);
    this.htmlDelBtn.addEventListener('click', this.removeList);
  }

  addLists() {
    this.addBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      this.createUserList();
    });
    this.htmlInput.addEventListener('keydown', (evt) => {
      if (evt.which === 13) {
        evt.preventDefault();
        evt.stopPropagation();
        this.createUserList();
      }
    });
  }

  crossOut(evt) {

    const evtTargetLineThrough = evt.target.classList.contains('cross-out');

    if (!evtTargetLineThrough) {
      evt.target.classList.add('cross-out');
    } else {
      evt.target.classList.remove('cross-out');
    }


  }

  updateList(evt) {
    const indivListItem = evt.target.parentElement.parentElement.parentElement;
    if (indivListItem.children[0].tagName === 'DIV') {
      const htmlEditInput = document.createElement('input');
      htmlEditInput.className = `edit-input`;
      htmlEditInput.setAttribute('maxlength', '12');
      indivListItem.insertBefore(
        htmlEditInput,
        indivListItem.firstElementChild
      );
      indivListItem.children[1].style.display = 'none';
      indivListItem.children[0].style.display = 'block';
      indivListItem.children[0].value = indivListItem.classList[2];
    } else if (indivListItem.children[0].tagName === 'INPUT') {
      const newItemInputBoxValue = indivListItem.children[0].value;
      if (newItemInputBoxValue === indivListItem.classList[2]) {
        indivListItem.children[0].style.display = 'none';
        indivListItem.children[1].style.display = 'block';
        indivListItem.removeChild(indivListItem.children[0]);
        return '';
      } else {
        indivListItem.classList.remove(indivListItem.classList[2]);
        indivListItem.classList.add(newItemInputBoxValue);
        indivListItem.children[1].innerText = newItemInputBoxValue;
        indivListItem.children[0].style.display = 'none';
        indivListItem.children[1].style.display = 'block';
        indivListItem.removeChild(indivListItem.children[0]);
      }
    }
  }

  removeList(evt) {
    const clickedItem = evt.target.parentElement.parentElement.parentElement;
    clickedItem.remove();
  }

  showDate() {
    const dateLib = new Date();
    const currentYear = dateLib.getFullYear('yyyy');
    const currentMonth = dateLib.getMonth() + 1;
    const currentDate = dateLib.getDate();
    this.htmlDateH5.innerHTML = `${currentDate}/${currentMonth}/${currentYear}`;
  }
}

const todoList = new TodoList('bottom-container', 'h5');
todoList.init();
