// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const imagenes = [
    "https://tr.rbxcdn.com/9acb0c9e88b387eaad72d0001b3b4895/420/420/Hat/Png",
    "https://tr.rbxcdn.com/4df2042ccb4c121360ecc8b44bee4b46/420/420/Hat/Png",
    "https://www.models-resource.com/resources/big_icons/45/44368.png",
    "https://tr.rbxcdn.com/c0beded80f1e0cb3f94d726c2b5b5fcf/420/420/Hat/Png",
    "https://i.imgflip.com/83e33l.png",
    "https://tr.rbxcdn.com/d50c775a3531530c28c8b46a704164bc/420/420/Hat/Png",
    "https://i.pinimg.com/originals/a6/fe/da/a6feda98579cd23e6b497875a1051134.png",
    "https://i.pinimg.com/originals/6f/e2/69/6fe2691a6d620b9b4581fcf416da5e8d.png",
    "https://www.models-resource.com/resources/big_icons/53/52674.png",
    "https://tr.rbxcdn.com/e636d0babda1fed2a6925e853ef603ea/420/420/Hat/Png",
    "https://vignette.wikia.nocookie.net/roblox/images/f/ff/5285fd6b34a7c83b015aae18223d4d68.png/revision/latest?cb=20180227164256&path-prefix=ru"
    // Añade más URLs aquí
];

let amigos = [];
let imagenesUsadas = new Set();

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = '';
    actualizarListaAmigos();
}

function obtenerImagenAleatoria() {
    let imagenesDisponibles = imagenes.filter(img => !imagenesUsadas.has(img));
    if (imagenesDisponibles.length === 0) {
        imagenesUsadas.clear(); // Reinicia si todas las imágenes han sido usadas
        imagenesDisponibles = imagenes;
    }
    const indice = Math.floor(Math.random() * imagenesDisponibles.length);
    const imagen = imagenesDisponibles[indice];
    imagenesUsadas.add(imagen);
    return imagen;
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = obtenerImagenAleatoria();
        img.alt = 'Avatar';
        
        li.appendChild(img);
        li.appendChild(document.createTextNode(amigos[i]));
        listaAmigos.appendChild(li);        
    }
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        resultado.innerHTML = '<li>No hay amigos para sortear</li>';
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = 
    `<div class="container-2nd">
        <div class="banner-cont">
            <div class="img-contain"><img src="https://tr.rbxcdn.com/e986cdd408bbb7d11b0c00bee3e33a3e/420/420/Hat/Png"></div>
            <div class="section-title-kor"><p>추첨된 비밀 친구는:</p></div>
        </div>
        <div class="section-title">
            <div class="imag-contain"><img src="https://i.pinimg.com/736x/87/f4/29/87f429e7672f128c51fadeea5d188e81.jpg"></div>
        
            <p>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></p>
        </div>         
    </div>`;
    
    document.getElementById('botonReiniciar').style.display = 'block';
}

function resetear() {
    amigos = [];
    actualizarListaAmigos();
    resultado.innerHTML = '';

    document.getElementById('botonReiniciar').style.display = 'none';
}
