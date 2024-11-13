let tasks=JSON.parse(localStorage.getItem('tasks')) || [];

let buttonElement = document.getElementById("addbtn");
let inputElement = document.getElementById("input");
let resultElement = document.getElementById("result");
let errorElement = document.getElementById("error");

buttonElement.addEventListener('click',function(){

    if(inputElement.value === ''){
        errorElement.innerHTML = "Add Your list!";
        errorElement.style.color = "red";
    }
   else {
    let obj = {name:inputElement.value ,status :false}
    tasks.push(obj);
    showList(tasks)

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

})

function showList(array){

    errorElement.innerHTML = ''

    resultElement.innerHTML = ''

    array.forEach((data,index) => {
        
        let liElement = document.createElement("li");
        liElement.innerHTML = `<span style="text-decoration: ${data.status ? 'line-through' : 'none'}"> ${data.name}
                               <button onclick = "toggleComplete(${index})">${data.status ? '<i class="fa-solid fa-rotate-left"></i>': '<i class="fa-solid fa-circle-check"></i>'}</button>
                               <button onclick="removeItem(${index})"><i class="fa-solid fa-trash-can"></i></button>                     
                               </span>`

        resultElement.appendChild(liElement)
    })
 
    inputElement.value = ''
}

function removeItem(position){

    tasks.splice(position,1)
    showList(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
function toggleComplete(position){
    tasks[position].status = ! tasks[position].status
    showList(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}


showList(tasks)
