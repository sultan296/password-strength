        let display = document.getElementById("input")
        let para = document.getElementById("para")
        let strength = document.getElementById("strength")
        let button = document.getElementById("button")

        button.addEventListener("click", ()=>{
            display.value = ""
            para.style.display = "none"
            strength.innerHTML = ""
            display.style.borderColor = "white"
        })

        display.addEventListener("input",()=>{
            if (display.value.length > 0) {
                para.style.display = "block"
            } else {
                para.style.display = "none"
            }

            if (display.value.length <= 4) {
                strength.innerHTML = "weak"
                para.style.color = "red"
                display.style.borderColor = "red"
            } else if(display.value.length <= 8){
                strength.innerHTML = "medium"
                para.style.color = "orange"
                display.style.borderColor = "orange"
            } else if(display.value.length < 23){
                strength.innerHTML = "strong"
                para.style.color = "green"
                display.style.borderColor = "green"
            }

        })