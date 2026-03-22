let extra = JSON.parse(localStorage.getItem("extra"))

if(extra == null){
    extra = [];
}


let list = document.querySelector(".list")

let div = document.createElement("div")
let p = document.createElement("p")
let btn = document.createElement("button")

function save(){
    for(let i = 0; i < 14; i++){
        let index = document.getElementById(i)
        let index2 = document.getElementById(i + 26)
    
        let x = localStorage.getItem("hidden" + i)


        if( x == "on"){
            index.classList.remove("hidden")
            index2.classList.add("hidden")
        }
        else{
            index.classList.add("hidden")
            index2.classList.remove("hidden")
        }
        
    }



    list.innerHTML = " ";
    count = 0;
    
    extra.forEach(el => {
        //div
        let div = document.createElement("div")
        div.className = "extra"

        //text
        let p = document.createElement("p")
        p.textContent = el;

        //button
        let btn = document.createElement("button")
        btn.id = count;
        btn.className = "btn"
        btn.textContent = "remove"
        btn.onclick = () => remove(btn.id)

        div.append(p, btn)

        list.append(div)

        count += 1;

    })

    localStorage.setItem("extra", JSON.stringify(extra))


}



function swap(id){
    let index = document.getElementById(id)
    let index2 = document.getElementById(id + 26)
    
    let hide = localStorage.getItem("hidden" + id)

    if(hide == "on"){
        index.classList.add("hidden")
        index2.classList.remove("hidden")
        localStorage.setItem("hidden" + id, "off");
    }
    else{
        index2.classList.add("hidden")
        index.classList.remove("hidden")
        localStorage.setItem("hidden" + id, "on");
    }

    save(id)
}

function add(){
    let text = document.getElementById("input").value

    extra.push(text)

    document.getElementById("input").value = "";

    save()
}

function remove(id){
    extra.splice(id, 1)

    localStorage.setItem("extra", JSON.stringify(extra))

    save()
}

save()