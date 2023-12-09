
const { createApp } = Vue
    createApp({
        data() {
            return {
                productos:[],
                url:'https://abelitu.pythonanywhere.com/productos', // Sección objetos -->  https://abelitu.pythonanywhere.com/productos/seccion/Objetos
                error:false,
                cargando:true,                
                id:0,
                nombre:"",
                imagen:"",
                stock:0,
                precio:0,
                secciones:""
                }
                },
                methods: {
                fetchData(url) {
                fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true
                })
        },
        eliminar(producto) {
            const url = this.url+'/' + producto;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.json()) 
                .then(res => {
                    location.reload();
                })
        },
        grabar(){
            let producto = {
                nombre:this.nombre,
                precio: this.precio,
                stock: this.stock,
                imagen:this.imagen,
                secciones:this.secciones

            }
            var options = {
                body:JSON.stringify(producto),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./productos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabarr")

                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')


// Js del pop-up


let btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});



let btnAbrirPopupe = document.getElementById('btn-abrir-popupe'),
	overlaye = document.getElementById('overlaye'),
	popupe = document.getElementById('popupe'),
	btnCerrarPopupe = document.getElementById('btn-cerrar-popupe');

btnAbrirPopupe.addEventListener('click', function(){
	overlaye.classList.add('active');
	popupe.classList.add('active');
});

btnCerrarPopupe.addEventListener('click', function(e){
	e.preventDefault();
	overlaye.classList.remove('active');
	popupe.classList.remove('active');
});

        // Función para exportar a Excel
        
                