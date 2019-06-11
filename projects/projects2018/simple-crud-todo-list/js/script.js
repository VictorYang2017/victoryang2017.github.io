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
                    const indivListItem = this.htmlEditBtn[i].parentNode.parentNode;
                    if (indivListItem.children[0].tagName === 'DIV') {
                        const htmlEditInput = document.createElement('input');
                        htmlEditInput.className = `edit-input`;
                        htmlEditInput.setAttribute('maxlength', '12');
                        indivListItem.insertBefore(htmlEditInput, indivListItem.firstElementChild);
                        indivListItem.children[1].style.display = 'none';
                        indivListItem.children[0].style.display = 'block';
                        indivListItem.children[0].value = indivListItem.classList[2];
                    }else if(indivListItem.children[0].tagName === 'INPUT'){
                        const itemParentHtmlClass = this.htmlEditBtn[i].parentNode.parentNode.classList;
                        const itemParentHtmlValueClass = this.htmlEditBtn[i].parentNode.parentNode.classList[2];
                        const newItemInputBoxValue = this.htmlEditBtn[i].parentNode.parentNode.firstElementChild.value;
                        this.htmlEditBtn[i].parentNode.parentNode.children[1].innerHTML = newItemInputBoxValue;
                        itemParentHtmlClass.remove(itemParentHtmlValueClass);
                        itemParentHtmlClass.add(newItemInputBoxValue);
                        indivListItem.children[0].style.display = 'none';
                        indivListItem.children[1].style.display = 'block';
                        indivListItem.removeChild(indivListItem.children[0]);
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
                    console.log(this.htmlDelBtn[i].parentNode)
                    this.htmlDelBtn[i].parentNode.parentNode.remove();
                }
            });
        }
    }

    showDate(){
        const dateLib = new Date();
        const currentYear = dateLib.getFullYear('yyyy');
        const currentMonth = dateLib.getMonth() + 1;
        const currentDate = dateLib.getDate();
        this.htmlDateH5.innerHTML = `${currentDate}/${currentMonth}/${currentYear}`;
    }
}


const todoList = new TodoList('bottom-container', 'h5');
todoList.init();