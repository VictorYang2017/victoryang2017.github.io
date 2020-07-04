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
                    if (evt.path[3].children[0].tagName === 'DIV') {
                        const htmlEditInput = document.createElement('input');
                        htmlEditInput.className = `edit-input`;
                        htmlEditInput.setAttribute('maxlength', '12');
                        evt.path[3].insertBefore(htmlEditInput, evt.path[3].firstElementChild);
                        evt.path[3].children[1].style.display = 'none';
                        evt.path[3].children[0].style.display = 'block';
                        evt.path[3].children[0].value = evt.path[3].classList[2];
                    }else if(evt.path[3].children[0].tagName === 'INPUT'){
                        const itemParentHtmlClass = this.htmlEditBtn[i].parentNode.parentNode.classList;
                        const itemParentHtmlValueClass = this.htmlEditBtn[i].parentNode.parentNode.classList[2];
                        const newItemInputBoxValue = this.htmlEditBtn[i].parentNode.parentNode.firstElementChild.value;
                        this.htmlEditBtn[i].parentNode.parentNode.children[1].innerHTML = newItemInputBoxValue;
                        itemParentHtmlClass.remove(itemParentHtmlValueClass);
                        itemParentHtmlClass.add(newItemInputBoxValue);
                        evt.path[3].children[0].style.display = 'none';
                        evt.path[3].children[1].style.display = 'block';
                        evt.path[3].removeChild(evt.path[3].children[0]);
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