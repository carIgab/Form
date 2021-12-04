let lista = document.querySelectorAll(".a1");
function Active(){
    lista.forEach((item) =>
    item.classList.remove("on"));
    this.classList.add("on")
}
lista.forEach((item)=>
item.addEventListener("mouseover",Active))

let lista2 = document.querySelectorAll(".a2");
function Active2(){
    lista2.forEach((item) =>
    item.classList.remove("on2"));
    this.classList.add("on2")
}
lista2.forEach((item)=>
item.addEventListener("mouseover",Active2))

let lista3 = document.querySelectorAll(".a3");
function Active3(){
    lista3.forEach((item) =>
    item.classList.remove("on3"));
    this.classList.add("on3")
}
lista3.forEach((item)=>
item.addEventListener("mouseover",Active3))

function limpando (){
    let name = document.querySelector("#name").value = "";
    let email = document.querySelector("#email"). value ="";
    let sla3 = document.querySelectorAll(".a3");
    sla3.forEach((item) =>
    item.classList.remove("on3"));

    let sla2 = document.querySelectorAll(".a2");
    sla2.forEach((item) =>
    item.classList.remove("on2"));

    let sla = document.querySelectorAll(".a1");
    sla.forEach((item) =>
    item.classList.remove("on"));
}
var l1;
var l2;
function enviando(){
    let nome = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let a1 = document.querySelector(".on").value;
    let a2 = document.querySelector(".on2").value;
    let a3 = document.querySelector(".on3").value;

    var list = ["bicycle","boat","bus","car","walk"]
    var list2 = ["css","html","js","python","react"]
    var list3 = ["exercise","read","watch","play","hear"]

    l1 = document.querySelector("#name")
    l2 = document.querySelector("#email")

    console.log(list[a1])
    console.log(list2[a2])
    console.log(list3[a3])
    console.log(nome + email)

    var al = "ja";
    
    if(nome =="" && email == ""){
        l1.style.border = "0.5px solid red"
        l1.placeholder = "Enter Name"

        l2.style.border = "0.5px solid red"
        l2.placeholder = "Enter Email"

    }else if( nome == ""){
        l1.style.border = "0.5px solid red"
        l1.placeholder = "Enter Name"
    }else if (email ==""){
        l2.style.border = "0.5px solid red"
        l2.placeholder = "Enter Email"
    }else{
        location = "#"
    }
}


