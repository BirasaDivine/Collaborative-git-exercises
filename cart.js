const cart=document.getElementsByClassName('add-to-cart');
Array.from(cart).forEach(element => 
    element.addEventListener("click", (element)=> console.log("My Button")        
    )
);