
// script para recibir los datos del formulario en Formspree que lo desactivamos porque no pudimos hacerlo funcionar.


const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new formData(this)
    const response = fetch(this.action,{
        method: this.method,
        body: form, 
        headers:{
            'Accept': 'application/json'
        }
    })
    if (response.ok){
        this.reset()
        alert('Gracias por contactarnos, te enviaremos pronto más novedades')
    }
}


// // Crea una carpeta “js” y un archivo “productos.js”
// const { createApp } = Vue
//     createApp({
//         data() {
//             return { productos:[],
                   
//                     url:'http://mcerda.pythonanywhere.com/productos', 
//                     cargando:true,
//                     /*atributos para el guardar los valores del formulario */
//                     id:0,
//                     nombre:"",
//                     imagen:"",
//                     stock:0,
//                     precio:0,
//                     }
//                 },
//                     methods: {
//                     fetchData(url) {
//                     fetch(url)
//                     .then(response => response.json())
//                     .then(data => {
//                     this.productos = data;
//                     this.cargando=false
//                     })
//                     .catch(err => {
//                     console.error(err);
//                     this.error=true
//                     })
//                     },
//                     eliminar(producto) {
//                     const url = this.url+'/' + producto;
//                     var options = {
//                     method: 'DELETE',
//                     }
//                     fetch(url, options)
//                     .then(res => res.text()) // or res.json()
//                     .then(res => {
//                     location.reload();
//                     })
//                     },
//                     grabar(){
//                     let producto = {
//                     nombre:this.nombre,
//                     precio: this.precio,
//                     stock: this.stock,
//                     imagen:this.imagen
//                     }
//                     var options = {
//                     body:JSON.stringify(producto),
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     redirect: 'follow'
//                     }
//                     fetch(this.url, options)
//                     .then(function () {
//                     alert("Registro grabado")
//                     window.location.href = "./productos.html";
//                     })
//                     .catch(err => {
//                     console.error(err);
//                     alert("Error al Grabarr")

//                     })
//                     }
//                     },
//                 created() {
//                 this.fetchData(this.url)
//                 },
//                 }).mount('#app')




                