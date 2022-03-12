export class Cuenta{
    #saldo = 0;
    #password;
    #email;

    constructor(name, lastName, email, password){
        this.name = name;
        this.lastName = lastName;
        this.#email = email;
        this.#password = password;
    }

    depositar(monto){
        this.#saldo += monto;
    }

    retirar(monto){
        if(monto > this.#saldo){
            console.log("No posee el saldo necesario")    
        }else{
            this.#saldo -= monto;
        }
    }

    transferir(monto, cuenta){
        if(monto > this.#saldo){
            console.log("No posee el saldo necesario")
        }else{
            this.retirar(monto);
            cuenta.depositar(monto)
        }
    }

    get saldo(){
        return this.#saldo
    }

    set password(newPassword){
        this.#password = newPassword;
    }
    
    get email(){
        return this.#email;
    }

    set email(newEmail){
        this.#email = newEmail;
    }
}
