let divImagecontainer =document.getElementById("photogallary");

let imgEelm=document.createElement("img")
imgEelm.src = "./public/images/Screenshot (124).png"

imgEelm.width=650
imgEelm.height=550

divImagecontainer.appendChild(imgEelm)

let delButton =document.createElement("button")
delButton.innerText="delete";
divImagecontainer.appendChild(delButton)

delButton.addEventListener("click",function(){
    imgEelm.remove();
    delButton.remove();
})

let zoominbutton = document.createElement("button")
zoominbutton.innerText=" + "

let zoomoutbutton=document.createElement("button")
zoomoutbutton.innerText=" - "

divImagecontainer.appendChild(zoominbutton)
divImagecontainer.appendChild(zoomoutbutton)

const scaleupfactor =1.5;

zoominbutton.addEventListener("click",function(){
//zoom in
imgEelm.width *=scaleupfactor;
imgEelm.height *= scaleupfactor;
})



zoomoutbutton.addEventListener("click",function(){
// zoom out    
imgEelm.width /=scaleupfactor;
imgEelm.height /= scaleupfactor;

})

