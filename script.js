let tasks=JSON.parse(localStorage.getItem('tasks')) || [];

let buttonElement = document.getElementById("addbtn");
let inputElement = document.getElementById("input");
let resultElement = document.getElementById("result");

buttonElement.addEventListener('click',function(){

    let obj = {name:inputElement.value ,status :false}
    tasks.push(obj);
    showList(tasks)

    localStorage.setItem('tasks', JSON.stringify(tasks))

})

function showList(array){

    resultElement.innerHTML = ''

    array.forEach((data,index) => {
        
        let liElement = document.createElement("li");
        liElement.innerHTML = `<span style="text-decoration: ${data.status ? 'line-through' : 'none'}"> ${data.name}
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

showList(tasks)
