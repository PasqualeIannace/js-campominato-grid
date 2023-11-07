let grid = document.getElementById("grid");

function play() {
    console.log("Hai cliccato")
    celleGenerator();
}

function celleGenerator(difficult) {
    //se difficoltà == facile
    //difficoltà == numCelle
    //entro nel for con i <= difficolta
    for(let i = 1; i <= 100; i++) {


        // grid.innerHTML += `<div class "square">${i}</div>`;
        let cella = document.createElement("div");
        cella.classList.add("square");
        cella.innerHTML += `${i}`;
        grid.appendChild(cella);

        // CLICK CELLA
        cella.addEventListener("click", function() {
            console.log("Cella: ", i);
        })
    }
    
    
}