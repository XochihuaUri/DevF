function areYouABeauty(answer){
    if(answer === "sí"){
        console.log("Ciertamente")
    }else if(answer === "no"){
        console.log("No te creo")
    }else{
        console.log('Por favor responda con un "sí" o un "no"')
    }
}
/*
areYouABeauty("sí")
areYouABeauty("no")
areYouABeauty("nose")
*/

function divisbleEntre2(num){
    if(num%2 ==0){
        console.log(num + " es divisible entre 2")
    }else{
        console.log(num + " no es divisible entre 2")
    }
}
/*
divisbleEntre2(4)
divisbleEntre2(5)*/

function isItEven(){
    let num = parseInt(prompt("Introduzca su numero"))
    if(num % 2 === 0){
        alert("El número es par")
    }else{
        alert('El número es impar')
    }
}
/*
isItEven()
isItEven()*/

function winner(){
    let user = parseInt(prompt("Introduzca número de cliente"))
    if(user === 1000){
        console.log("Ganaste un premio")
    }else{
        console.log(user + " Lo sentimos, sigue participando")
    }
}
/*
winner()
winner()*/
function isEqual(num1, num2){
    if(num1 < num2){
        console.log("El número " + num1 + " es menor que " + num2)
    }else if(num2 < num1){
        console.log("El número " + num2 + " es menor que " + num1)
    }
}
/*
isEqual(2,3)
isEqual(5,1)
isEqual(1,1)*/

function whoIsTheBiggest(num1, num2, num3){
    if(num1 === num2 || num1 === num3 || num2 === num3){
        
    }
}