// Inciso 1

function saludar(){
    let saludo = document.getElementById('saludo');

    saludo.innerHTML = 'Hola, bienvenido al Ejercicio 6 del Practico 3.';
    saludo.style.color = 'red';
}

// Inciso 2

document.addEventListener('load',modificaColor());

function modificaColor() {
    setTimeout(function() { // setTimeout(funcion anonima,intervalo de tiempo en ms);
        let header = document.querySelector('header');
        let footer = document.querySelector('footer');

        header.style.backgroundColor = 'red';
        footer.style.backgroundColor = 'green';
    },5000);
}

// Inciso 3

let botonData = document.getElementById("getDataBtn");
botonData.addEventListener("click",consulta);

function consulta(){
    let listaDatos = document.createElement('ul');

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {

            let item1 = document.createElement('li');
            item1.textContent = "id: " + json[0].id;
            listaDatos.appendChild(item1);

            let item2 = document.createElement('li');
            item2.textContent = "title: " + json[0].title;
            listaDatos.appendChild(item2);

            let item3 = document.createElement('li');
            item3.textContent = "body: " + json[0].body;
            listaDatos.appendChild(item3);

            let item4 = document.createElement('li');
            item4.textContent = "userId: " + json[0].userId;
            listaDatos.appendChild(item4);

            let item5 = document.createElement('li');
            item5.textContent = "id: " + json[1].id;
            listaDatos.appendChild(item5);

            let item6 = document.createElement('li');
            item6.textContent = "title: " + json[1].title;
            listaDatos.appendChild(item6);

            let item7 = document.createElement('li');
            item7.textContent = "body: " + json[1].body;
            listaDatos.appendChild(item7);

            let item8 = document.createElement('li');
            item8.textContent = "userId: " + json[1].userId;
            listaDatos.appendChild(item8);

            let item9 = document.createElement('li');
            item9.textContent = "id: " + json[2].id;
            listaDatos.appendChild(item9);

            let item10 = document.createElement('li');
            item10.textContent = "title: " + json[2].title;
            listaDatos.appendChild(item10);

        });

   document.body.appendChild(listaDatos);
}