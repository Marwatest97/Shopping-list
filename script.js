const mainBTN = document.querySelector(".Mainbtn");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

mainBTN.addEventListener("click",function(){
    
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.classList = `list-group-item`;


    
    li.addEventListener("click",function(event) {
        event.stopPropagation();
        event.target.classList.toggle("done");
    })
    const Deletebtn = document.createElement("button");

    Deletebtn.classList = "delete btn btn-primary";
    Deletebtn.appendChild(document.createTextNode("Delete"));

    Deletebtn.addEventListener("click",function(event){
        event.target.parentNode.remove();
    })

    li.appendChild(Deletebtn);
    ul.appendChild(li);
   
    
});





