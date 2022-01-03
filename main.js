let colors =["blue","yellow","red","green","brown","orange","tomato","black","white"] 

let button = document.getElementById("button");
button.addEventListener("click",function(){
    //console.log("test")
    //random
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container'); 
    container.style.background = randomColor;
})

