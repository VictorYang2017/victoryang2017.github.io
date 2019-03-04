class TodoList {
    constructor(itemListClass, dateClass) {
        this.itemListClass = `.${itemListClass}`;
        this.dateClass = `.${dateClass}`;
        this.htmlInput = document.querySelector('.middle-container--input-box');
        this.htmlBottomContainer = document.querySelector(this.itemListClass);
        this.addBtn = document.querySelector('.middle-container--add-btn');
        this.htmlTodoName = '';
        this.htmlEditBtn = '';
        this.htmlDelBtn = '';
    }

    init() {
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
                            </div>`
            // sessionStorage.setItem(this.userValue,newListHtml);
            this.htmlBottomContainer.insertAdjacentHTML('afterbegin', newListHtml);
        };
        this.htmlTodoName = document.querySelectorAll('.todo-name');
        this.htmlEditBtn = document.querySelectorAll('.edit');
        this.htmlDelBtn = document.querySelectorAll('.del');
        this.htmlInput.value = '';
        this.updateList();
        this.crossOut();
        this.removeList();
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

    crossOut() {
        for (let i = 0; i < this.htmlTodoName.length; i++) {
            this.htmlTodoName[i].addEventListener('click', (evt) => {
                evt.preventDefault();
                evt.stopPropagation();
                if (evt.target === this.htmlTodoName[i]) {
                    const evtTargetLineThrough = evt.target.classList.contains('cross-out');
                    if (!evtTargetLineThrough) {
                        evt.target.classList.add('cross-out');
                    } else {
                        evt.target.classList.remove('cross-out');
                    }
                } else {
                    return '';
                }
            });
        }
    }

    updateList() {
        for (let i = 0; i < this.htmlEditBtn.length; i++) {
            this.htmlEditBtn[i].addEventListener('click', (evt) => {
                evt.preventDefault();
                evt.stopPropagation();
                if (evt.target.parentNode === this.htmlEditBtn[i]) {
                    const htmlPrevValue = evt.path[3].firstElementChild.textContent;
                    if (evt.path[3].firstElementChild.tagName === 'DIV') {
                        const htmlEditInput = document.createElement('input');
                        const htmlNewIcon = '<i class="fas fa-check"></i>';
                        htmlEditInput.classList.add('edit-input');
                        htmlEditInput.setAttribute('maxlength', '12');
                        evt.target.parentNode.innerHTML = htmlNewIcon;
                        evt.path[3].firstElementChild.style.display = 'none';
                        htmlEditInput.value = htmlPrevValue;
                        evt.path[3].insertBefore(htmlEditInput, evt.path[3].firstElementChild);
                    } else if (evt.path[3].firstElementChild.tagName === 'INPUT') {
                        const htmlNewValue = document.querySelector('.edit-input').value;
                        const htmlNewEditIcon = '<i class="fas fa-edit fa-sm"></i>';
                        evt.path[3].removeChild(evt.path[3].firstElementChild);
                        evt.target.parentNode.innerHTML = htmlNewEditIcon;
                        evt.path[3].firstElementChild.style.display = 'block';
                        evt.path[3].firstElementChild.innerHTML = htmlNewValue;
                    }
                }
            });
        }
    }

    removeList() {
        for (let i = 0; i < this.htmlDelBtn.length; i++) {
            this.htmlDelBtn[i].addEventListener('click', (evt) => {
                evt.preventDefault();
                evt.stopPropagation();
                if (evt.target.parentNode === this.htmlDelBtn[i]) {
                    evt.path[2].parentNode.remove();
                }
            });
        }
    }
}


const todoList = new TodoList('bottom-container', 'h5');
todoList.init();