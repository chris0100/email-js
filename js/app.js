//variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const btnReset = document.getElementById('resetBtn');
//onst formularioEnviar = document.getElementById('enviar-mail');


eventListeners();

function eventListeners() {

    //carga inicial de pagina
    document.addEventListener('DOMContentLoaded', e => {
        btnEnviar.disabled = true;
    });


    /////////////////////////////////////////////////////////////////////////////
    //validacion de campos formulario. blur apenas se escribe y se sale del campo
    /////////////////////////////////////////////////////////////////////////////
    email.addEventListener('blur', e => {
        validarCampos(email);
    });



    asunto.addEventListener('blur', e => {
        validarCampos(asunto);
    });



    mensaje.addEventListener('blur', e => {
        validarCampos(mensaje);
    });



    //Accion del boton de enviar de submit
    //formularioEnviar.addEventListener('submit',...)
    btnEnviar.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('spinner').style.display = 'block';

        setTimeout(() => {
            let imagenFinal = document.createElement('img');
            imagenFinal.src = 'img/mail.gif';
            imagenFinal.width = 150;
            imagenFinal.id = 'spinner2';
            console.log(imagenFinal);

            const positionFinal = document.getElementById('loaders');
            positionFinal.replaceChild(imagenFinal, document.getElementById('spinner'));

            setTimeout(() => {
                document.getElementById('spinner2').style.display = 'none';
            }, 3000);
        }, 3000);
    });


    //////////////////////////////////////////////
    //limpiar campos del formulario
    btnReset.addEventListener('click', e => {
        limpiarCampos(email);
        limpiarCampos(asunto);
        limpiarCampos(mensaje);
    });
}




///////////////////////////////////////////////////////
//valida si el campo esta vacio o tiene algun contenido
///////////////////////////////////////////////////////
function validarCampos(campos) {
    if (campos.value === '') {
        campos.style.borderBottomColor = '#D81B60';
        campos.classList.add('error');
    } else {
        if (campos.type === 'email') {
            if (!email.value.includes('@')) {
                console.log('no tiene arroba');
                campos.style.borderBottomColor = '#D81B60';
                campos.classList.add('error');
            } else {
                campos.style.borderBottomColor = '#43cea2';
                campos.classList.remove('error');
            }
        } else {
            campos.style.borderBottomColor = '#43cea2';
            campos.classList.remove('error');
        }
    }


    //siempre verifica que todos los campos esten llenos para habilitar boton.
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
    }
}



//////////////////////////////////////////////////
///limpia los campos para todos
function limpiarCampos(campos) {
    campos.value = '';
    campos.style.borderBottomColor = '#9e9e9e';
}
