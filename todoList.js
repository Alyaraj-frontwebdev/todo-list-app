let todos = [];

const list = document.getElementById('list');
const inp = document.getElementById('item');


function getTodo(){
    let span = "";
    todos.forEach((task, id) =>{
         span+= ` <span class="listItem" id="${task.id}">
                        <label for="check" id="label">
                            <input type="checkbox" id="check">
                            <input type="text" value="${task.text}" class="inp" readonly>
                        </label>
                        <button id="edit" onclick="edit(this);">
                        Edit
                        </button>
                        <button id="clear" onclick="remove(this);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </button>
                    </span>`;
    });
    list.innerHTML =  span;
}
function edit(n){
    if(n.innerHTML == "Edit"){
        n.parentElement.firstElementChild.lastElementChild.removeAttribute("readonly","readonly");
    n.parentElement.firstElementChild.lastElementChild.focus();
    n.innerHTML = "Save";
    }
    else{
        n.parentElement.firstElementChild.lastElementChild.setAttribute("readonly","readonly");
        n.innerHTML = "Edit";
    }
}
function remove(e){
    e.parentElement.remove();
    inp.focus();
}
function addtask(text){
    const todo = {
        text,
        id:Date.now(),
    };
    todos.push(todo);
    getTodo();
}

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    const text = inp.value.trim();
    if(text == ''){
        alert("Add a task to do...");
    }
    else if(text !=''){
        addtask(text);
        inp.value = '';
        inp.focus();
    }
});

