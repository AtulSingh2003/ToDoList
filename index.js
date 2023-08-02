const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks =localStorage.getItem("tasks")
?JSON.parse(localStorage.getItem("tasks"))
:[];

showAllTasks();

function showAllTasks(){
    tasks.forEach((value , index) => {
        const div = document.createElement("div");
        div.setAttribute("class" , "task");
        
        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const p = document.createElement("p");
        p.innerText = value.title;
        innerDiv.append(p);
        
        const span = document.createElement("span");
        span.innerText = value.description;
        innerDiv.append(span);
        
        const button = document.createElement("button");
        button.setAttribute("class" , "deleteBtn");
        button.innerText = "-";
        div.append(button);

        button.addEventListener("click" , ()=> {
            removeDiv();
            tasks.splice(index , 1);
            localStorage.setItem("tasks" , JSON.stringify(tasks));
            showAllTasks();
        });

        container.append(div);

    });
}
function removeDiv(){
    tasks.forEach(() => {
        const div = document.querySelector(".task");
        div.remove();
    });
}

form.addEventListener("submit" , (e) =>{
    e.preventDefault();
    removeDiv();
    tasks.push({
        title: title.value,
        description: description.value,
    });
    localStorage.setItem("tasks" , JSON.stringify(tasks));
    showAllTasks();
});