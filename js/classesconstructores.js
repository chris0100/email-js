
//////////////////////////////////////////
/////////////////////////////////////////
///////FORMA DE CREAR CLASES EN LA FORMA ANTIGUA
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

//CREAR UN PROTOTYPE - hace que el codigo sea mas facil de mantener
Cliente.prototype.tipoCliente = () =>{
    if (this.saldo > 1000){
        return 'gold';
    }
    else{
        return 'normal';
    }
};


Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, tu saldo es ${this.saldo}, tipo cliente es ${this.tipoCliente()}`;
};


Cliente.prototype.retirarSaldo = function(retiro) {
    return this.saldo -= retiro;
};



//SE CREA OBJETO
const persona = new Cliente('pedro',2000);
//console.log(persona.tipoCliente());
//console.log(persona);


console.log(persona.nombreClienteSaldo());
console.log('El restantes  es de ' + persona.retirarSaldo(153));


///////////////////////////////////////////////////
/////////////////HEREDAR PROTOTYPES A OTRO OBJETO//
//////////////////////////////////////////////////

//Se crea una clase que hereda de Cliente
function Empresa(nombre,saldo,telefono,tipo) {
    Cliente.call(this,nombre,saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}


//se hace la heredacion del prototipo tambien.
Empresa.prototype = Object.create(Cliente.prototype);
const empresaObj = new Empresa('udemy',125000,342345,'educacion');

//llama al metodo de prototype
console.log(empresaObj.nombreClienteSaldo());


//////////////////////////////////////////////
///////////////Object Create//////////////////
//////////////////////////////////////////////

//SE CREA LA CLASE
const Customer = {
    imprimirSaldo: function () {
        return `hola ${this.nombre} tu saldo es ${this.saldo}`
    },
    retirarSaldo : function (retiro) {
        return this.saldo -= retiro;
    }
};

//CREAR EL OBJETO
const mary = Object.create(Customer);
mary.nombre = 'mary';
mary.saldo = 65000;
console.log('El saldo resatante es de '+mary.retirarSaldo(  400));

///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
////////////CREANDO CLASES CON EMAC6//////////////////////////////////////////////

class ClienteNew {
    constructor(nombre,apellido,saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    //estos metodos automaticamente se colocan como prototypes
    imprimirSaldo(){
        return `hola ${this.nombre} ${this.apellido}, tu saldo es de ${this.saldo}`;
    }

    tipoCliente(){
        if (this.saldo > 1000){
            return 'gold';
        }
        return 'normal';
    }
    retirarSaldo(retiro){
        return this.saldo -= retiro;
    }

    //metodos estaticos
    static bienvenida(mensaje){
        return `hola, este es tu mensaje: ${mensaje}`;
    }
}


class EmpresaNew extends ClienteNew{
    constructor(nombre,apellido,saldo,telefono,tipo) {
        //va hacia el constructor padre.
        super(nombre,apellido,saldo);
        //no son del constructor padre
        this.telefono = telefono;
        this.tipo = tipo;
    }

    static bienvenidaEmp(){
        return `hola empresa`;
    }
}

const empresaObjNew = new EmpresaNew('simantec','ester',3434,2323,'herreria');
console.log(empresaObjNew.tipoCliente());



/*const maria = new ClienteNew('maria','perez',1000);
console.log(maria);
console.log(maria.imprimirSaldo());
console.log(maria.tipoCliente());
console.log(maria.retirarSaldo(200));
console.log(maria.imprimirSaldo());

console.log(ClienteNew.bienvenida('bateria baja'));*/
























