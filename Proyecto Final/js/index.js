import { agregarAlCarrito } from "./funcionesCarrito.js";  
import { obtenerCarrito } from "./storage.js";   
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-tarjetas");

   
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    
    const jsonText = document.getElementById("productos-data").textContent;
    const data = JSON.parse(jsonText);

    
    data.forEach(producto => {

        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card");

        const img = document.createElement("img");
        img.alt = producto.nombre;

        
        img.src = `./img/${producto.img}`;

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;

        const boton = document.createElement("button");
        boton.classList.add("btn");
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {
            agregarAlCarrito(producto);
        });

        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        contenedor.appendChild(tarjeta);
    });
});
