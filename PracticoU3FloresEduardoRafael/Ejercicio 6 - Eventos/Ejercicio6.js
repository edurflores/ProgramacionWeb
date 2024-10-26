function saludar(){
    let saludo = document.getElementById('saludo');

    saludo.innerHTML = 'Hola, bienvenido al Ejercicio 6 del Practico 3.';
    saludo.style.color = 'red';
}

window.addEventListener('load',(Event) => {
    let header = document.getElementsByTagName('header');
    let footer = document.getElementsByTagName('footer');

    //header.style.background-color = 'red';
    //footer.style.background-color = 'blue';
});

let botonData = document.getElementById('getDataBtn');
botonData.addEventListener('onclick',consulta());

function consulta(){
    const servidor = new XMLHttpRequest();
    servidor.open('GET','https://jsonplaceholder.typicode.com/posts');
    servidor.send();
    servidor.responseType = 'json';
    console.log(servidor);
}