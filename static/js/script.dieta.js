let box1 = document.querySelector(".container")
let box2 = document.querySelector(".container_2")
let box3 = document.querySelector(".container_3")
let box_snack1 = document.querySelector(".container_4")
let box_snack2 = document.querySelector(".container_5")
let box_snack3 = document.querySelector(".container_6")






function save(){
    //meal 1
    let decor_meal1 = localStorage.getItem("cross_off_zajtrk")

    document.querySelectorAll(".meal_done").forEach(el => {
        if(decor_meal1 === "cross"){
            el.classList.add("cross-text")
            box1.classList.add("bg")
        }
        else{
            el.classList.remove("cross-text")
            box1.classList.remove("bg")
        }
    })


    //meal 2
    let decor_meal2 = localStorage.getItem("crossoff_meal2")

    document.querySelectorAll(".meal2_done").forEach(el =>{
        if(decor_meal2 === "cross"){
            el.classList.add("cross-text")
            box2.classList.add("bg")

        }
        else{
            el.classList.remove("cross-text")
            box2.classList.remove("bg")
        }
    })


    //meal 3
    let decor_meal3 = localStorage.getItem("crossoff_meal3")

    document.querySelectorAll(".meal3_done").forEach(el => {
        if(decor_meal3 == "cross"){
            el.classList.add("cross-text")
            box3.classList.add("bg")
        }
        else{
            el.classList.remove("cross-text")
            box3.classList.remove("bg")
        }
    })

    //snack 1

    let decor_snack1 = localStorage.getItem("crossoff_snack1")

    document.querySelectorAll(".snack1_done").forEach(el => {
        if(decor_snack1 == "cross"){
            el.classList.add("cross-text")
            box_snack1.classList.add("bg")
        }
        else{
            el.classList.remove("cross-text")
            box_snack1.classList.remove("bg")
        }
    })

    //snack 2

    let decor_snack2 = localStorage.getItem("crossoff_snack2")

    document.querySelectorAll(".snack2_done").forEach(el => {
        if(decor_snack2 == "cross"){
            el.classList.add("cross-text")
            box_snack2.classList.add("bg")
        }
        else{
            el.classList.remove("cross-text")
            box_snack2.classList.remove("bg")
        }
    })


    //snack 3
    
    let decor_snack3 = localStorage.getItem("crossoff_snack3")

    document.querySelectorAll(".snack3_done").forEach(el =>{
        if(decor_snack3 == "cross"){
            el.classList.add("cross-text")
            box_snack3.classList.add("bg")
        }
        else{
            el.classList.remove("cross-text")
            box_snack3.classList.remove("bg")
        }
    })


        
    
}


function meal1_done(){
    let x = localStorage.getItem("cross_off_zajtrk")


    box1.classList.remove("rotate")
    void box1.offsetWidth
    box1.classList.add("rotate")


    if(x === "no_cross"){
        localStorage.setItem("cross_off_zajtrk", "cross")
        localStorage.setItem("box_cross_zajtrk", "cross")
    }
    else{
        localStorage.setItem("cross_off_zajtrk", "no_cross")
        localStorage.setItem("box_cross_zajtrk", "no_cross")
    }


    save()
}

function meal2_done(){
    let x = localStorage.getItem("crossoff_meal2")

    box2.classList.remove("rotate")
    void box2.offsetWidth
    box2.classList.add("rotate")

    if(x === "no_cross"){
        localStorage.setItem("crossoff_meal2", "cross")
        localStorage.setItem("boxbg_meal2", "cross")
    }
    else{
        localStorage.setItem("crossoff_meal2", "no_cross")
        localStorage.setItem("boxbg_meal2", "no_cross")
    }

    save()
}


function meal3_done(){
    let x = localStorage.getItem("crossoff_meal3")

    box3.classList.remove("rotate")
    void box3.offsetWidth
    box3.classList.add("rotate")

    if(x === "no_cross"){
        localStorage.setItem("crossoff_meal3", "cross")
        localStorage.setItem("boxbg_meal3", "cross")
    }
    else{
        localStorage.setItem("crossoff_meal3", "no_cross")
        localStorage.setItem("boxbg_meal3", "no_cross")
    }

    save()
}

function snack1_done(){
    let x = localStorage.getItem("crossoff_snack1")

    box_snack1.classList.remove("rotate")
    void box_snack1.offsetWidth
    box_snack1.classList.add("rotate")

    if(x == "no_cross"){
        localStorage.setItem("crossoff_snack1", "cross")
        localStorage.setItem("boxbg_snack1", "cross")
    }
    else{
        localStorage.setItem("crossoff_snack1", "no_cross")
        localStorage.setItem("boxbg_snack1", "no_cross")
    }

    save()
}
save()


function snack2_done(){
    let x = localStorage.getItem("crossoff_snack2")


    box_snack2.classList.remove("rotate")
    void box_snack2.offsetWidth
    box_snack2.classList.add("rotate")


    if(x == "no_cross"){
        localStorage.setItem("crossoff_snack2", "cross")
        localStorage.setItem("boxbg_snack2", "cross")
    }
    else{
        localStorage.setItem("crossoff_snack2", "no_cross")
        localStorage.setItem("boxbg_snack2", "no_cross")
    }

    save()
}


function snack3_done(){
    let x = localStorage.getItem("crossoff_snack3")

    box_snack3.classList.remove("rotate")
    void box_snack3.offsetWidth
    box_snack3.classList.add("rotate")

    if(x == "no_cross"){
        localStorage.setItem("crossoff_snack3", "cross")
        localStorage.setItem("boxbg_snack3", "cross")
    }
    else{
        localStorage.setItem("crossoff_snack3", "no_cross")
        localStorage.setItem("boxbg_snack3", "no_cross")
    }

    save()
}



save()
