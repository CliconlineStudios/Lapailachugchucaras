
function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("pedido").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=0;
}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function servicios() {


    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "grid";
    document.getElementById("carito2").style.display = "flex";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
}

function mapas() {


    document.getElementById("mapas").style.display = "block";
   
}



function catalogos() {
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "grid";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("pedido").style.display = "none";
    document.getElementById("carito2").style.display = "flex";
    conta=0;
    contador=1;
   
}

function pedido() {
    document.getElementById("screen4").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("pedido").style.display = "block";
    document.getElementById("carito2").style.display = "flex";
    conta=0;
    contador=2; 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
       });
 
    
}

function cotizar() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    conta=0;
    contador=2; 
 
    
}

let serviMPD =  ``;

function mesa() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("calcular").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("carito2").style.display = "none";
    document.querySelector("#servicio").value =  `Mesa Número`;
    document.getElementById("submit").textContent=  `Pedir en Mesa`;
    document.getElementById("servi").textContent=  `Ingresa el Número de Mesa`;
    serviMPD = ``;
    conta=0;
    contador=2; 
 
    
}


function llevar() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("calcular").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("carito2").style.display = "none";
    document.querySelector("#servicio").value =  `Para Llevar`;
    document.getElementById("servi").textContent=  `Servicio`;
    document.getElementById("submit").textContent=  `Costo para llevar`;
    serviMPD = `Más Costo Para LLevar`;
    conta=0;
    contador=2; 
 
    
}

function domicilio() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("calcular").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("carito2").style.display = "none";
    document.querySelector("#servicio").value =  `a Domicilio `;
    document.getElementById("servi").textContent=  `Servicio`;
    document.getElementById("submit").textContent=  `Costo de Envío`;
    serviMPD = `Más Costo de Envío`;
    conta=0;
    contador=2; 
 
    
}

    
//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("pedido").style.display = "none";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("carito2").style.display = "none";
        conta=0;
        contador=0;

    }
    else{
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("pedido").style.display = "none";
        document.getElementById("carito2").style.display = "flex";
        contador=1;
        

    }}


    function cerrarpedido() {


            document.getElementById("portafolio").style.display = "none";
            document.getElementById("side").style.display = "none";
            document.getElementById("screen4").style.display = "none";
            document.getElementById("pedido").style.display = "block";
            document.getElementById("carito2").style.display = "flex";
            contador=2;
            conta=0;
            
          
   
    
        }


// llevar cerrar side automatico

document.querySelector('.tarjeta').addEventListener('click',()=>{
    document.getElementById("side").style.display = "none";
    document.getElementById("mapas").style.display = "none";
    conta=0;
    });

   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }

        document.querySelector('.descriptitulo')   
        .addEventListener('click',()=>{
            document.getElementById("products-id2").style.display = "block";
           });



// llevar arriba
     

document.querySelector('.side')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});


document.querySelector('.back')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});
  



        document.querySelector('.side1')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });


        document.querySelector('.side3')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });


//carritodecompras
     

        //variables
let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');

let amountProduct2 = document.querySelector('.count-product2');
let amountProduct3 = document.querySelector('.count-product3');

let priceTotal2 = document.querySelector('.price-total2')
let detalle = document.querySelector('.descrip1')
let containerBuyCart2 = document.querySelector('.card-items2');
let descrip = document.querySelector('.descrip1')



let buyThings = [];
let totalCard = 0;
let countProduct = 0;


function showCart2(x){
    document.getElementById("products-id2").style.display = "block";
}

function closeBtn2(){
    document.getElementById("products-id2").style.display = "none";
}


function showCart(x){
    document.getElementById("products-id").style.display = "block";
}
function closeBtn(){
     document.getElementById("products-id").style.display = "none";
}

//functions
loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', deleteProduct);

    containerBuyCart2.addEventListener('click', deleteProduct2);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement; 
        readTheContent(selectProduct);     
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
                priceTotal.innerHTML = totalCard;
                amountProduct.innerHTML = 0;
                priceTotal2.innerHTML = totalCard;
                amountProduct2.innerHTML = "";
                amountProduct3.innerHTML = "";
               
                
                
            }
        });
     
      
        buyThings.forEach(value => {
            if (value.id == deleteId) {
                countProduct = (countProduct)-(value.amount);
                amountProduct.innerHTML = 0;
                buyThings = buyThings.filter(product => product.id !== deleteId);
      
           
             
               
                
                
            }
        });
       
    }
    loadHtml();
    loadHtml2();
}


let cantenv = 1;
let cantenvio = 3;
let cantenvioss = 0;

function deleteProduct2(e) {
    if (e.target.classList.contains('delete-product2')) {
        const deleteId = e.target.getAttribute('data-id2');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
                priceTotal.innerHTML = totalCard;
                amountProduct.innerHTML = 0;
                priceTotal2.innerHTML = totalCard;
                amountProduct2.innerHTML = "";
                amountProduct3.innerHTML = "";
                detalle.innerHTML = "";
                cantenvio = parseFloat(cantenvio) - parseFloat(cantenv);
                cantenvioss = cantenvio ;
             
                   
                
            }
        });
       buyThings.forEach(value => {
            if (value.id == deleteId) {
                countProduct = (countProduct)-(value.amount);
                amountProduct.innerHTML = 0;
                buyThings = buyThings.filter(product => product.id !== deleteId);
      
           
             
               
                
                
            }
        });
       
    }
    loadHtml();
    loadHtml2();
}



function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                countProduct++;
                return product;
            } else {
                return product;
                
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
    loadHtml2();
    
   
    //console.log(infoProduct);
}

function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">Precio ${price}$</h5>
                <h6>Cantidad: ${amount}</h6>
            </div>
            <span  class="delete-product" data-id="${id}">X</span>
            
            
        `;

       

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        

        amountProduct.innerHTML = countProduct;
        amountProduct3.innerHTML = countProduct;
    });
}



function loadHtml2(){
    clearHtml2();
    buyThings.forEach(product => {
        const {image, title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item2');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content2">
                <h5>${title}</h5>
                <h5 class="cart-price2">Precio ${price}$</h5>
                <h6>Cantidad: ${amount}</h6>
            </div>
            <span class="delete-product2" data-id2="${id}">+</span>
            
        `;

        containerBuyCart2.appendChild(row);
        priceTotal2.innerHTML = totalCard;
        amountProduct2.innerHTML = "Cantidad" + countProduct ;
        detalle.innerHTML = document.querySelector('.card-items2').textContent;

       
    });
}



 function clearHtml(){
    containerBuyCart.innerHTML = '';

    
 }

 function clearHtml2(){
    containerBuyCart2.innerHTML = '';

    
 }



 // formulario

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "593963954424";
  
    let cliente = document.querySelector("#cliente").value;
    let contacto = document.querySelector("#contacto").value;
    let servicio = document.querySelector("#servicio").value;
    let fpagos = document.querySelector("#modulos").value;
    let detalle =document.querySelector('.card-items2').textContent;
    let resp = document.querySelector("#respuesta");

    
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=593963954424&text=
    *La Paila Chugchucara*%0A
    *Orden de Compra*%0A
    *Nombre de Cliente*%0A
          ${cliente}%0A
          *Numero de Contacto*%0A
          ${contacto}%0A
          *Detalles del Pedido*%0A
          ${detalle}%0A
          *Servicio*%0A
          ${servicio}%0A
          *Forma de Pago*%0A
          ${fpagos}%0A
          *Total del Pedido*%0A
          ${totalCard} ${serviMPD}%0A`;
  
    if (cliente === "" || contacto === "" | servicio === "" ) {
      resp.classList.add("fail");
      resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Su Orden se Envio`;
  
    window.open(url);
  });
    
    
    
    
      

        
        




