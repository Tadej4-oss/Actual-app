let todos = JSON.parse(localStorage.getItem('todo'));

if (todos == null){
    todos = [];
}

let list = document.querySelector(".list")

console.log(todos)



function save(){
    list.innerHTML = "";
    let count = 0;

    todos.forEach(todo => {
        let newdiv = document.createElement("div");
        newdiv.id = "item";

        let newtext = document.createElement("p");
        newtext.textContent = todo;

        let newbtn = document.createElement("button");
        newbtn.id = count;
        newbtn.className = "remove_btn"
        newbtn.textContent = "Done";
        newbtn.onclick = () => remove(newbtn.id)


        list.append(newdiv)

        newdiv.append(newtext, newbtn)

        count += 1;
    })

    localStorage.setItem('todo', JSON.stringify(todos));
}


function test(){
    let text = document.getElementById("input").value;

    todos.push(text)

    document.getElementById("input").value = "";

    save()
}

function remove(id){

    todos.splice(id, 1)

    localStorage.setItem('todo', JSON.stringify(todos))

    save()
}
save()