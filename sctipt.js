//1.1

let str = "abcde"
alert(str[0])
alert(str[1])
alert(str[4])

//1.2
let x1 = parseInt(prompt("Введите первое число:"))
let x2 = parseInt(prompt("Введите второе число:"))
alert(x1 > 0 || x2 > 0)

//1.3
let age1 = parseInt(prompt("Введите возраст:"))
if (age1 >= 18){
    console.log("Совершеннолетний");
    
}
else {
    console.log("Несовершеннолетний");
    
}

//2.1(1)

let age = parseInt(prompt("ВВедите возраст:"))
if (age >= 65){
    console.log("Поздравляем с пенсионным возрастом!!")
}
else {
    console.log("Вам ещё рано на пенсию")
}

// 2.2(3)
let number = parseInt(prompt("Введите число:"))
if (number % 2 === 0){
    console.log("Это четное число")
}
else {
    console.log("Это нечетное число")
}

// //2.3(5)
let login = prompt("Введите логин:")
let password = prompt("Введите пароль:")
if (login === "admin" && password === "12345"){
    console.log("Добро пожаловать!")
}
else {
    console.log("Неверный логин или пароль")
}

//3.1

 let point = document.querySelectorAll(".main")
 console.log(point)
 point.forEach(function(click){
     click.addEventListener("click",function(){
         console.log(click.style)
     if(click.style.backgroundColor === "blue"){
         click.style.backgroundColor = "red"
     } else{
         click.style.backgroundColor = "blue"
         click.style.margin = "100px"
     }
})
})

//4.1
let site = document.querySelector("body")
let site1 = document.querySelector(".nastia")

site.addEventListener("mousemove", function(e){
    console.log("1234")
    site1.innerHTML = "x: " + e.clientX + " y: " + e.clientY
}) 