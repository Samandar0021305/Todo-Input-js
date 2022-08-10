let lesson = [
    "Math","Pyhis","Hitory","Geografy","International"
]
var todoInput = document.getElementById("todoInput");
var todoForm = document.getElementById("todo-form")

var list = document.getElementById("list");
todoForm.addEventListener("submit",(event)=>{
    event.preventDefault();
 let a = todoInput.value
    render(a)
  todoInput.value = ""
 
})

function btn(){
    let btnEl  = document.createElement("button")
    btnEl.textContent = "Delete";
    btnEl.setAttribute("clas","btn btn-danger");
    btnEl.setAttribute("id","btnEl")
    return btnEl
}

function liElement(){
    let lielement = document.createElement("li");
    lielement.setAttribute("class","d-flex ")
    lielement.setAttribute("id","item")
    return lielement; 
}

    for(let item of lesson){
        let a = item
        render(a)
    }



function render(a){
    var liEl = liElement()
    var DeleteBtn  = btn()
    var textEl = document.createElement("p");
    textEl.textContent = a
    liEl.appendChild(textEl)
    liEl.appendChild(DeleteBtn)
    list.appendChild(liEl)

    DeleteBtn.addEventListener("click",()=>{
        liEl.remove()
    })
}
