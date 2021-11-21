
const btn = document.getElementById("boton");
const btn2 = document.getElementById("borrar");
//document.getElementById("pagar").innerHTML = "Total a Pagar: $";


btn.addEventListener('click', () =>{
    const cantidad = document.getElementById("cantidad").value;
    const select = document.getElementById("inputCat").value;
    
    let descuento;
    let total;

    if(select == 1){
        descuento = 200 - (200*0.80);
        total = cantidad * descuento;
        
    }else if (select == 2){
        descuento = 200 - (200*0.50);
        total = cantidad * descuento;
    }else{
        descuento = 200 - (200*0.15);
        total = cantidad * descuento;
    }
    document.getElementById("pagar").innerHTML = "Total a Pagar: $"+total;
});

btn2.addEventListener('click', () =>{
   //document.getElementById("cantidad").value ="";
   document.getElementById("name").value="";
   document.getElementById("last").value="";
   document.getElementById("email").value="";
   document.getElementById("cantidad").value = "";
   document.getElementById("inputCat").value = 1;
   document.getElementById("pagar").innerHTML = "Total a Pagar: $";
});