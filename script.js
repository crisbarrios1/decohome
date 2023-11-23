
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
