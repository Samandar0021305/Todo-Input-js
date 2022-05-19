let lesson = [
    {bookName:"Math"},
    {bookName:"Pyhis"},
    {bookName:"Hitory"},
    {bookName:"Geografy"},
    {bookName:"International"}
]


let col = document.getElementById("col")
let ulEl = document.createElement("ul")
let row = document.getElementById("row")

// TodoLesson()
LessonAdd()

function LessonAdd(){
    
for(let i = 0; i < lesson.length; i++){
    let liEl = document.createElement("li");
    let pEl = document.createElement("p");
    let btn = document.createElement("button");
   pEl.style.marginLeft = "30px";
   liEl.style.display = "flex";
   liEl.style.marginTop = "15px";
   btn.textContent = "Delete";
   pEl.textContent = `${lesson[i].bookName}`
    
    liEl.appendChild(btn);
    liEl.appendChild(pEl);
    ulEl.appendChild(liEl);

    btn.addEventListener("click",function(){
        liEl.remove()
    })
}
}
row.appendChild(ulEl)


function TodoLesson(){    
let form = document.createElement("form")
let inputTodo = document.createElement("input")
let btnAdd = document.createElement("button")

inputTodo.setAttribute("placeholder","add input")
btnAdd.innerHTML = "Add todo";


form.appendChild(inputTodo)
form.appendChild(btnAdd)
col.appendChild(form)
}
