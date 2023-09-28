const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const box = document.getElementById("list-container");
let liczba = 0;
let licznik = 0;
let bodyHeight = "100vh";

function addTask(){
        if (inputbox.value === ""){
            alert("You must write something")
        } else if(inputbox.value.length > "50"){
            alert("Too many characters")
            inputbox.value = "";
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputbox.value;
            listContainer.appendChild(li);
            liczba += 1
            licznik += 1
            let span = document.createElement("span");
            span.innerHTML = "\u00d7"
            li.appendChild(span);
            if (liczba > 18 && licznik >= 3){
                bodyHeight = `calc(${bodyHeight} + 10vh)`;
                document.body.style.height = bodyHeight;
                licznik = 0;
            }
        }
        inputbox.value = "";
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}
)