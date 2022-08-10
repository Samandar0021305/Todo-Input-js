let lesson = [
    "Math","Pyhis","Hitory","Geografy","International"
]

var list = document.getElementById("list")

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

function render(){
    for(let item of lesson){
        var liEl = liElement()
        var DeleteBtn  = btn()
        var textEl = document.createElement("p");
        textEl.textContent = item
        liEl.appendChild(textEl)
        liEl.appendChild(DeleteBtn)
        list.appendChild(liEl)
    }
}

render()

