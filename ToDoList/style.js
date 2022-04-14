let list =document.querySelector("ul");
let addbutton =document.getElementById("button");
let input = document.getElementById("input");
let sort = document.getElementById("sort")

let memory;
function toLocal(){
   memory= list.innerHTML;
  localStorage.setItem("memory",memory)
}


function addElement(){
  let li =document.createElement("li");
  let inputvalue=input.value;
  let a=document.createTextNode(inputvalue);
  
  li.appendChild(a);
  if(inputvalue == "" || inputvalue == " "){
    alert ("Metn daxil edilmeyib")
  }
  else{
    list.appendChild(li)

    let span =document.createElement("span");
    // let txt = document.createTextNode("x");
    span.className = "close";
    // span.appendChild(txt);
    li.appendChild(span);
  
    let close = document.getElementsByClassName("close");
  
      for (i = 0; i < close.length; i++) {
      close[i].addEventListener("click" ,function() {
      let listElement = this.parentElement;
      listElement.remove();
      toLocal()
     }) 
   }
  
   
  }
  input.value = ""
  toLocal()
}




window.addEventListener('load', () => {
  let li =document.createElement("li");
  let inputvalue=input.value;
  let a=document.createTextNode(inputvalue);
  let span =document.createElement("button");
    span.className = "close";
    li.appendChild(span);
  
    let close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].addEventListener("click" ,function() {
    let listElement = this.parentElement;
    listElement.remove();
    toLocal()
   }) 
  }
});

function sortListDir() {
  var  i, switching, b, shouldSwitch, dir, switchcount = 0;
  switching = true;
  dir = "asc"; 

  while (switching) {
    
    switching = false;
    b = list.getElementsByTagName("LI");
    
    for (i = 0; i < (b.length - 1); i++) {
      
      shouldSwitch = false;
     
      if (dir == "asc") {
        sort.style.transform ="rotate(180deg)"

        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        sort.style.transform ="rotate(0deg)"
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      
      switchcount ++;
    } else {
      
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   addElement()
  }
});

sort.addEventListener("click",sortListDir)

addbutton.addEventListener("click" ,addElement)


if (localStorage.getItem("memory")){
  list.innerHTML=localStorage.getItem("memory" , memory)
}
